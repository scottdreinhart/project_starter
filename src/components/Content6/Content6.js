import React from 'react';
import './Content6.scss';

function Content6() {
  return (
    <div className="content6">
      Content6
      <p>
        REACT_APP_API_KEY:&nbsp;
        {process.env.REACT_APP_API_KEY}
      </p>
    </div>
  );
}

export default Content6;
