import React from 'react';
import { useParams } from 'react-router-dom';
import CardPeoples from '../../components/CardPeoples';

// Components
import Menu from '../../components/MenuFooter/Menu';

// Styles
import './styled.scss';

const Followers: React.FC = () => {
  const { userFollowers } = useParams();

  return (
    <div className="Container">
      <div className="Content">
        <CardPeoples username={userFollowers} textBox="Salvar" color="green" />
      </div>
      <Menu color={3} />
    </div>
  );
};

export default Followers;
