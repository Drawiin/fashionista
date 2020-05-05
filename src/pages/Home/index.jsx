import React, { useState, useEffect } from 'react';

import './styles.css';

import api from '../../services/api';
import Catalog from '../../components/Catalog';

export default function Home() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    try {
      const response = await api.request.get('catalog');
      const { data } = response;
      setProducts(data);
    } catch (error) {
      if (api.isCancel(error)) {
        console.log('cancelled');
      } else {
        throw error;
      }
    }
  }

  useEffect(() => {
    loadProducts();
    return () => {
      api.abortRequest();
    };
  }, [products]);

  return (
    <div className="home">
      <div className="home__info">
        <span>
          Total:
          {products.length}
        </span>
      </div>
      <Catalog products={products} />
    </div>
  );
}
