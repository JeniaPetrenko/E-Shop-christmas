import { useEffect, useState } from "react";
import ProductsList from "../Components/ProductsList";
import { LoadProducts } from "../Utilities/LoadProducts";
import { ItemProducts } from "../Models/ItemProducts";

export const ProductsPage = () => {
  const [products, setProducts] = useState<ItemProducts[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await LoadProducts("/products");
        setProducts(data);
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="products-page">
      <div>
        <h1>Christmas Collection</h1>
        <p>Find the perfect gifts for your loved ones!</p>
      </div>

      <div className="product-list-section">
        <h2 className="page-title">Our Products</h2>
        <ProductsList products={products} />
      </div>
    </div>
  );
};
