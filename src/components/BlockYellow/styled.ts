/* eslint-disable no-console */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

interface IPropsContainer {
  heigth: number
}

export const Container = styled.div<IPropsContainer>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  height: ${(props) => `${props.heigth}px`};
  width: 99vw;
  padding-top: 20px;
  border-bottom: 1px solid #595F64;
`;

export const Context = styled.div`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #FFCE00;
  width: 7pt;
  padding-top: 5px;
  height: 26pt;
`;
