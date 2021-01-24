import axios from "axios";

const client = axios.create();

export const getMenuList = () => {
  return client.get("/api/menu");
};

export const createOrder = (order) => {
  return client.post("/api/order", order);
};
