import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeStyleComponents = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #000000;
    width: 100%;
    height: 100%;
  `,
  StyledLink: styled(Link)`
    background-color: #fff;
    border: none;
    width: 172px;
    height: 88px;
    border-radius: 20px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;

    margin-top: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
  `,
};

export default HomeStyleComponents;
