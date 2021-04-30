/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  bottom: 0;
  width: 99.3%;
  position: fixed;
  min-height: 60pt;
  z-index: auto;
`;

export const Content = styled.div`
  display: flex;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60pt;
  background-color: #cecece;

  a{
    padding: 5px;
    color: #3E3E3E;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Icon = styled.div`
  text-align: center;
  svg {color: black};
  // background-color: black;
`;
