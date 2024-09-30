'use client';

import { clsx } from 'clsx';
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  ReactNode
} from 'react';

export interface NavrailProps<T extends ElementType>
  extends HTMLAttributes<HTMLElement> {
  as?: T;
  hideOnLarge?: boolean;
  startNode?: ReactNode;
  endNode?: ReactNode;
  color?:
    | 'primary'
    | 'primary-container'
    | 'secondary'
    | 'secondary-container'
    | 'tertiary'
    | 'tertiary-container'
    | 'inverse-surface';
}

export function Navrail<T extends ElementType>({
  as,
  hideOnLarge,
  startNode,
  endNode,
  color,
  className,
  children,
  ...props
}: NavrailProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NavrailProps<T>>) {
  const ComponentElement = as || 'nav';
  return (
    <ComponentElement
      className={clsx('material-navrail', className)}
      data-hide-on-large={hideOnLarge ? '' : undefined}
      data-color={color ?? undefined}
      {...props}
    >
      {startNode && (
        <div role="toolbar" className="start">
          {startNode}
        </div>
      )}
      <div className="list" role="presentation">
        {children}
      </div>
      {endNode && (
        <div role="toolbar" className="end">
          {endNode}
        </div>
      )}
    </ComponentElement>
  );
}
