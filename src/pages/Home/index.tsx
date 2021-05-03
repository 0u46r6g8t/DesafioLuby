/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CardPeoples from '../../components/CardPeoples';
import Menu from '../../components/MenuFooter/Menu';
import HookApi from '../../hook/segments';

// Styled
import './styled.scss';

const Home: React.FC = () => {
  const { username } = useParams();
  const User = HookApi(username);

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
