'use client';

import { clsx } from 'clsx';
import {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';
import Box from './Box';

export type ButtonProps<T extends ElementType> =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: T;
    icon?: ReactNode;
    variant?: 'text' | 'outlined' | 'tonal' | 'filled' | 'elevated';
  };

export function Button<T extends ElementType>({
  as,
  icon,
  variant = 'text',
  children,
  className,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Surface = as || 'button';
  return (
    <Surface
      className={clsx('material-button', `variant-${variant}`, className)}
      {...props}
    >
      {icon && (
        <Box as="span" role="presentation" className="icon">
          {icon}
        </Box>
      )}
      <Box as="span" fontScale="label-large">
        {children}
      </Box>
    </Surface>
  );
}
