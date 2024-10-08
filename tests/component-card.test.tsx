import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test } from 'vitest';
import { Card } from '../src/lib';

describe('Card component', () => {
  afterEach(cleanup);

  test('elevated', () => {
    const result = render(
      <Card
        data-testid="elevated"
        variant="elevated"
        flexbox
        flexDirection="column"
      >
        <h1>Card elevated</h1>
      </Card>,
    );
    const card = result.getByTestId('elevated');
    expect(card.tagName).toEqual('DIV');
    expect(card.className).toEqual('material-card-elevated material-flexbox');
    expect(card.dataset.directionCompact).toEqual('column');
  });

  test('filled', () => {
    const result = render(
      <Card
        as="article"
        data-testid="filled"
        variant="filled"
        grid
        padding="lg"
      >
        <h1>Card filled</h1>
      </Card>,
    );
    const card = result.getByTestId('filled');
    expect(card.tagName).toEqual('ARTICLE');
    expect(card.className).toEqual('material-card-filled material-grid');
    expect(card.dataset.paddingCompact).toEqual('lg');
  });

  test('outlined', () => {
    const result = render(
      <Card
        as="section"
        data-testid="outlined"
        variant="outlined"
        margin="auto"
      >
        <h1>Card outlined</h1>
      </Card>,
    );
    const card = result.getByTestId('outlined');
    expect(card.tagName).toEqual('SECTION');
    expect(card.className).toEqual('material-card-outlined');
    expect(card.dataset.marginCompact).toEqual('auto');
  });
});
