import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SwitchThemeButton } from './SwitchThemeButton';

describe('Given SwitchThemeButton component', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<SwitchThemeButton />);

    expect(asFragment()).toMatchSnapshot();
  });
});
