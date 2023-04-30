import { GET_PRODUCTS } from "../endPoints";

export const getProducts = async () => {
  try {
    const data = await (await fetch(GET_PRODUCTS)).json();
    return data;
  } catch (error) {
    console.log({ error });
  }
};
