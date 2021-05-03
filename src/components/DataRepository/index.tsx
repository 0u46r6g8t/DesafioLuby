/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

// Icons
import { AiOutlineStar } from 'react-icons/ai';
import { VscUnlock, VscLock } from 'react-icons/vsc';

// Interfaces
import { IPropsRepos } from '../../interface';

// Styled
import { BlockText } from './styled';

const BlockData = ({ ...props }) => {
  const data: IPropsRepos = props.DataRepos;

  return (
    // Div responsavel por criar o bloco com as informações
    <BlockText>
      <h4>{data.name}</h4>
      <p>
        {data.description || 'Sem descrição'}
      </p>
      {/* Separa o modo do repositorio e a quantidade de estrlas, sendo que serão renderizados
       apenas repositorios publicos */}
      <div className="data">
        <div className="star">
          <AiOutlineStar />
          <span>{data.stargazers_count}</span>
        </div>
        <div className="privacity">
          {/* verifica se é privado ou público */}
          {!data.private ? (
            <VscUnlock color="green" />
          ) : (
            <VscLock color="red" />
          )}
        </div>
      </div>
    </BlockText>
  );
};

export default BlockData;
