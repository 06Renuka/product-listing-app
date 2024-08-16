


import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce'; 

const ProductList = ({ authToken }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0); 
  const itemsPerPage = 8;

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  
  const debouncedFetchProducts = useCallback(
    debounce(() => {
      fetchProducts();
    }, 500),
    [searchQuery, currentPage]
  );

  useEffect(() => {
    debouncedFetchProducts();

    
    return () => debouncedFetchProducts.cancel();
  }, [searchQuery, currentPage, debouncedFetchProducts]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://intern-task-api.bravo68web.workers.dev/api/products', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

     
      const filteredProducts = response.data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setProducts(filteredProducts);
      setTotalProducts(filteredProducts.length); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-8">
      <h1 className="text-xl mb-4">Product List</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border w-full"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="border p-4 relative">
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg">{product.title}</h3>
            <div className="absolute top-0 right-0 transform rotate-12 bg-violet-900 text-white p-1 text-sm">
              ${product.price}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(totalProducts / itemsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`p-2 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

