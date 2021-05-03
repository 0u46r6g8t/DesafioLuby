import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  background-color: #1F1F1F;
  color: #FFFFFF;
  height: 40px;
  padding-top:10px;
`;

export const Context = styled.div`
  display: flex;
  width: 95%;
  height: 80%;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  a{
    .logoBack{
      display: flex;
    }

    svg {
      color: white;
    }
  }

  .dataHeader{
    width: 94%;
    text-align: center;
  }
`;
