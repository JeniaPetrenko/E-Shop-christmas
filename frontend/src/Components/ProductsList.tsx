import { ItemProducts } from "../Models/ItemProducts";
import ProductsItem from "./ProductsItem";

type ProductsListProps = {
  products: ItemProducts[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  if (!Array.isArray(products)) {
    console.error("Expected products to be an array, but got:", products);
    return <div>Error: products is not an array</div>;
  }
  return (
    <section className="grid">
      {products.map((item) => (
        <ProductsItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductsList;
