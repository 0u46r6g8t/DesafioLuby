/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  color: #FFFFFF;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  margin-left: 10px;
  width: 85%;
  height: 69px;

  img {
    width: 64px;
    border: 4px solid #FFFFFF;
    border-radius: 100px;
  }
`;

export const Context = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .data{
    width: 68%;
    height: 39.5px;
    font-size: 16px;
    word-break: break-word;
    font-weight: bold;
    text-align: left;
  }
`;
