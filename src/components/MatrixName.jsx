import React, { useState, useEffect, useRef, useCallback } from 'react';

// Matrix Glyphs: Japanese Katakana, Binary, Hex, and Cyber glyphs

const MATRIX_CHARS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ:;,.<>/\\|_+=-*#%&@$';


/**
 * Matrix Rain Canvas Background
 */
export const MatrixRainBackground = ({ opacity = 0.25, color = '#22c55e' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 15, 30, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright tip on top
        ctx.fillStyle = '#ffffff';
        ctx.fillText(char, x, y);

        // Matrix Green body
        ctx.fillStyle = color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = color;
        ctx.fillText(char, x, y - fontSize);
        ctx.shadowBlur = 0;

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
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
      className="absolute inset-0 w-full h-full pointer-events-none rounded-[3rem] overflow-hidden"
      style={{ opacity }}
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
  autoRestartInterval = 8000,
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
                      ? 'text-white scale-110 drop-shadow-[0_0_12px_rgba(74,222,128,1)] font-bold'
                      : !c.isLocked
                        ? 'text-green-400 font-bold drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]'
                        : 'text-white italic group-hover:text-green-300 transition-colors drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]'
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
