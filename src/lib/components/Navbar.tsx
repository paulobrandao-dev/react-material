'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';

export type NavbarProps<T extends ElementType> = HTMLAttributes<HTMLElement> & {
  as?: T;
  containerColor?:
    | 'primary'
    | 'primary-container'
    | 'secondary'
    | 'secondary-container'
    | 'tertiary'
    | 'tertiary-container'
    | 'inverse-surface';
};

export function Navbar<T extends ElementType>({
  as,
  containerColor,
  className,
  ...props
}: NavbarProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NavbarProps<T>>) {
  const Surface = as || 'nav';

  return (
    <Surface
      className={clsx(
        'material-navbar',
        {
          [`container-color-${containerColor}`]: containerColor !== undefined,
        },
        className,
      )}
      {...props}
    />
  );
}
