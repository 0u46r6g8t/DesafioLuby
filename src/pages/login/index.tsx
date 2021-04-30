/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

// Styled
import './styled.scss';

// Icon(s)
import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { WiDirectionRight } from 'react-icons/wi';

const Login = () => (
  <div className="container">
    <div className="content">
      <IconContext.Provider value={{ color: "blue", size: '130' }}>
        <div style={{ backgroundColor: '#292929' }}>
          <AiFillGithub />
        </div>
      </IconContext.Provider>
      <div className="content">
        <input type="text" className="inputLogin" placeholder="Usuário" />
        <button className="buttonLogin">
          ENTRAR
        </button>
      </div>
    </div>
  </div>
);

export default Login;
