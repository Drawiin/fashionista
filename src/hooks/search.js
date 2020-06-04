import { useState, useEffect } from 'react';

import api from '../services/api';

function useSearch() {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  async function loadProducts() {
    try {
      const { data } = await api.get('catalog');
      setProducts(data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function search(search) {
    search = search.trim();
    if (search.length > 0) {
      const result = products.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResult(result);
    }
  }

  return [searchResult, search];
}

export default useSearch;
