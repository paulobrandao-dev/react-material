/// <reference types="react/canary" />

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test } from 'vitest';
import { Navdrawer, NavdrawerHeadline, Navlink } from '../src/lib';

describe('Navdrawer component', () => {
  afterEach(cleanup);

  test('render', async () => {
    const result = render(
      <Navdrawer header={<h1>Navdrawer</h1>} id="navdrawer-test" standard>
        <Navlink
          icon={<span className="pseudo-icon" />}
          label="Home"
          href="/home"
          active
        />
        <NavdrawerHeadline divider text="Components" />
        <Navlink
          icon={<span className="pseudo-icon" />}
          label="Action components"
          href="/components/action"
        />
      </Navdrawer>,
    );
    const drawer = result.getByRole('navigation');
    expect(drawer.hasAttribute('popover')).toBeTruthy();
    expect(drawer.className).toEqual('material-navdrawer');
    expect(drawer.firstElementChild?.tagName).toEqual('HEADER');
    expect(drawer.dataset.standard).not.toBeUndefined();
  });
});
