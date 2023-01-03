import { render } from '@testing-library/react';

import RetroBackground from '../RetroBackground';

describe('RetroBackground', () => {
  it('renders correctly', () => {
    const { baseElement } = render(<RetroBackground />);
    expect(baseElement).toMatchSnapshot();
  });
});
