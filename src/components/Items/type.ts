import { SelectItemState } from '../../store/selectItem';
import { Product } from '../../types';

export interface ItemsProps {
  items: Product[] | null;
  increaseItem: (productId: string, productPrice: number) => void;
  decreaseItem: (productId: string) => void;
  selectItemList: SelectItemState;
  updateTotalProductCount: (productCount: number) => void;
  updateTotalProductPayment: (productPayment: number) => void;
}
