import styled from 'styled-components';

import { Product } from '../../types';

interface ItemsProps {
  items: Product[] | null;
}

const Wrapper = styled.ul`
  padding-top: 80px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  place-items: center;
  gap: 20px;
  padding-bottom: 190px;
`;

const Item = styled.li`
  width: 301px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

const Items = ({ items }: ItemsProps) => {
  return (
    <Wrapper>
      {items?.map(({ id, name, event, materialType, price }) => <Item key={id}>{name}</Item>)}
    </Wrapper>
  );
};

export default Items;
