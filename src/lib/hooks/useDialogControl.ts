'use client';

import { useCallback } from 'react';

export function useDialogControl() {
  const showDialog = useCallback((dialogId: string) => {
    const dialog = document.getElementById(
      dialogId,
    ) as HTMLDialogElement | null;
    dialog?.showModal();
  }, []);

  const closeDialog = useCallback((dialogId: string) => {
    const dialog = document.getElementById(
      dialogId,
    ) as HTMLDialogElement | null;
    dialog?.close();
  }, []);

  return { showDialog, closeDialog };
}
