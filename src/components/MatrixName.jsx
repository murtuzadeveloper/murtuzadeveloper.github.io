import React, { useState, useEffect, useRef, useCallback } from 'react';

// Matrix Glyphs: Japanese Katakana, Binary, Hex, and Cyber glyphs

const MATRIX_CHARS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ:;,.<>/\\|_+=-*#%&@$';


/**
 * Matrix Rain Canvas Background
 */
export const MatrixRainBackground = ({
  opacity = 1,
  color = '#22c55e',
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    // Smaller font = more Matrix columns
    const fontSize = 15;
    let columns = Math.floor(width / fontSize);

    let drops = Array.from(
      { length: columns },
      () => Math.floor(Math.random() * -40)
    );

    const handleResize = () => {
      if (!canvas.parentElement) return;

      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;

      columns = Math.floor(width / fontSize);

      drops = Array.from(
        { length: columns },
        () => Math.floor(Math.random() * -40)
      );
    };

    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Dark transparent overlay keeps the trails visible
      ctx.fillStyle = 'rgba(2, 6, 23, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${fontSize}px monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        const char =
          MATRIX_CHARS[
          Math.floor(Math.random() * MATRIX_CHARS.length)
          ];

        const x = i * fontSize + fontSize / 2;
        const y = drops[i] * fontSize;

        // Bright Matrix head
        ctx.fillStyle = '#86efac';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#22c55e';

        ctx.fillText(char, x, y);

        // Green body
        ctx.fillStyle = color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#16a34a';

        ctx.fillText(
          MATRIX_CHARS[
          Math.floor(Math.random() * MATRIX_CHARS.length)
          ],
          x,
          y - fontSize
        );

        // Extra darker character behind
        ctx.fillStyle = '#15803d';
        ctx.shadowBlur = 3;
        ctx.shadowColor = '#14532d';

        ctx.fillText(
          MATRIX_CHARS[
          Math.floor(Math.random() * MATRIX_CHARS.length)
          ],
          x,
          y - fontSize * 2
        );

        ctx.shadowBlur = 0;

        // Restart column
        if (y > height && Math.random() > 0.96) {
          drops[i] = Math.floor(Math.random() * -15);
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none rounded-[3rem]"
      style={{
        opacity,
        mixBlendMode: 'screen',
      }}
    />
  );
};

/**
 * Matrix Animated Name / Text Component
 */
export const MatrixName = ({
  text = 'MURTUZA KHALID SALEEM',
  className = '',
  speed = 45,
  revealDelay = 3,
  autoRestartInterval = 4000,
  enableHover = true,
}) => {
  const [displayText, setDisplayText] = useState([]);
  const [isDecoding, setIsDecoding] = useState(true);
  const intervalRef = useRef(null);
  const autoRestartRef = useRef(null);

  const startMatrixAnimation = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsDecoding(true);

    const chars = text.split('');
    let iteration = 0;
    const maxIterations = chars.length * revealDelay + 15;

    // Initialize with random matrix characters or spaces
    setDisplayText(
      chars.map((char) => ({
        char: char === ' ' ? ' ' : MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
        isLocked: char === ' ',
        isHighlight: false,
      }))
    );

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        let allLocked = true;
        const updated = chars.map((targetChar, index) => {
          if (targetChar === ' ') {
            return { char: ' ', isLocked: true, isHighlight: false };
          }

          const lockThreshold = index * revealDelay;
          const isLocked = iteration >= lockThreshold;
          const isHighlight = iteration >= lockThreshold - 2 && iteration < lockThreshold + 1;

          if (!isLocked) {
            allLocked = false;
            return {
              char: MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
              isLocked: false,
              isHighlight,
            };
          }

          return {
            char: targetChar,
            isLocked: true,
            isHighlight: false,
          };
        });

        if (allLocked && iteration >= maxIterations) {
          clearInterval(intervalRef.current);
          setIsDecoding(false);
        }

        return updated;
      });

      iteration++;
    }, speed);
  }, [text, speed, revealDelay]);

  // Initial mount trigger
  useEffect(() => {
    startMatrixAnimation();

    if (autoRestartInterval > 0) {
      autoRestartRef.current = setInterval(() => {
        startMatrixAnimation();
      }, autoRestartInterval);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (autoRestartRef.current) clearInterval(autoRestartRef.current);
    };
  }, [startMatrixAnimation, autoRestartInterval]);

  // Handle manual hover trigger
  const handleMouseEnter = () => {
    if (enableHover) {
      startMatrixAnimation();
    }
  };

  // Group characters into words for clean responsive wrapping
  const words = [];
  let currentWord = [];
  displayText.forEach((item, idx) => {
    if (item.char === ' ') {
      if (currentWord.length > 0) {
        words.push({ word: currentWord, key: `word-${words.length}` });
        currentWord = [];
      }
      words.push({ isSpace: true, key: `space-${idx}` });
    } else {
      currentWord.push({ ...item, key: `char-${idx}` });
    }
  });
  if (currentWord.length > 0) {
    words.push({ word: currentWord, key: `word-${words.length}` });
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={`relative inline-block cursor-pointer select-none group font-mono ${className}`}
      title="Click or hover to re-decrypt"
      onClick={startMatrixAnimation}
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {words.map((item) => {
          if (item.isSpace) {
            return <span key={item.key} className="inline-block w-2">&nbsp;</span>;
          }
          return (
            <span key={item.key} className="inline-flex whitespace-nowrap">
              {item.word.map((c) => (
                <span
                  key={c.key}
                  className={`inline-block transition-colors duration-75 ${c.isHighlight
                    ? 'text-green-400 scale-110 drop-shadow-[0_0_5px_rgba(74,222,128,0.4)] font-bold'
                    : !c.isLocked
                      ? 'text-green-800 font-bold drop-shadow-[0_0_3px_rgba(34,197,94,0.25)]'
                      : 'text-green-700 italic group-hover:text-green-400 transition-colors drop-shadow-[0_0_5px_rgba(34,197,94,0.15)]'
                    }`}
                  style={{
                    fontFamily: c.isLocked ? 'inherit' : 'Consolas, monospace',
                  }}
                >
                  {c.char}
                </span>
              ))}
            </span>
          );
        })}

        {/* Matrix Terminal Cursor */}
        <span
          className={`inline-block w-2.5 h-8 bg-green-500 ml-1.5 align-middle shadow-[0_0_10px_#22c55e] ${isDecoding ? 'opacity-100 animate-pulse' : 'opacity-0 group-hover:opacity-100 transition-opacity'
            }`}
        />
      </div>

      {/* Cyber Subtitle / Decryption status hint */}
      <div className="flex items-center gap-2 mt-2 text-[10px] font-mono tracking-widest uppercase text-green-500/80">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
        <span>{isDecoding ? 'SYSTEM_DECRYPTING...' : 'DECRYPTED: IDENTITY_CONFIRMED'}</span>
      </div>
    </div>
  );
};

export default MatrixName;
