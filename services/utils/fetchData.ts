import { ProductsResponse } from 'types/product.type';

const fetchData = async (): Promise<ProductsResponse> => {
  const url = `https://dummyjson.com/products`;
  console.log('the url used was', url);
  const response = await fetch(url);
  const data: ProductsResponse = await response.json();
  return data;
};

export default fetchData;
