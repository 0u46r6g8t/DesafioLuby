/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// Icon
import { IoMdArrowBack } from 'react-icons/io';
import Menu from '../MenuFooter/Menu';

// Styled
import {
  Container,
  Context,
} from './styled';

const value = 90;

const HeaderBack: React.FC = () => (
  <Container>
    <Context>
      <a href="#">
        <div className="logoBack">
          <IoMdArrowBack size="20" />
        </div>
      </a>
      <div className="dataHeader">
        {value}
        {' '}
        repositórios
      </div>
    </Context>
  </Container>
);

export default HeaderBack;
