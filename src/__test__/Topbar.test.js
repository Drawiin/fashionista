import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import Topbar from '../components/Topbar';

describe('Teste Topbar component', () => {
  it('Sould render the Topbar component', async () => {
    const { getByTestId } = render(<Topbar />);
    const shoppingBagNode = await waitForElement(() =>
      getByTestId('shopping-bag')
    );
  });
});
