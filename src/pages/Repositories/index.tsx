/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import HeaderBack from '../../components/HeaderBack';
import Menu from '../../components/MenuFooter/Menu';
import Repository from '../../components/BlockYellow';

// Styled
import './styled.scss';

// Hooks
import HookRepos from '../../hook/repository';
import BlockData from '../../components/DataRepository';

const Repositories: React.FC = () => {
  // Carrega os repositorios do usuário, através da requisição de utilizando o 'fetch'
  const { username } = useParams();
  const UserRepos = HookRepos(username);

  return (
    <div className="Container">
      <HeaderBack numberReps={UserRepos.length} nameHeader="Repositórios" />
      <div className="Context">
        {
          UserRepos.map((repos) => (
            <Repository heigth={141.5}>
              <BlockData DataRepos={repos} />
            </Repository>
          ))
        }
      </div>
      <Menu color={2} />
    </div>
  );
};

export default Repositories;
