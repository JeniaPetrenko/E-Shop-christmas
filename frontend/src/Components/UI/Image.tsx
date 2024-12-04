type ImageProps = {
  imageSrc: string;
  altText: string;
};

const Image = ({ imageSrc, altText }: ImageProps) => {
  return (
    <img
      src={imageSrc}
      alt={altText}
      className="product-image" // додаємо клас для стилізації
    />
  );
};

export default Image;
