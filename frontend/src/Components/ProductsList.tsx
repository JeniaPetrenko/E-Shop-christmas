import { ItemProducts } from "../Models/ItemProducts";
import ProductsItem from "./ProductsItem";

type ProductsListProps = {
  products: ItemProducts[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <section className="grid">
      {products.map((item) => (
        <ProductsItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductsList;
