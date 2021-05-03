import React from 'react';
import { useParams } from 'react-router-dom';
import CardPeoples from '../../components/CardPeoples';
import Menu from '../../components/MenuFooter/Menu';

// Styled
import './styled.scss';

const Home: React.FC = () => {
  const { username } = useParams();

  return (
    <div className="Container">
      <div className="Context">
        <CardPeoples username={username} textBox="Sair" color="red" />
      </div>
      <Menu color={1} />
    </div>
  );
};

export default Home;
