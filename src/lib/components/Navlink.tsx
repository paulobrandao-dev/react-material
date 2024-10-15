'use client';

import { clsx } from 'clsx';
import {
  AnchorHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';
import Box from './Box';

export type NavlinkProps<A extends ElementType> = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children'
> & {
  label: string;
  icon: ReactNode;
  active?: boolean;
  as?: A;
};

export function Navlink<T extends ElementType>({
  as,
  label,
  icon,
  active,
  className,
  ...props
}: NavlinkProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NavlinkProps<T>>) {
  const Surface = as || 'a';
  return (
    <Surface className={clsx('material-navlink', className)} {...props}>
      <Box
        as="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        shape="lg"
        containerColor={active ? 'secondary-container' : undefined}
        className="indicator"
      >
        {icon}
      </Box>
      <Box as="span" fontScale="label-medium">
        {label}
      </Box>
    </Surface>
  );
}
