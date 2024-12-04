import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemProducts } from "../Models/ItemProducts";
import { getProduct } from "../Utilities/LoadProducts";

export const ProductDetailsPage = () => {
  const [product, setProduct] = useState<ItemProducts | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError("No product ID provided.");
        return;
      }

      const productData = await getProduct(Number(id));
      if (productData) {
        setProduct(productData);
      } else {
        setError("Product not found.");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="overlay"></div>

      <section className="details">
        <div>
          <img src={product.img} alt={product.name} />
        </div>
        <div className="details-info">
          <h2>{product.name}</h2>
          <p className="price">Price: ${product.price}</p>
          <p className="category">Category: {product.category}</p>
          <p>Description: {product.description}</p>
        </div>
      </section>
    </>
  );
};
