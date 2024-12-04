import { Header } from "../Components/UI/Header";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleHeroClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    navigate("/products"); // Перехід на сторінку продуктів
  };

  return (
    <div className="home-page">
      <Header title="Welcome to Christmas e-shop" />
      <div
        className="hero-section"
        onClick={handleHeroClick}
        style={{ cursor: "pointer" }}
      >
        <p>Find the perfect gifts!</p>
      </div>
    </div>
  );
};
