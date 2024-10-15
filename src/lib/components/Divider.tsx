'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';

export type DividerProps<T extends ElementType> =
  HTMLAttributes<HTMLHRElement> & {
    as?: T;
    vertical?: boolean;
  };

export function Divider<T extends ElementType>({
  as,
  vertical,
  className,
  ...props
}: DividerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof DividerProps<T>>) {
  const Surface = as || 'hr';

  return (
    <Surface
      className={clsx('material-divider', { vertical }, className)}
      {...props}
    />
  );
}
