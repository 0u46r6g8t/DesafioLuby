/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Icon
import { IoMdArrowBack } from 'react-icons/io';

// Styled
import {
  Container,
  Context,
} from './styled';

// Interfaces
interface IPropsHeader{
  numberReps: number
  nameHeader: string
}

// Header principal
const HeaderBack: React.FC<IPropsHeader> = (props) => {
  const { username } = useParams();

  return (
    <Container>
      <Context>
        <Link to={`/home/${username}`}>
          <div className="logoBack">
            <IoMdArrowBack size="20" />
          </div>
        </Link>
        <div className="dataHeader">
          {/* Quantidade e o nome do cabeçalho */}
          { props.numberReps }
          {' '}
          { props.nameHeader }
        </div>
      </Context>
    </Container>
  );
};

// Exportando o componente
export default HeaderBack;
