import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, waitForElement } from '@testing-library/react';
import data from './data/products.json';

import Product from '../components/Product';

const products = data;
const [product] = products;

describe('Product component', () => {
  it('Should render', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Product product={product} />
      </MemoryRouter>
    );
    const productNode = await waitForElement(() => getByTestId('product'));
  });
});
