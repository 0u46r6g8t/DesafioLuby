/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

// Icon
import { FiHome, FiGithub } from 'react-icons/fi';
import { MdPeople } from 'react-icons/md';
import { useParams, Link } from 'react-router-dom';

import {
  Container,
  Content,
  Icon,
} from './styles';

const Menu = (props: any) => {
  const { color } = props;

  // Realizar a manipulação se está setado ou não
  const [activateHome, setActivateHome] = useState('#A5A5A5');
  const [activateRepo, setActivateRepo] = useState('#A5A5A5');
  const [activateFollowers, setActivateFollowers] = useState('#A5A5A5');
  const [activateFollowing, setActivateFollowing] = useState('#A5A5A5');

  // Busca na rota e na api os dados
  const { username, userFollowing } = useParams();
  const [user, setUser] = useState(username);

  return (
    <Container>
      <Content>
        {/* Indica a primeira rota 'home' com o user principal */}
        <Link to={`/home/${user}`}>
          <Icon color={color !== 1 ? activateHome : '#000000'}>
            <FiHome
              size="28"
            />
            <p>Home</p>
          </Icon>
        </Link>

        {/* Seta os repositorios publicos da pessoa */}
        <Link to={`/${user}/repository`}>
          <Icon color={color !== 2 ? activateRepo : '#000000'}>
            <FiGithub
              size="28"
            />
            <p>Repos</p>
          </Icon>
        </Link>

        {/* Seta os seguidores */}
        <Link to={`/${user}/followers`}>
          <Icon color={color !== 3 ? activateFollowers : '#000000'}>
            <MdPeople
              size="28"
            />
            <p>Seguidores</p>
          </Icon>
        </Link>

        {/* Rota disponivel para setar os following, mas infelizmente os
          following não estão sendo retornados */}
        <Link to={`/${user}/following/`}>
          <Icon color={color !== 4 ? activateFollowing : '#000000'}>
            <MdPeople
              size="28"
            />
            <p>Seguindo</p>
          </Icon>
        </Link>
      </Content>
    </Container>
  );
};

// Exporta o componente
export default Menu;
