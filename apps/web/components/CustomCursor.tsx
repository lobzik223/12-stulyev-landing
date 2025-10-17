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
          /* Блестящий бриллиант при наведении */
          <div className="relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 32 32"
              fill="none"
              className="drop-shadow-2xl"
            >
              {/* Верхняя часть бриллианта */}
              <polygon
                points="16,4 20,12 16,16 12,12"
                fill="#E6F3FF"
                stroke="#B0E0E6"
                strokeWidth="1"
              />
              
              {/* Левая грань */}
              <polygon
                points="16,4 12,12 8,20 16,16"
                fill="#D4F1F4"
                stroke="#87CEEB"
                strokeWidth="1"
              />
              
              {/* Правая грань */}
              <polygon
                points="16,4 20,12 24,20 16,16"
                fill="#B8E6E6"
                stroke="#5F9EA0"
                strokeWidth="1"
              />
              
              {/* Нижняя часть */}
              <polygon
                points="16,16 8,20 24,20"
                fill="#87CEEB"
                stroke="#4682B4"
                strokeWidth="1"
              />
              
              {/* Центральная грань */}
              <polygon
                points="16,16 12,12 8,20 16,16"
                fill="#A8E6E6"
                stroke="#5F9EA0"
                strokeWidth="1"
              />
              
              {/* Блеск на верхней грани */}
              <polygon
                points="16,6 18,10 16,12 14,10"
                fill="#FFFFFF"
                opacity="0.8"
              />
              
              {/* Дополнительные блики */}
              <circle
                cx="14"
                cy="8"
                r="1"
                fill="#FFFFFF"
                opacity="0.9"
              />
              <circle
                cx="18"
                cy="10"
                r="0.8"
                fill="#FFFFFF"
                opacity="0.7"
              />
            </svg>
          </div>
        ) : (
          /* Обычный бриллиант */
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="drop-shadow-lg"
          >
            {/* Верхняя часть бриллианта */}
            <polygon
              points="16,4 20,12 16,16 12,12"
              fill="#E0F6FF"
              stroke="#B0E0E6"
              strokeWidth="1"
            />
            
            {/* Левая грань */}
            <polygon
              points="16,4 12,12 8,20 16,16"
              fill="#D1F2F2"
              stroke="#87CEEB"
              strokeWidth="1"
            />
            
            {/* Правая грань */}
            <polygon
              points="16,4 20,12 24,20 16,16"
              fill="#B0E6E6"
              stroke="#5F9EA0"
              strokeWidth="1"
            />
            
            {/* Нижняя часть */}
            <polygon
              points="16,16 8,20 24,20"
              fill="#87CEEB"
              stroke="#4682B4"
              strokeWidth="1"
            />
            
            {/* Тонкий блик */}
            <polygon
              points="16,6 17,9 16,10 15,9"
              fill="#F0F8FF"
              opacity="0.6"
            />
          </svg>
        )}
      </div>
    </>
  );
}
