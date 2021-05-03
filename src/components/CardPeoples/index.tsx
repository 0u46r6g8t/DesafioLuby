/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

// Styled
import './styled.scss';

// Icons
import { IconContext } from 'react-icons';
import { BiExit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import HookApi from '../../hook/segments';

const CardPeoples = ({ ...props }) => {
  const UserData = HookApi(props.username);
  return (
    <div className="container">
      <header className="containerHeader">
        <p className="nick">
          #
          {UserData.login}
        </p>
        <Link to="/" className="buttonExit">
          <span>{props.textBox}</span>
          <IconContext.Provider value={{ size: '30' }}>
            <BiExit color={props.color} style={{ backgroundColor: '#1F1F1F', padding: '5' }} />
          </IconContext.Provider>
        </Link>
      </header>

      <section>
        <section className="containerMainSection">
          <div className="contentMainImage">
            <img src={UserData.avatar_url} />
          </div>
        </section>
      </section>

      <div className="containerMain">
        <div className="blockTitle">
          <div className="blockYellow" />
          <div className="dataUser">
            <h1>{UserData.name}</h1>
            <span>
              <p className="email">{!UserData.email && 'Sem email'}</p>
              <p className="city">{UserData.location}</p>
            </span>
          </div>
        </div>

        <div className="controllerFollowers">
          <div className="dataControler">
            <h1 className="ValueController">{UserData.followers}</h1>
            <p>Seguidores</p>
          </div>

          <div className="dataControler">
            <h1 className="ValueController">{UserData.following}</h1>
            <p>Seguindo</p>
          </div>

          <div className="dataControler">
            <h1 className="ValueController">{UserData.public_repos}</h1>
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
            {UserData.bio || 'Sem biografia'}
          </p>
        </section>
      </div>
    </div>
  );
};

export default CardPeoples;
