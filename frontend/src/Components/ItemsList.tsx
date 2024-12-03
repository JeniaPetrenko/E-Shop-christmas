import axios from "axios";
import { useEffect, useState } from "react";
const ItemsList = () => {
  const [itemsList, setItemsList] = useState<[]>([]);
  async function getData(): Promise<void> {
    try {
      const apiProducts = await axios.get(`http://localhost:5000/items/${id}`);
      console.log(apiProducts.data);
      setItemsList(apiProducts.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="grid">
      {itemsList &&
        itemsList.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
    </section>
  );
};

export default ItemsList;
