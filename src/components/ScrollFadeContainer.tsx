import React, { useState, useRef, useEffect, useCallback } from 'react';

interface ScrollFadeContainerProps {
  children: React.ReactNode;
  className?: string;
  scrollClassName?: string;
  leftGradientClass: string;
  rightGradientClass: string;
  fadeWidth?: string;
  topOffset?: string;
  bottomOffset?: string;
}

export const ScrollFadeContainer: React.FC<ScrollFadeContainerProps> = ({
  children,
  className = 'relative max-w-full overflow-hidden',
  scrollClassName = 'flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth',
  leftGradientClass,
  rightGradientClass,
  fadeWidth = 'w-10 sm:w-16',
  topOffset = 'top-0',
  bottomOffset = 'bottom-0',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    // Allow small tolerance threshold of 4px
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });

    // Watch size changes on inner content
    const observer = new ResizeObserver(() => {
      checkScroll();
    });
    observer.observe(el);
    for (let i = 0; i < el.children.length; i++) {
      const child = el.children[i];
      if (child) observer.observe(child);
    }

    // Secondary check after slight delay in case fonts/styles finish rendering
    const timeout = setTimeout(checkScroll, 150);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [checkScroll]);

  return (
    <div className={className}>
      {/* Left Transparent Gradient Fade (Visible when scrolled to the right) */}
      <div
        className={`pointer-events-none absolute left-0 ${topOffset} ${bottomOffset} ${fadeWidth} ${leftGradientClass} z-10 transition-opacity duration-300 ${
          canScrollLeft ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Scrollable Content Container */}
      <div ref={scrollRef} className={scrollClassName}>
        {children}
      </div>

      {/* Right Transparent Gradient Fade (Visible when more content exists on the right) */}
      <div
        className={`pointer-events-none absolute right-0 ${topOffset} ${bottomOffset} ${fadeWidth} ${rightGradientClass} z-10 transition-opacity duration-300 ${
          canScrollRight ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
    </div>
  );
};
