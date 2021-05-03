/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Link, useParams } from 'react-router-dom';

// Icon
/* Icon de seta */
import { IoMdArrowForward } from 'react-icons/io';

// Interface
import { IPropsFollowers } from '../../interface';

// Styled
import {
  Container,
  Context,
} from './styled';

const DataFollowers = ({ ...props }) => {
  // Pega os dados dos seguidos através da varivel data com uma interface implementada
  const data: IPropsFollowers = props.users;
  // Busca o nome do usuario nas rotas
  const { username } = useParams();

  return (
    // Container principal
    <Container>
      <Context>
        <div className="dataUser">
          <img src={data.avatar_url} alt="" />
        </div>
        <div className="data">
          #
          {data.login}
        </div>
      </Context>
      {/* Realiza o encaminhamento para o perfil do seguidor */}
      <Link to={`/${username}/followers/${data.login}`}>
        <IoMdArrowForward size="28" color="#FFFFFF" />
      </Link>
    </Container>
  );
};

export default DataFollowers;
