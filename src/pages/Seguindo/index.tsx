import React from 'react';

// Components
import Menu from '../../components/MenuFooter/Menu';

// Styles
import './styled.scss';

const Following: React.FC = () => (
  <div className="Container">
    <div className="Content">
      Site está fora do ar!
      {' '}
      {'\n'}
      {' '}
      Assim que tudo retornar iremos avisá-lo.
    </div>
    <Menu color={4} />
  </div>
);

export default Following;
