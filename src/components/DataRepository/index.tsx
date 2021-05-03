/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

// Icons
import { AiOutlineStar } from 'react-icons/ai';
import { VscUnlock, VscLock } from 'react-icons/vsc';
import { IPropsRepos } from '../../interface';

// Styled
import { BlockText } from './styled';

const BlockData = ({ ...props }) => {
  const data: IPropsRepos = props.DataRepos;

  return (
    <BlockText>
      <h4>{data.name}</h4>
      <p>
        {data.descrition || 'Sem descrição'}
      </p>
      <div className="data">
        <div className="star">
          <AiOutlineStar />
          <span>{data.stargazers_count}</span>
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
