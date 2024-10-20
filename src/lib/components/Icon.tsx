'use client';

import { clsx } from 'clsx';
import { HTMLAttributes, useEffect, useMemo, useState } from 'react';

export interface MaterialSymbolsProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  icon: string;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  size?: number;
  filled?: boolean;
  emphasis?: 'low' | 'normal' | 'high';
}

export function MaterialSymbols({
  icon,
  weight = 400,
  size = 24,
  filled,
  emphasis = 'normal',
  className,
  style,
  ...props
}: MaterialSymbolsProps) {
  const [variant, setVariant] = useState<string | null>(null);

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

  const grade = useMemo(() => {
    switch (emphasis) {
      case 'low':
        return -25;
      case 'high':
        return 200;
      default:
        return 0;
    }
  }, [emphasis]);

  useEffect(() => {
    const setting = getComputedStyle(document.documentElement).getPropertyValue(
      '--material-symbols',
    );
    if (!setting.trim()) {
      console.error(
        'MaterialSymbols: To use this component, it is necessary to import one of the Material Symbols styles',
      );
      setVariant(null);
    }
    setVariant(setting.trim());
  }, []);

  if (!variant) return null;

  return (
    <span
      className={clsx(`material-symbols-${variant}`, className)}
      style={{
        ...style,
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
      }}
      {...props}
    >
      {icon}
    </span>
  );
}
