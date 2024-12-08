import { NavLink } from "react-router-dom";

type ImageLinkProps = {
  imageSrc: string;
  altText: string;
  href: string; // Це буде шлях до детальної сторінки товару
};

const ImageLink = ({ imageSrc, altText, href }: ImageLinkProps) => {
  // Обробник помилки для зображення (якщо воно не завантажується)

  return (
    <NavLink to={href}>
      {/* Виведення картинки товару, яка буде обгорнута посиланням */}
      <img src={imageSrc} alt={altText} className="product-image" />
    </NavLink>
  );
};

export default ImageLink;
