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

const Menu = (...props: any) => {
  const { value } = props;

  const [activateHome, setActivateHome] = useState('#A5A5A5');
  const [activateRepo, setActivateRepo] = useState('#A5A5A5');
  const [activateFollowers, setActivateFollowers] = useState('#d17171');
  const [activateFollowing, setActivateFollowing] = useState('#A5A5A5');

  const { username } = useParams();
  const [user, setUser] = useState(username);
  return (
    <Container>
      <Content>
        <Link to={`/home/${user}`}>
          <Icon color={value !== 1 ? activateHome : '#000000'}>
            <FiHome
              size="28"
            />
            <p>Home</p>
          </Icon>
        </Link>

        <Link to={`/${user}/repository`}>
          <Icon color={value !== 2 ? activateRepo : '#000000'}>
            <FiGithub
              size="28"
            />
            <p>Repos</p>
          </Icon>
        </Link>

        <Link to={`${user}/followers`}>
          <Icon color={value !== 3 ? activateFollowers : '#000000'}>
            <MdPeople
              size="28"
            />
            <p>Seguidores</p>
          </Icon>
        </Link>

        <Link to={`${user}/following`}>
          <Icon color={value !== 4 ? activateFollowing : '#000000'}>
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

export default Menu;
