export class ItemsModel {
  constructor(id, name, price, description, image, category, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
    this.quantity = quantity;
  }
}

export default ItemsModel;
