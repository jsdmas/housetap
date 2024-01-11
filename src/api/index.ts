import { Product } from '../types';

const API_ENDPOINT = process.env.REACT_APP_PRODUCTLIST ?? 'http://localhost:3001';

export async function getProductData<T extends Product>(): Promise<T[]> {
  const products = await fetch(`${API_ENDPOINT}/items`);

  if (!products.ok) {
    throw new Error('데이터 가져오기 실패!');
  }

  const productList: T[] = await products.json();

  return productList;
}
