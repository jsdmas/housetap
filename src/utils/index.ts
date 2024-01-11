import { SelectItemState } from '../store/selectItem';

export function priceConversion(price: number) {
  return price.toLocaleString() + '원';
}

export function countCalculator(selectItemList: SelectItemState) {
  let totalCount = 0;

  for (const [key, value] of Object.entries(selectItemList)) {
    totalCount += value.count;
  }

  return totalCount;
}

export function paymentCalculator(selectItemList: SelectItemState) {
  let totalPrice = 0;

  for (const [key, value] of Object.entries(selectItemList)) {
    totalPrice += value.count * value.price;
  }

  return totalPrice;
}
