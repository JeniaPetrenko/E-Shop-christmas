import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:5000/products", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Product 1",
        price: 10.99,
        quantity: 100,
        url: "/images/products/1.jpg",
        img: "images/products/1.jpg",
        description: "This is product 1",
        category: "Category 1",
      },
      {
        id: 2,
        name: "Product 2",
        price: 12.99,
        quantity: 10,
        url: "images/products/2.jpg",
        img: "images/products/2.jpg",
        description: "This is product 2",
        category: "Category 1",
      },
    ]);
  }),
];
