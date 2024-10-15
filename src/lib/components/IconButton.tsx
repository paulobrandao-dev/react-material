'use client';

import { clsx } from 'clsx';
import {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementType,
  useEffect,
  useRef,
  useState,
} from 'react';

export type IconButtonProps<T extends ElementType> =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: T;
    variant?: 'standard' | 'outlined' | 'filled' | 'tonal';
  };

export const IconButton = <T extends ElementType>({
  as,
  variant = 'standard',
  className,
  children,
  ...props
}: IconButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IconButtonProps<T>>) => {
  const Surface = as || 'button';
  const ref = useRef<HTMLButtonElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState<number>(0);

  useEffect(() => {
    if (!props['aria-label']) return;
    const checkPosition = () => {
      if (ref.current) {
        const coords = ref.current.getBoundingClientRect();
        const screenHeightQuarter = window.innerHeight / 4;
        const isOnTop = coords.top <= screenHeightQuarter;
        setTooltipPosition(isOnTop ? 1 : -1);
      }
    };
    checkPosition();
    window.addEventListener('resize', checkPosition);
    return () => {
      window.removeEventListener('resize', checkPosition);
    };
  }, [props]);

  return (
    <Surface
      ref={ref}
      className={clsx(
        'material-iconbutton',
        `variant-${variant}`,
        {
          'tooltip-at-top': tooltipPosition < 1,
          'tooltip-at-bottom': tooltipPosition === 1,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Surface>
  );
};
