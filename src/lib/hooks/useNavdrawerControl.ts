'use client';

import { useCallback } from "react";

export function useNavdrawerControl(drawerId: string) {
  const showDrawer = useCallback(() => {
    const drawer = document.getElementById(drawerId);
    drawer?.showPopover();
  }, [drawerId]);

  const hideDrawer = useCallback(() => {
    const drawer = document.getElementById(drawerId);
    drawer?.hidePopover();
  }, [drawerId]);

  const toggleDrawer = useCallback(() => {
    const drawer = document.getElementById(drawerId);
    drawer?.togglePopover(true);
  }, [drawerId]);

  return { showDrawer, hideDrawer, toggleDrawer };
}
