import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';
import { IconButton } from '../src/lib';

describe('IconButton component', () => {
  test('render', () => {
    const result = render(
      <>
        <IconButton aria-label="default">
          <span className="pseudo-icon" />
        </IconButton>
        <IconButton variant="filled" aria-label="filled">
          <span className="pseudo-icon" />
        </IconButton>
        <IconButton variant="outlined" aria-label="outlined">
          <span className="pseudo-icon" />
        </IconButton>
        <IconButton
          as="a"
          variant="standard"
          aria-label="text"
          data-testid="text_anchor"
        >
          <span className="pseudo-icon" />
        </IconButton>
        <IconButton variant="tonal" aria-label="tonal">
          <span className="pseudo-icon" />
        </IconButton>
      </>,
    );
    const allDefault = result.getByRole('button', { name: 'default' });
    const filled = result.getByRole('button', { name: 'filled' });
    const outlined = result.getByRole('button', { name: 'outlined' });
    const tonal = result.getByRole('button', { name: 'tonal' });
    const anchor = result.getByTestId('text_anchor');
    expect(allDefault.className).toEqual('material-iconbutton-standard');
    expect(filled.className).toEqual('material-iconbutton-filled');
    expect(outlined.className).toEqual('material-iconbutton-outlined');
    expect(tonal.className).toEqual('material-iconbutton-tonal');
    expect(anchor.tagName).toEqual('A');
    expect(anchor.firstElementChild).not.toBeNull();
  });
});
