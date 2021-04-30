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
        {/* <IconContext.Provider value={{ size: '28' }}> */}
        <Icon>
          <FiHome color="black" />
        </Icon>
        {/* </IconContext.Provider> */}
        <p>
          Home
        </p>
      </a>

      <a href="#">
        {/* <IconContext.Provider value={{ size: '28' }}> */}
        <Icon>
          <FiGithub />
        </Icon>
        {/* </IconContext.Provider> */}
        <p>
          Repos
        </p>
      </a>

      <a href="#">
        {/* <IconContext.Provider value={{ size: '28' }}> */}
        <Icon color="black">
          <IoPeopleOutline />
        </Icon>
        {/* </IconContext.Provider> */}
        <p>
          Seguidores
        </p>
      </a>

      <a href="#">
        {/* <IconContext.Provider value={{ size: '28' }}> */}
        <Icon>
          <IoPeopleOutline />
        </Icon>
        {/* </IconContext.Provider> */}
        <p>Seguindo</p>
      </a>
    </Content>
  </Container>
);

export default Menu;
