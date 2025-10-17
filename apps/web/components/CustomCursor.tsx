"use client";
import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true); // Сразу видимый
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; opacity: number; scale: number }>>([]);
  const lastPosition = useRef({ x: 0, y: 0 });
  const sparkleIdRef = useRef(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Быстрая инициализация курсора
    setIsReady(true);
    setIsVisible(true);
    
    let animationFrameId: number;
    
    const updateMousePosition = (e: MouseEvent) => {
      // Отменяем предыдущий кадр анимации
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Запланируем обновление на следующий кадр
      animationFrameId = requestAnimationFrame(() => {
        const currentX = e.clientX;
        const currentY = e.clientY;
        
        // Вычисляем скорость движения мыши
        const deltaX = currentX - lastPosition.current.x;
        const deltaY = currentY - lastPosition.current.y;
        const distance = Math.abs(deltaX) + Math.abs(deltaY);
        
        // Вращаем бриллиант в зависимости от скорости
        if (distance > 2) {
          setRotation(prev => prev + distance * 0.3);
        }
        
        // Создаем блики при движении
        if (distance > 1) {
          const newSparkle = {
            id: sparkleIdRef.current++,
            x: currentX + (Math.random() - 0.5) * 15,
            y: currentY + (Math.random() - 0.5) * 15,
            opacity: 1,
            scale: Math.random() * 0.3 + 0.3
          };
          
          setSparkles(prev => [...prev, newSparkle]);
          
          // Удаляем блик через 0.6 секунды (быстрее)
          setTimeout(() => {
            setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
          }, 600);
        }
        
        setMousePosition({ x: currentX, y: currentY });
        lastPosition.current = { x: currentX, y: currentY };
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('hover-target')));
    };

    // Добавляем слушатели событий с passive для лучшей производительности
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Скрываем стандартный курсор
    document.body.style.cursor = 'none';

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Блики за курсором */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-[9998] transition-all duration-600 ease-out"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            transform: `translate(-50%, -50%) scale(${sparkle.scale})`,
            opacity: sparkle.opacity,
          }}
        >
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle
              cx="3"
              cy="3"
              r="1.5"
              fill="#FFD700"
              opacity="0.9"
            />
            <circle
              cx="3"
              cy="3"
              r="0.8"
              fill="#FFF8DC"
            />
          </svg>
        </div>
      ))}

      {/* Кастомный курсор-бриллиант */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-100"
        style={{
          transform: `translate3d(${mousePosition.x - 16}px, ${mousePosition.y - 16}px, 0) rotate(${rotation}deg)`,
          willChange: 'transform',
        }}
      >
        {isHovering ? (
          /* Блестящая звездочка при наведении */
          <div className="relative">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-2xl"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F59E0B"
                stroke="#D97706"
                strokeWidth="1"
              />
              
              {/* Блеск в центре */}
              <circle
                cx="12"
                cy="9"
                r="2"
                fill="#FBBF24"
                opacity="0.9"
              />
              
              {/* Дополнительные блики */}
              <circle
                cx="10"
                cy="7"
                r="0.8"
                fill="#FCD34D"
                opacity="0.8"
              />
              <circle
                cx="14"
                cy="8"
                r="0.6"
                fill="#FCD34D"
                opacity="0.7"
              />
            </svg>
          </div>
        ) : (
          /* Обычная звездочка */
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-lg"
          >
            <path
              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"
              fill="#FCD34D"
              stroke="#F59E0B"
              strokeWidth="1"
            />
            
            {/* Тонкий блик */}
            <circle
              cx="12"
              cy="9"
              r="1.2"
              fill="#FEF3C7"
              opacity="0.7"
            />
          </svg>
        )}
      </div>
    </>
  );
}
