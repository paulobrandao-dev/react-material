import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test } from 'vitest';
import { Navlink, Navrail } from '../src/lib';

describe('Navrail component', () => {
  afterEach(cleanup);

  test('render', () => {
    const result = render(<Navrail />);
    const rail = result.getByRole('navigation');
    expect(rail.tagName).toEqual('NAV');
    expect(rail.className).toEqual('material-navrail');
  });

  test('variations', () => {
    const result = render(
      <Navrail
        color="primary"
        startNode={<span className="pseudo-button" />}
        endNode={<span className="pseudo-button" />}
      >
        <Navlink
          href="#home"
          icon={<span className="pseudo-icon" />}
          label="Home"
          active
        />
        <Navlink
          href="#about"
          icon={<span className="pseudo-icon" />}
          label="About"
        />
      </Navrail>,
    );
    const rail = result.getByRole('navigation');
    expect(rail.dataset.color).toEqual('primary');
    expect(rail.querySelectorAll('a').length).toEqual(2);
  });
});
