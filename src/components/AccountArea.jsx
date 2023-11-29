import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../service/data.service";

const MAX_PRODUCT_COUNT = 50;

const AccountArea = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("productly");
    if (!token) {
      navigate("/login");
    } else {
      const fetchData = async () => {
        try {
          const results = await fetchProducts();
          setProducts(results.data);
        } catch (error) {
          setError(error.message);
        }
      };

      fetchData();
    }
  }, [navigate]);

  const progressBarWidth = useMemo(() => {
    if (products.length && products.length > MAX_PRODUCT_COUNT)
      return (products.length / MAX_PRODUCT_COUNT) * 100;

    return 0;
  }, [products]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div style={{ width: progressBarWidth }}>Progress Bar</div>
    </div>
  );
};

export default AccountArea;
