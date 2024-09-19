'use client';

import { clsx } from 'clsx';
import { HTMLAttributes, useMemo } from 'react';

export interface MaterialSymbolsProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  icon: string;
  variant?: 'outlined' | 'rounded' | 'sharp';
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  size?: number;
  filled?: boolean;
  emphasis?: -25 | 0 | 200;
}

export function MaterialSymbols({
  icon,
  variant = 'outlined',
  weight = 400,
  size = 24,
  filled,
  emphasis = 0,
  className,
  style,
  ...props
}: MaterialSymbolsProps) {
  const opsz = useMemo(() => {
    if (size <= 23) {
      return 20;
    } else if (size > 23 && size <= 39) {
      return 24;
    } else if (size > 39 && size <= 47) {
      return 40;
    } else {
      return 48;
    }
  }, [size]);

  return (
    <span
      className={clsx(`material-symbols-${variant}`, className)}
      style={{
        ...style,
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${emphasis}, 'opsz' ${opsz}`,
      }}
      {...props}
    >
      {icon}
    </span>
  );
}
