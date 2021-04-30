/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// Icon
import { FiHome, FiGithub } from 'react-icons/fi';
import { IoPeopleOutline } from 'react-icons/io5';
// import { IconContext } from 'react-icons';

// Styled
import {
  Container,
  Content,
  Icon,
} from './styles';

const Menu = () => (
  <Container>
    <Content>
      <a href="#">
        <Icon>
          <FiHome />
        </Icon>
        <p>
          Home
        </p>
      </a>

      <a href="#">
        <Icon>
          <FiGithub />
        </Icon>
        <p>
          Repos
        </p>
      </a>

      <a href="#">
        <Icon color="black">
          <IoPeopleOutline />
        </Icon>
        <p>
          Seguidores
        </p>
      </a>

      <a href="#">
        <Icon>
          <IoPeopleOutline />
        </Icon>
        <p>Seguindo</p>
      </a>
    </Content>
  </Container>
);

export default Menu;
