/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BlockText = styled.div`
  color: #FFFFFF;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px;
  margin-left: 10px;
  width: 85%;
  
  h4{
    font-size: 15pt;
  }
  
  p{
    margin-top: 10px;
    font-weight: 100;
    width: 295px;
    font-size: 15px;
    text-align: left;
  }

  svg {
    color: yellow;
  }

  .data{
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    
    .star span{
      padding-left: 5px;
    }
    
    .privacity{
        align-items: right;
        display: flex;
        width: 15%;
        flex-direction: row;

        svg {
          padding-left: 5px;
        }
      }
    }
  }
`;
