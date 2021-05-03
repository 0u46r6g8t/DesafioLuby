/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import HeaderBack from '../HeaderBack';
import Menu from '../MenuFooter/Menu';
import BlockFollowers from '../DataFollowers';
import BlockYellow from '../BlockYellow';

// Styles
import {
  Container,
} from './styled';

// Hooks
import HookFollowers from '../../hook/followers';

// Realiza a renderização de todos os seguidores
const ListFollowers: React.FC = () => {
  const { username } = useParams(); // Busca o valor na rota
  const Userfollowers = HookFollowers(username); // Realiza a busca dos dados na API

  return (
    <Container>
      <HeaderBack nameHeader="Seguidores" numberReps={Userfollowers.length} />
      <div className="Content">
        {
          // Realiza a renderização de cada bloco com o  user e alguns 'extras'
          Userfollowers.map((user) => (
            // Seta a altura da janela
            <BlockYellow heigth={101.5}>
              <BlockFollowers users={user} />
            </BlockYellow>
          ))
        }
      </div>
      <Menu color={3} />
    </Container>
  );
};

export default ListFollowers;
