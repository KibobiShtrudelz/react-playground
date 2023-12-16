import { render } from '@testing-library/react';

import { PrivateRoutes } from './private-routes';

describe('PrivateRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrivateRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
