import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test } from 'vitest';
import { Grid } from '../src/lib';
import { gridColumnProps } from '../src/lib/utils';

describe('Grid component', () => {
  afterEach(cleanup);

  test('render', () => {
    const result = render(
      <Grid
        as="section"
        paddingInline={{ compact: 'lg', medium: 'xl' }}
        paddingBlock="xl"
        marginBlock="none"
        marginInline="auto"
        data-testid="grid-container"
      >
        <div
          data-testid="grid-item"
          {...gridColumnProps({ compact: 4, large: 3 })}
        />
      </Grid>,
    );
    const grid = result.getByTestId('grid-container');
    const item = result.getByTestId('grid-item');
    expect(grid.tagName).toEqual('SECTION');
    expect(grid.className).toEqual('material-grid');
    expect(grid.dataset.paddingInlineCompact).toEqual('lg');
    expect(grid.dataset.paddingInlineMedium).toEqual('xl');
    expect(grid.dataset.paddingBlockCompact).toEqual('xl');
    expect(grid.dataset.marginBlockCompact).toEqual('none');
    expect(grid.dataset.marginInlineCompact).toEqual('auto');
    expect(item.dataset.gridCompact).toEqual('4');
    expect(item.dataset.gridLarge).toEqual('3');
  });
});
