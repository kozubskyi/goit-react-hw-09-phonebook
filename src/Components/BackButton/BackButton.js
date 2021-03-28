import React from 'react';
import { withRouter } from 'react-router-dom';
import './BackButton.scss';

const BackButton = ({ history, location }) => {
  const handleBackButtonClick = () => history.push(location?.state?.from);

  return (
    <button type="button" className="back-button" onClick={handleBackButtonClick}>
      <span className="emoji" role="img">
        🔙
      </span>
    </button>
  );
};

export default withRouter(BackButton);
