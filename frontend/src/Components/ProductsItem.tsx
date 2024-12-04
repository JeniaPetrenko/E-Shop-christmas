import { NavLink } from "react-router-dom";
import { ItemProducts } from "../Models/ItemProducts";
import Card from "./UI/Card";
import ImageLink from "./UI/ImageLink"; // Імпортуємо ImageLink

type ProductsItemProps = {
  item: ItemProducts;
};

const ProductsItem = ({ item }: ProductsItemProps) => {
  return (
    <Card>
      {/* Використовуємо компонент ImageLink для зображення та переходу на сторінку товару */}
      <ImageLink
        imageSrc={item.img}
        altText={item.name}
        href={`/products/${item.id}`}
      />

      {/* Посилання на сторінку деталей продукту */}
      <NavLink to={`/products/${item.id}`}>Details</NavLink>

      <div className="card-body">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
      </div>
    </Card>
  );
};

export default ProductsItem;
