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
import { IPropsRepos } from '../../interface';

const Repositories: React.FC = () => {
  const { username } = useParams();
  const UserRepos = HookRepos(username);
  console.log(typeof UserRepos);

  return (
    <Container>
      <HeaderBack />
      <Content>
        <Repository Data={UserRepos[0]} />
      </Content>
      <Menu />
    </Container>

  );
};

export default Repositories;
