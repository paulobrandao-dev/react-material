import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';
import { Font } from '../src/lib';

describe('Font component', () => {
  test('render', () => {
    const result = render(<Font data-testid="font_render">Test</Font>);
    const element = result.getByTestId('font_render');
    expect(element.tagName).toEqual('SPAN');
    expect(element.className).toEqual('material-typography-body-large');
  });

  test('props', () => {
    const article = render(
      <article>
        <Font as="h1" variant="display" scale="medium" textAlign="center">
          Sample title
        </Font>
        <Font as="p" variant="headline" scale="large">
          A sample headline to the article
        </Font>
        <Font as="span" variant="label" scale="small" textAlign="right">
          This is a sample metadata
        </Font>
        <Font as="p" variant="body" scale="large" textAlign="justify">
          A sample first paragraph for this fake article.
        </Font>
        <Font as="h2" variant="title" scale="large" textAlign="left">
          A sample heading 2
        </Font>
        <Font as="p" variant="body" scale="large" textAlign="justify">
          A sample last paragraph for this fake article.
        </Font>
      </article>,
    );
    const heading_1 = article.getByRole('heading', { level: 1 });
    const headline = article.getByText('A sample headline to the article');
    const metadata = article.getByText('This is a sample metadata');
    const first_p = article.getByText('A sample first paragraph', {
      exact: false,
    });
    const heading_2 = article.getByRole('heading', { level: 2 });
    const last_p = article.getByText('A sample last paragraph', {
      exact: false,
    });
    expect(heading_1.className).toEqual('material-typography-display-medium');
    expect(headline.className).toEqual('material-typography-headline-large');
    expect(metadata.className).toEqual('material-typography-label-small');
    expect(first_p.className).toEqual('material-typography-body-large');
    expect(heading_2.className).toEqual('material-typography-title-large');
    expect(last_p.dataset.align).toEqual('justify');
  });
});
