import { render } from '@testing-library/react';

import App from '../app/App';

describe('App', () => {
  it('renders correctly', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
