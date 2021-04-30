/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

// Styled
import './styled.scss';

// Icons
import { IconContext } from 'react-icons';
import { BiExit } from 'react-icons/bi';
import Menu from '../../components/MenuFooter/Menu';

const Repository = () => (
  <div className="container">
    <header className="containerHeader">
      <p className="nick">#anilton.veiga</p>
      <a className="buttonExit">
        <span>Sair</span>
        <IconContext.Provider value={{ size: '30' }}>
          <BiExit style={{ backgroundColor: '#1F1F1F', padding: '5' }} />
        </IconContext.Provider>
      </a>
    </header>

    <section>
      <section className="containerMainSection">
        <div className="contentMainImage">
          <img src="https://avatars.githubusercontent.com/u/57011784?v=4" />
        </div>
      </section>
    </section>

    <div className="containerMain">
      <div className="blockTitle">
        <div className="blockYellow" />
        <div className="dataUser">
          <h1>Anilton Veiga</h1>
          <span>
            <p className="email">anilton.veigaa@gmail.com </p>
            <p className="city">Itaí/SP</p>
          </span>
        </div>
      </div>

      <div className="controllerFollowers">
        <div className="dataControler">
          <h1 className="ValueController">32</h1>
          <p>Seguidores</p>
        </div>

        <div className="dataControler">
          <h1 className="ValueController">32</h1>
          <p>Seguindo</p>
        </div>

        <div className="dataControler">
          <h1 className="ValueController">10</h1>
          <p>Repos</p>
        </div>
      </div>

      <section className="bio">
        <div className="blockTitle">
          <h1>
            BIO
          </h1>
          <div className="blockYellow" />
        </div>
        <p>
          Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a
          piece of classical Latin literature from 45
          BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at
          Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin
          words, consectetur.
        </p>
      </section>
    </div>

    <Menu />
  </div>

);

export default Repository;
