import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test } from 'vitest';
import { Navbar, Navlink } from '../src/lib';

describe('Navbar component', () => {
  afterEach(cleanup);

  test('render', () => {
    const result = render(
      <Navbar>
        <Navlink icon={<span className="pseudo-icon" />} label="#home" />
      </Navbar>,
    );
    const bar = result.getByRole('navigation');
    expect(bar.tagName).toEqual('NAV');
    expect(bar.className).toEqual('material-navbar');
    expect(bar.children.length).toEqual(1);
  });
});
