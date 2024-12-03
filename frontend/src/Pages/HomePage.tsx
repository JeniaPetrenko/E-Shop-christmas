import { Header } from "../Components/Header";
import { ItemsList } from "../Components/ItemsList";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Header title="Welcome to My Christmas e-shop" />
      <h1>Home Page</h1>
      <ItemsList />
    </div>
  );
};
