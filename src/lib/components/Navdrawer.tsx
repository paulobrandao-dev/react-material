'use client';

import { clsx } from 'clsx';
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Divider } from './Divider';
import { Flexbox } from './Flexbox';
import { Font } from './Font';

export interface NavdrawerProps<T extends ElementType>
  extends Omit<HTMLAttributes<HTMLElement>, 'id'> {
  id: string;
  as?: T;
  header?: ReactNode;
  standard?: boolean;
}

export function Navdrawer<T extends ElementType>({
  id,
  as,
  header,
  standard,
  children,
  className,
  ...props
}: NavdrawerProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof NavdrawerProps<T>>) {
  const ComponentElement = as || 'nav';
  const media = useMediaQuery();
  const self = useRef<HTMLElement>(null);

  useEffect(() => {
    const drawer = self.current;
    const handleClick = () => {
      if (drawer?.hasAttribute('popover')) {
        drawer?.hidePopover();
      }
    };
    drawer?.addEventListener('click', handleClick);
    return () => {
      drawer?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <ComponentElement
      className={clsx('material-navdrawer', className)}
      data-standard={standard ? '' : undefined}
      id={id}
      popover={
        (standard && media.isLessThanLarge) || !standard ? '' : undefined
      }
      ref={self}
      {...props}
    >
      {header && <header>{header}</header>}
      <div role="presentation">{children}</div>
    </ComponentElement>
  );
}

export function NavdrawerHeadline({
  text,
  divider,
}: Readonly<{ text: string; divider?: boolean }>) {
  return (
    <Flexbox
      flexDirection="column"
      alignItems="flex-start"
      paddingInline="lg"
      className="material-navdrawer-headline"
    >
      {divider && <Divider />}
      <Font
        variant="title"
        scale="small"
        color="on-surface-variant"
        className="headline"
      >
        {text}
      </Font>
    </Flexbox>
  );
}
