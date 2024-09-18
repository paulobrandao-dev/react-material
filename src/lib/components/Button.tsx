'use client';

import { clsx } from 'clsx';
import { Font } from './Font';

export interface ButtonProps<T extends React.ElementType>
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: T;
  icon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'tonal' | 'filled' | 'elevated';
}

export function Button<T extends React.ElementType>({
  as,
  icon,
  variant = 'text',
  children,
  className,
  ...props
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
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
