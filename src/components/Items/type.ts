import { SelectItemState } from '../../store/selectItem';
import { Product } from '../../types';

export interface ItemsProps {
  items: Product[] | null;
  increaseItem: (productId: string) => void;
  decreaseItem: (productId: string) => void;
  selectItemList: SelectItemState;
}
