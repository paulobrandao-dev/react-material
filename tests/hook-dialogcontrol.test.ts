import { renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { useDialogControl } from '../src/lib';

const spyShow = vi.spyOn(HTMLDialogElement.prototype, 'showModal');
const spyClose = vi.spyOn(HTMLDialogElement.prototype, 'close');

vi.spyOn(document, 'getElementById').mockImplementation(elementId => {
  const element = document.createElement('dialog');
  element.setAttribute('id', elementId);
  return element;
});

describe('useDialogControl', () => {
  test('methods', () => {
    const { result } = renderHook(() => useDialogControl());
    result.current.showDialog('test');
    expect(spyShow).toBeCalled();
    result.current.closeDialog('test');
    expect(spyClose).toBeCalled();
  });
});
