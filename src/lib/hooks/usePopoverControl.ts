'use client';

import { useCallback } from 'react';

export function usePopoverControl() {
  const showPopover = useCallback((popoverId: string) => {
    const popover = document.getElementById(popoverId);
    if (popover && popover.hasAttribute('popover')) {
      popover.showPopover();
    }
  }, []);

  const hidePopover = useCallback((popoverId: string) => {
    const popover = document.getElementById(popoverId);
    if (popover && popover.hasAttribute('popover')) {
      popover.hidePopover();
    }
  }, []);

  const togglePopover = useCallback((popoverId: string) => {
    const popover = document.getElementById(popoverId);
    if (popover && popover.hasAttribute('popover')) {
      popover.togglePopover(true);
    }
  }, []);

  return { showPopover, hidePopover, togglePopover };
}
