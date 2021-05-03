/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import HeaderBack from '../../components/HeaderBack';
import Menu from '../../components/MenuFooter/Menu';
import Repository from '../../components/BlockYellow';

// Styled
import {
  Container,
  Content,
} from './styled';

// Components
import HookRepos from '../../hook/repository';

const Repositories: React.FC = () => {
  // Carrega os repositorios do usuário, através da requisição de utilizando o 'fetch'
  const { username } = useParams();
  const UserRepos = HookRepos(username);

  return (
    <Container>
      <HeaderBack />
      <Content>
        {
          UserRepos.map((repos) => (
            <Repository Data={repos} />
          ))
        }
      </Content>
      <Menu />
    </Container>
  );
};

export default Repositories;
