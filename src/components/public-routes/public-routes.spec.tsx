import { render } from '@testing-library/react';

import { PublicRoutes } from './public-routes';

describe('PublicRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublicRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
