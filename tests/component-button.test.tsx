import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';
import { Button } from '../src/lib';

describe('Button component', () => {
  test('render', () => {
    const result = render(
      <>
        <Button>Default</Button>
        <Button variant="elevated">Elevated</Button>
        <Button variant="filled" icon={<span className="pseudo-icon" />}>
          Filled
        </Button>
        <Button variant="outlined">Outlined</Button>
        <Button as="a" variant="text" data-testid="button_text">
          Text
        </Button>
        <Button variant="tonal">Tonal</Button>
      </>,
    );
    const allDefault = result.getByRole('button', { name: 'Default' });
    const elevated = result.getByRole('button', { name: 'Elevated' });
    const filled = result.getByRole('button', { name: 'Filled' });
    const outlined = result.getByRole('button', { name: 'Outlined' });
    const text = result.getByTestId('button_text');
    const tonal = result.getByRole('button', { name: 'Tonal' });
    expect(allDefault.className).toEqual('material-button variant-text');
    expect(elevated.className).toEqual('material-button variant-elevated');
    expect(filled.className).toEqual('material-button variant-filled');
    expect(filled.firstElementChild).not.toBeNull();
    expect(outlined.className).toEqual('material-button variant-outlined');
    expect(text.tagName).toEqual('A');
    expect(text.className).toEqual('material-button variant-text');
    expect(tonal.className).toEqual('material-button variant-tonal');
  });
});
