'use client';

import { clsx } from 'clsx';
import {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';
import { Font } from './Font';

export interface ButtonProps<T extends ElementType>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: T;
  icon?: ReactNode;
  variant?: 'text' | 'outlined' | 'tonal' | 'filled' | 'elevated';
}

export function Button<T extends ElementType>({
  as,
  icon,
  variant = 'text',
  children,
  className,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const ComponentElement = as || 'button';
  return (
    <ComponentElement
      className={clsx('MaterialButton', `variant-${variant}`, className)}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      <Font variant="label" scale="large">
        {children}
      </Font>
    </ComponentElement>
  );
}
