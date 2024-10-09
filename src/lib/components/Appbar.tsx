'use client';

import { clsx } from 'clsx';
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Font } from './Font';

export interface AppbarProps<T extends ElementType>
  extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  as?: T;
  sticky?: boolean;
  variant?: 'center-aligned' | 'small' | 'medium' | 'large';
  color?:
    | 'primary'
    | 'primary-container'
    | 'secondary'
    | 'secondary-container'
    | 'tertiary'
    | 'tertiary-container'
    | 'inverse-surface';
  startNode?: ReactNode;
  headline?: string;
  endNode?: ReactNode;
  fluid?: boolean;
}

export function Appbar<T extends ElementType>({
  as,
  sticky,
  variant = 'small',
  startNode,
  headline,
  endNode,
  color,
  fluid,
  className,
  ...props
}: AppbarProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof AppbarProps<T>>) {
  const ComponentElement = as || 'header';
  const [scrolled, setScrolled] = useState<boolean>(false);

  const titleBelow = useMemo(() => {
    return ['medium', 'large'].includes(variant);
  }, [variant]);

  useEffect(() => {
    if (!sticky) return;
    const checkScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [sticky]);

  return (
    <ComponentElement
      className={clsx(`material-appbar-${variant}`, className)}
      data-sticky={sticky ? '' : undefined}
      data-scrolled={scrolled ? '' : undefined}
      data-color={color ?? undefined}
      data-fluid={fluid ? '' : undefined}
      {...props}
    >
      <div role="toolbar">
        {startNode && <div className="start-node">{startNode}</div>}
        <div role="presentation" className="headline">
          {headline && (
            <Font
              as={titleBelow ? 'span' : 'h1'}
              variant="title"
              scale="large"
              textAlign={variant === 'center-aligned' ? 'center' : 'left'}
              className={clsx({ hide: titleBelow && !scrolled })}
              aria-hidden={titleBelow ? 'true' : undefined}
            >
              {headline}
            </Font>
          )}
        </div>
        {endNode && <div className="end-node">{endNode}</div>}
      </div>
      {titleBelow && headline && (
        <Font
          as="h1"
          variant="headline"
          scale={variant === 'large' ? 'medium' : 'small'}
          className={clsx({ hide: scrolled })}
        >
          {headline}
        </Font>
      )}
    </ComponentElement>
  );
}
