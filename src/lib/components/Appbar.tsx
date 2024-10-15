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
import Box from './Box';

export type AppbarProps<T extends ElementType> = Omit<
  HTMLAttributes<HTMLElement>,
  'children'
> & {
  as?: T;
  sticky?: boolean;
  variant?: 'center-aligned' | 'small' | 'medium' | 'large';
  containerColor?:
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
};

export function Appbar<T extends ElementType>({
  as,
  sticky,
  variant = 'small',
  startNode,
  headline,
  endNode,
  containerColor,
  fluid,
  className,
  ...props
}: AppbarProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof AppbarProps<T>>) {
  const Surface = as || 'header';
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
    <Surface
      className={clsx(
        'material-appbar',
        `variant-${variant}`,
        {
          sticky,
          scrolled,
          [`container-color-${containerColor}`]: containerColor !== undefined,
        },
        className,
      )}
      {...props}
    >
      <Box
        as="div"
        role="toolbar"
        display="flex"
        alignItems="center"
        fullWidth
        maxWidth={!fluid ? 'large' : undefined}
        marginBlock="none"
        marginInline="auto"
        paddingInline="sm"
      >
        {startNode && (
          <Box
            as="div"
            role="presentation"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            {startNode}
          </Box>
        )}
        <Box
          as="div"
          role="presentation"
          paddingInline="sm"
          className="headline"
        >
          {((headline && !titleBelow) ||
            (headline && titleBelow && scrolled)) && (
            <Box
              as="h1"
              fontScale="title-large"
              textAlign={variant === 'center-aligned' ? 'center' : 'left'}
            >
              {headline}
            </Box>
          )}
        </Box>
        {endNode && (
          <Box
            as="div"
            role="presentation"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            {endNode}
          </Box>
        )}
      </Box>
      {titleBelow && headline && !scrolled && (
        <Box
          as="h1"
          fontScale={variant === 'large' ? 'headline-medium' : 'headline-small'}
          marginBlock="none"
          marginInline="auto"
          maxWidth={!fluid ? 'large' : undefined}
          paddingBlock={variant === 'large' ? 'xl' : 'sm'}
          paddingInline="lg"
          fullWidth
        >
          {headline}
        </Box>
      )}
    </Surface>
  );
}
