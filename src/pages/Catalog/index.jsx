import React, { useState, useEffect } from 'react';

import './styles.css';

import api from '../../services/api';
import Products from '../../components/Products';
import Topbar from '../../components/Topbar';

export default function Catalog() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    try {
      const { data } = await api.request.get('catalog');
      setProducts(data);
    } catch (error) {
      if (!api.isCancel(error)) {
        throw error;
      }
    }
  }

  useEffect(() => {
    loadProducts();
    return () => api.abortRequest();
  });

  return (
    <>
      <Topbar />
      <div className="catalog">
        <div className="catalog__info">
          <span>
            Total:
            {products.length}
          </span>
        </div>
        <Products products={products} />
      </div>
    </>
  );
}
