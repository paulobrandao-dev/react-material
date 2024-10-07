'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';

export interface DividerProps<T extends ElementType>
  extends HTMLAttributes<HTMLHRElement> {
  as?: T;
  vertical?: boolean;
}

export function Divider<T extends ElementType>({
  as,
  vertical,
  className,
  ...props
}: DividerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof DividerProps<T>>) {
  const ComponentElement = as || 'hr';
  return (
    <ComponentElement
      className={clsx(
        `material-divider-${vertical ? 'vertical' : 'horizontal'}`,
        className,
      )}
      {...props}
    />
  );
}
