import styled from 'styled-components';

const ItemStyleComponents = {
  Wrapper: styled.ul`
    padding-top: 80px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    place-items: center;
    gap: 20px;
    padding-bottom: 190px;
  `,
  Item: styled.li<{ $selectIdCount?: number }>`
    width: 301px;
    height: 80px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    background-color: ${(props) =>
      (props.$selectIdCount || 0) > 0 ? 'rgba(247, 90, 47, 0.1)' : ''};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 12px;
  `,
  MockImg: styled.div`
    width: 62px;
    height: 62px;
    background: #d9d9d9;
  `,
  Info: styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 70%;
    height: 100%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
  `,
  Top: styled.div`
    display: flex;
    align-items: center;
  `,
  Name: styled.span`
    margin-right: 10px;
  `,
  Event: styled.span`
    background: #f75a2f;
    border-radius: 10px;
    padding: 1px 5px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #ffffff;
  `,
  Bottom: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Count: styled.span`
    text-align: center;
  `,
  Button: styled.button`
    border: none;
    font-size: large;
    cursor: pointer;
  `,
  Number: styled.span`
    padding: 0px 5px;
  `,
  Price: styled.span``,
};

export default ItemStyleComponents;
