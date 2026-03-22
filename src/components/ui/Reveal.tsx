import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type RevealDirection = 'up' | 'left' | 'right' | 'none';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
  style?: CSSProperties;
};

const hiddenByDirection: Record<RevealDirection, string> = {
  up: 'opacity-0 translate-y-6',
  left: 'opacity-0 -translate-x-6',
  right: 'opacity-0 translate-x-6',
  none: 'opacity-0 translate-y-3',
};

const Reveal = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
  style,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform motion-reduce:opacity-100 motion-reduce:transform-none',
        hiddenByDirection[direction],
        isVisible && 'opacity-100 translate-x-0 translate-y-0',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;