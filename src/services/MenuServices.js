import axios from "axios";

const client = axios.create();

export const getMenuList = () => {
  return client.get("/api/menu");
};
