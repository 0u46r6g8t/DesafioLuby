/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

// Interfaces
import { Styled } from '../../interface';

export const Container = styled.div`
  bottom: -10px;
  width: 100vw;
  position: fixed;
  min-height: 50pt;
  filter:blur(0.4px);
`;

export const Content = styled.div`
  display: flex;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60pt;
  background-color: #FFFFFF;
  
  a{
    padding: 5px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  } 
`;

export const Icon = styled.div<Styled>`
  text-align: center;
  svg {
    color: ${(props) => props.color};
    size: 29; 
  };

  p{
    color: ${(props) => props.color};
    font-weight: bold;
  }
`;
