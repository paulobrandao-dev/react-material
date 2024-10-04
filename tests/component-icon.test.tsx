import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { MaterialSymbols } from '../src/lib';

describe('MaterialSymbols component', () => {
  test('handle no settings', () => {
    const consoleError = vi.spyOn(console, 'error');
    render(<MaterialSymbols icon="home" />);
    expect(consoleError).toBeCalledWith(
      'MaterialSymbols: To use this component, it is necessary to import one of the Material Symbols styles',
    );
  });

  test('render', () => {
    document.documentElement.style.setProperty('--material-symbols', 'rounded');
    const result = render(
      <MaterialSymbols icon="home" data-testid="icon_render" />,
    );
    const icon = result.getByTestId('icon_render');
    expect(icon.tagName).toEqual('SPAN');
    expect(icon.className).toEqual('material-symbols-rounded');
    expect(icon.style.fontSize).toEqual('24px');
    expect(icon.style.fontVariationSettings).toEqual(
      "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
    );
  });

  test('props', () => {
    document.documentElement.style.setProperty(
      '--material-symbols',
      'outlined',
    );
    const result = render(
      <>
        <MaterialSymbols icon="search" size={20} data-testid="icon_20" />
        <MaterialSymbols
          icon="home"
          weight={300}
          size={24}
          data-testid="icon_24"
        />
        <MaterialSymbols
          icon="settings"
          emphasis={200}
          size={40}
          data-testid="icon_40"
        />
        <MaterialSymbols
          icon="favorite"
          filled
          size={48}
          data-testid="icon_48"
        />
      </>,
    );
    const icon_20 = result.getByTestId('icon_20');
    const icon_24 = result.getByTestId('icon_24');
    const icon_40 = result.getByTestId('icon_40');
    const icon_48 = result.getByTestId('icon_48');
    expect(icon_20.style.fontVariationSettings).toEqual(
      "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20",
    );
    expect(icon_24.style.fontVariationSettings).toEqual(
      "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
    );
    expect(icon_40.style.fontVariationSettings).toEqual(
      "'FILL' 0, 'wght' 400, 'GRAD' 200, 'opsz' 40",
    );
    expect(icon_48.style.fontVariationSettings).toEqual(
      "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48",
    );
    expect(icon_20.className).toEqual('material-symbols-outlined');
  });
});
