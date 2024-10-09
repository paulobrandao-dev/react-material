import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { Dialog } from '../src/lib';

describe('Dialog component', () => {
  afterEach(cleanup);

  const user = userEvent.setup({ pointerEventsCheck: 0 });

  test('basic', async () => {
    const fakeCancel = vi.fn();
    const fakeConfirm = vi.fn();

    const result = render(
      <>
        <button
          onClick={() =>
            document
              .querySelector<HTMLDialogElement>('dialog#test-basic')
              ?.showModal()
          }
        >
          Open dialog
        </button>
        <Dialog
          data-testid="basic"
          id="test-basic"
          headline="Testing basic dialog"
          icon={<span className="pseudo-icon" />}
          cancelLabel="Cancel"
          onCancel={closeDialog => {
            fakeCancel();
            closeDialog();
          }}
          confirmLabel="Confirm"
          onConfirm={closeDialog => {
            fakeConfirm();
            closeDialog();
          }}
        >
          <p>Testing</p>
        </Dialog>
      </>,
    );
    const dialog = result.getByTestId('basic');
    const opener = result.getByRole('button', { name: 'Open dialog' });
    expect(dialog.tagName).toEqual('DIALOG');
    await user.click(opener);
    await waitFor(() => {
      expect(dialog.hasAttribute('open')).toBeTruthy();
    });
    await user.click(result.getByRole('button', { name: 'Cancel' }));
    await waitFor(() => {
      expect(fakeCancel).toBeCalled();
    });
    await waitFor(() => {
      expect(dialog.hasAttribute('open')).toBeFalsy();
    });
    await user.click(opener);
    await waitFor(() => {
      expect(dialog.hasAttribute('open')).toBeTruthy();
    });
    await user.click(result.getByRole('button', { name: 'Confirm' }));
    await waitFor(() => {
      expect(fakeConfirm).toBeCalled();
    });
    await waitFor(() => {
      expect(dialog.hasAttribute('open')).toBeFalsy();
    });
  });

  test('fullscreen', async () => {
    happyDOM.setViewport({
      width: 360,
      height: 640,
    });
    document.documentElement.style.setProperty('--material-symbols', 'rounded');
    const fakeCancel = vi.fn();
    const fakeConfirm = vi.fn();
    const result = render(
      <>
        <button
          onClick={() =>
            document
              .querySelector<HTMLDialogElement>('dialog#test-fullscreen')
              ?.showModal()
          }
        >
          Open dialog
        </button>
        <Dialog
          data-testid="fullscreen"
          id="test-fullscreen"
          headline="Testing fullscreen dialog"
          cancelLabel="Cancel"
          onCancel={closeDialog => {
            fakeCancel();
            closeDialog();
          }}
          confirmLabel="Confirm"
          onConfirm={closeDialog => {
            fakeConfirm();
            closeDialog();
          }}
          fullscreenOnCompact
        >
          <p>Testing</p>
        </Dialog>
      </>,
    );
    const dialog = result.getByTestId('fullscreen');
    expect(dialog.hasAttribute('open')).toBeFalsy();
    expect(dialog.dataset.fullscreenOnCompact).not.toBeUndefined();
    await user.click(result.getByRole('button', { name: 'Open dialog' }));
    await waitFor(() => {
      expect(dialog.hasAttribute('open')).toBeTruthy();
    });
    await user.click(result.getByRole('button', { name: 'Cancel' }));
    await waitFor(() => {
      expect(fakeCancel).toBeCalled();
    });
    await waitFor(() => {
      expect(dialog.hasAttribute('open')).toBeFalsy();
    });
    await user.click(result.getByRole('button', { name: 'Open dialog' }));
    await waitFor(() => {
      expect(dialog.hasAttribute('open')).toBeTruthy();
    });
    await user.click(result.getByRole('button', { name: 'Confirm' }));
    await waitFor(() => {
      expect(fakeConfirm).toBeCalled();
    });
    await waitFor(() => {
      expect(dialog.hasAttribute('open')).toBeFalsy();
    });
  });
});
