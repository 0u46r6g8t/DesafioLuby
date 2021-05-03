import React from 'react';

// Styled
import {
  Container,
  Context,
} from './styled';

// Interface
interface IProps {
  heigth: number
}

const BlockYellow: React.FC<IProps> = ({ ...Data }) => (
  <Container heigth={Data.heigth}>
    <Context />
    {/* Recebe os filhos deste componente e os renderiza */}
    {Data.children}
  </Container>
);

// Exporta o componente
export default BlockYellow;
