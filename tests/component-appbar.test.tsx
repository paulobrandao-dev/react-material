import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test } from 'vitest';
import { Appbar } from '../src/lib';

describe('Appbar component', () => {
  afterEach(cleanup);

  test('render', () => {
    const result = render(<Appbar />);
    const bar = result.getByRole('banner');
    expect(bar.className).toEqual('material-appbar variant-small');
  });

  describe('variants', () => {
    afterEach(cleanup);

    test('center-aligned', () => {
      const result = render(
        <Appbar
          variant="center-aligned"
          headline="Center"
          startNode={<span className="pseudo-icon" />}
          endNode={<span className="pseudo-avatar" />}
          containerColor="primary"
        />,
      );
      const bar = result.getByRole('banner');
      const title = result.getByRole('heading', { level: 1 });
      expect(bar.className).toEqual(
        'material-appbar variant-center-aligned container-color-primary',
      );
      expect(title.classList.contains('text-align-center')).toBeTruthy();
    });

    test('small', () => {
      const result = render(
        <Appbar
          variant="small"
          headline="Small"
          sticky
          startNode={<span className="pseudo-icon" />}
          endNode={<span className="pseudo-avatar" />}
          containerColor="secondary"
        />,
      );
      const bar = result.getByRole('banner');
      const title = result.getByRole('heading', { level: 1 });
      expect(bar.className).toEqual(
        'material-appbar variant-small sticky container-color-secondary',
      );
      expect(title.classList.contains('text-align-left')).toBeTruthy();
    });

    test('medium', () => {
      const result = render(
        <Appbar
          variant="medium"
          headline="Medium"
          startNode={<span className="pseudo-icon" />}
          endNode={<span className="pseudo-avatar" />}
          containerColor="tertiary"
        />,
      );
      const bar = result.getByRole('banner');
      const title = result.getByRole('heading', { level: 1 });
      expect(bar.className).toEqual(
        'material-appbar variant-medium container-color-tertiary',
      );
      expect(
        title.classList.contains('text-compact-headline-small'),
      ).toBeTruthy();
    });

    test('large', () => {
      const result = render(
        <Appbar
          variant="large"
          headline="Large"
          startNode={<span className="pseudo-icon" />}
          endNode={<span className="pseudo-avatar" />}
          containerColor="inverse-surface"
        />,
      );
      const bar = result.getByRole('banner');
      const title = result.getByRole('heading', { level: 1 });
      expect(bar.className).toEqual(
        'material-appbar variant-large container-color-inverse-surface',
      );
      expect(
        title.classList.contains('text-compact-headline-medium'),
      ).toBeTruthy();
    });
  });
});
