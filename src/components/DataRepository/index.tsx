/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

// Icons
import { AiOutlineStar } from 'react-icons/ai';
import { VscUnlock, VscLock } from 'react-icons/vsc';
import { IPropsRepos } from '../../interface';

// Styled
import { BlockText } from './styled';

const BlockData = ({ ...props }) => {
  const Data = props.DataRepos;

  return (
    <BlockText>
      {/* <h4>{props.name}</h4> */}
      <p>
        {/* {props.descrition || 'Sem descrição'} */}
      </p>
      <div className="data">
        <div className="star">
          <AiOutlineStar />
          {/* <span>{props.stargazers_count}</span> */}
        </div>
        <div className="privacity">
          <VscUnlock color="green" />
          <VscLock color="red" />
        </div>
      </div>
    </BlockText>
  );
};

export default BlockData;
