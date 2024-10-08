import { renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { usePopoverControl } from '../src/lib';

const spyShow = vi.fn();
const spyHide = vi.fn();
const spyToggle = vi.fn();

vi.spyOn(document, 'getElementById').mockImplementation(elementId => {
  const element = document.createElement('div');
  element.setAttribute('id', elementId);
  element.setAttribute('popover', '');
  element.showPopover = spyShow;
  element.hidePopover = spyHide;
  element.togglePopover = spyToggle;
  return element;
});

describe('usePopoverControl', () => {
  test('methods', () => {
    const { result } = renderHook(() => usePopoverControl());
    result.current.showPopover('test');
    expect(spyShow).toBeCalled();
    result.current.hidePopover('test');
    expect(spyHide).toBeCalled();
    result.current.togglePopover('test');
    expect(spyToggle).toBeCalled();
  });
});
