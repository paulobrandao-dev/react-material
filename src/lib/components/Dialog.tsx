'use client';

import { clsx } from 'clsx';
import { HTMLAttributes, ReactNode, useRef } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Button } from './Button';
import { Font } from './Font';
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
      className={clsx('material-dialog', className)}
      data-fullscreen-on-compact={fullscreenOnCompact ? '' : undefined}
      {...props}
    >
      <div role="presentation">
        {(!fullscreenOnCompact || media.isGreaterThanCompact) && (
          <header className="material-dialog-headline">
            {icon && <div aria-hidden="true">{icon}</div>}
            <Font
              as="h1"
              variant="headline"
              scale="small"
              textAlign={icon ? 'center' : 'left'}
            >
              {headline}
            </Font>
          </header>
        )}
        {fullscreenOnCompact && media.isCompact && (
          <header className="material-dialog-header">
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
            <Font as="h1" variant="title">
              {headline}
            </Font>
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
          </header>
        )}
        <div className="material-dialog-content">{children}</div>
        {(!fullscreenOnCompact || media.isGreaterThanCompact) && (
          <footer className="material-dialog-actions">
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
          </footer>
        )}
      </div>
    </dialog>
  );
}
