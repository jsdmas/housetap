import { useEffect } from 'react';

import { countCalculator, paymentCalculator, priceConversion } from '../../utils';
import S from './style';
import { ItemsProps } from './type';

const Items = ({
  items,
  increaseItem,
  decreaseItem,
  selectItemList,
  updateTotalProductCount,
  updateTotalProductPayment,
}: ItemsProps) => {
  useEffect(() => {
    updateTotalProductCount(countCalculator(selectItemList));
    updateTotalProductPayment(paymentCalculator(selectItemList));
  }, [updateTotalProductPayment, updateTotalProductCount, selectItemList]);

  return (
    <S.Wrapper>
      {items?.map(({ id, name, event, price }) => (
        <S.Item key={id} $selectIdCount={selectItemList[id]?.count}>
          <S.MockImg />
          <S.Info>
            <S.Top>
              <S.Name>{name}</S.Name>
              {event ? <S.Event>이벤트</S.Event> : null}
            </S.Top>
            <S.Bottom>
              <S.Count>
                <S.Button onClick={() => decreaseItem(id)}>-</S.Button>
                <S.Number>{selectItemList[id]?.count ?? 0}</S.Number>
                <S.Button onClick={() => increaseItem(id, price)}>+</S.Button>
              </S.Count>
              <S.Price>{priceConversion(price)}</S.Price>
            </S.Bottom>
          </S.Info>
        </S.Item>
      ))}
    </S.Wrapper>
  );
};

export default Items;
