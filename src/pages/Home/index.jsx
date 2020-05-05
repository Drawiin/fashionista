import React, { useState, useEffect } from 'react';

import './styles.css';

import api from '../../services/api';
import Catalog from '../../components/Catalog';

export default function Home() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    try {
      const response = await api.get('catalog');
      const { data } = response;
      setProducts(data);
    } catch (error) {
      console.error(`Não foi possivel carregar os produtos \n ${error}`);
    }
  }

  useEffect(() => {
    loadProducts();
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
