import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getProductData } from '../api';
import Items from '../components/Items';
import { RootState } from '../store';
import { setTotalCount, setTotalPayment } from '../store/bill';
import { setProduct, setProductLoading } from '../store/product';
import { decreaseSelectItem, increaseSelectItem } from '../store/selectItem';
import { Product } from '../types';

const ProductContainer = () => {
  const { loading, items: products } = useSelector((state: RootState) => state.productReducer);
  const selectItemList = useSelector((state: RootState) => state.selectItemReducer);
  const dispatch = useDispatch();

  const increaseItem = (productId: string, productPrice: number) => {
    dispatch(increaseSelectItem(productId, productPrice));
  };

  const decreaseItem = (productId: string) => {
    dispatch(decreaseSelectItem(productId));
  };

  const updateTotalProductCount = (productCount: number) => {
    dispatch(setTotalCount(productCount));
  };

  const updateTotalProductPayment = (productPayment: number) => {
    dispatch(setTotalPayment(productPayment));
  };

  useEffect(() => {
    (async () => {
      try {
        const productList = await getProductData<Product>();

        dispatch(setProduct(productList));
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setProductLoading(false));
      }
    })();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <LoadingText>목록을 불러오고 있습니다.</LoadingText>
      ) : (
        <Items
          items={products}
          increaseItem={increaseItem}
          decreaseItem={decreaseItem}
          selectItemList={selectItemList}
          updateTotalProductCount={updateTotalProductCount}
          updateTotalProductPayment={updateTotalProductPayment}
        />
      )}
    </>
  );
};

export default ProductContainer;

const LoadingText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;
