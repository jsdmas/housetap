import styled from 'styled-components';

const BillStyleComponents = {
  Wrapper: styled.footer`
    position: fixed;
    bottom: 0%;
    background-color: #fff;
    width: inherit;
    height: 170px;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px 20px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  `,

  Items: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px 30px;
  `,

  Item: styled.li`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  `,

  Button: styled.button<{ $ItemLoading: boolean }>`
    cursor: pointer;
    width: 301px;
    height: 47.92px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    background-color: ${(props) => (props.$ItemLoading ? '#C1C1C1' : '#000')};
    border: none;
  `,
};

export default BillStyleComponents;
