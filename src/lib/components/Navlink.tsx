'use client';

import { clsx } from 'clsx';
import {
  AnchorHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';
import { Font } from './Font';

export interface NavlinkProps<A extends ElementType>
  extends Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'aria-current' | 'children'
  > {
  label: string;
  icon: ReactNode;
  active?: boolean;
  as?: A;
}

export function Navlink<T extends ElementType>({
  as,
  label,
  icon,
  active,
  className,
  ...props
}: NavlinkProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NavlinkProps<T>>) {
  const ComponentElement = as || 'a';
  return (
    <ComponentElement
      aria-current={active ? 'page' : undefined}
      className={clsx('material-navlink', className)}
      {...props}
    >
      <span className="indicator">{icon}</span>
      <Font as="span" variant="label" scale="medium">
        {label}
      </Font>
    </ComponentElement>
  );
}
