'use client';

import { clsx } from 'clsx';
import { HTMLAttributes, ReactNode, useRef } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Box from './Box';
import { Button } from './Button';
import { MaterialSymbols } from './Icon';
import { IconButton } from './IconButton';

export type DialogProps = {
  id: string;
  headline: string;
  icon?: ReactNode;
  cancelLabel: string;
  onCancel: (closeDialog: () => void) => void;
  confirmLabel: string;
  onConfirm: (closeDialog: () => void) => void;
  fullscreenOnCompact?: boolean;
} & Omit<HTMLAttributes<HTMLDialogElement>, 'id'>;

export function Dialog({
  id,
  headline,
  icon,
  cancelLabel,
  onCancel,
  confirmLabel,
  onConfirm,
  fullscreenOnCompact,
  className,
  children,
  ...props
}: DialogProps) {
  const media = useMediaQuery();
  const self = useRef<HTMLDialogElement>(null);

  return (
    <dialog
      ref={self}
      id={id}
      className={clsx(
        'material-dialog',
        { 'fullscreen-on-compact': fullscreenOnCompact },
        className,
      )}
      {...props}
    >
      <Box
        as="div"
        role="presentation"
        display="flex"
        flexDirection="column"
        fullWidth
      >
        {(!fullscreenOnCompact || media.isGreaterThanCompact) && (
          <Box
            as="header"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="lg"
            fullWidth
            className="headline"
          >
            {icon && (
              <Box as="div" role="presentation" className="icon">
                {icon}
              </Box>
            )}
            <Box
              as="h1"
              fontScale="headline-small"
              textAlign={icon ? 'center' : 'left'}
            >
              {headline}
            </Box>
          </Box>
        )}
        {fullscreenOnCompact && media.isCompact && (
          <Box
            as="header"
            display="flex"
            alignItems="center"
            paddingInline="sm"
            gap="sm"
            fullWidth
            className="header"
          >
            <IconButton
              aria-label={cancelLabel}
              onClick={() => {
                if (self.current) {
                  onCancel(() => self.current!.close());
                }
              }}
            >
              <MaterialSymbols icon="close" />
            </IconButton>
            <Box as="h1" fontScale="title-large">
              {headline}
            </Box>
            <Button
              variant="text"
              onClick={() => {
                if (self.current) {
                  onConfirm(() => self.current!.close());
                }
              }}
            >
              {confirmLabel}
            </Button>
          </Box>
        )}
        <Box
          as="div"
          className="content"
          paddingInline={
            fullscreenOnCompact && media.isCompact ? 'xl' : undefined
          }
          fullWidth
        >
          {children}
        </Box>
        {(!fullscreenOnCompact || media.isGreaterThanCompact) && (
          <Box
            as="footer"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gap="sm"
            className="actions"
          >
            <Button
              variant="text"
              onClick={() => {
                if (self.current) {
                  onCancel(() => self.current!.close());
                }
              }}
            >
              {cancelLabel}
            </Button>
            <Button
              variant="text"
              onClick={() => {
                if (self.current) {
                  onConfirm(() => self.current!.close());
                }
              }}
            >
              {confirmLabel}
            </Button>
          </Box>
        )}
      </Box>
    </dialog>
  );
}
