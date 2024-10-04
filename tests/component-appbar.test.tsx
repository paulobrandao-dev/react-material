import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test } from 'vitest';
import { Appbar } from '../src/lib';

describe('Appbar component', () => {
  afterEach(cleanup);

  test('render', () => {
    const result = render(<Appbar />);
    const bar = result.getByRole('banner');
    expect(bar.className).toEqual('material-appbar-small');
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
          color="primary"
        />,
      );
      const bar = result.getByRole('banner');
      const title = result.getByRole('heading', { level: 1 });
      expect(bar.className).toEqual('material-appbar-center-aligned');
      expect(bar.dataset.color).toEqual('primary');
      expect(title.dataset.align).toEqual('center');
    });

    test('small', () => {
      const result = render(
        <Appbar
          variant="small"
          headline="Small"
          sticky
          startNode={<span className="pseudo-icon" />}
          endNode={<span className="pseudo-avatar" />}
          color="secondary"
        />,
      );
      const bar = result.getByRole('banner');
      const title = result.getByRole('heading', { level: 1 });
      expect(bar.className).toEqual('material-appbar-small');
      expect(bar.dataset.sticky).not.toBeUndefined();
      expect(bar.dataset.color).toEqual('secondary');
      expect(title.dataset.align).toEqual('left');
    });

    test('medium', () => {
      const result = render(
        <Appbar
          variant="medium"
          headline="Medium"
          startNode={<span className="pseudo-icon" />}
          endNode={<span className="pseudo-avatar" />}
          color="tertiary"
        />,
      );
      const bar = result.getByRole('banner');
      const title = result.getByRole('heading', { level: 1 });
      expect(bar.className).toEqual('material-appbar-medium');
      expect(bar.dataset.color).toEqual('tertiary');
      expect(title.className).toEqual('material-typography-headline-small');
    });

    test('medium', () => {
      const result = render(
        <Appbar
          variant="large"
          headline="Large"
          startNode={<span className="pseudo-icon" />}
          endNode={<span className="pseudo-avatar" />}
          color="inverse-surface"
        />,
      );
      const bar = result.getByRole('banner');
      const title = result.getByRole('heading', { level: 1 });
      expect(bar.className).toEqual('material-appbar-large');
      expect(bar.dataset.color).toEqual('inverse-surface');
      expect(title.className).toEqual('material-typography-headline-medium');
    });
  });
});
