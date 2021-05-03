/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

// Styled
import './styled.scss';

// Icon(s)
import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [nameUser, setNameUser] = useState('');
  const [activate, setActivate] = useState(false);

  function handleName() {
    if (!nameUser) {
      setActivate(true);
    }
  }

  return (
    <div className="container">
      <div className="content">
        <IconContext.Provider value={{ color: '#FFCE00', size: '130' }}>
          <div style={{ backgroundColor: '#292929' }}>
            <AiFillGithub />
          </div>
        </IconContext.Provider>
        <div className="content">
          <div className="inputField">
            <input
              type="text"
              className="inputLogin"
              placeholder="Usuário"
              onChange={(e) => setNameUser(e.target.value)}
              maxLength={20}
              required
            />
            <span id="required">Campo Obrigatório</span>
          </div>

          {
            nameUser ? (
              <Link to={`/home/${nameUser}`}>
                <button className="buttonLogin" onClick={handleName}>
                  Entrar
                </button>
              </Link>
            ) : (
              <button className="buttonLogin" onClick={handleName}>
                Entrar
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
