import React from 'react';
import './Content4.scss';

function Content4() {
  return (
    <div className="content4">
      Content4
      <p>
        REACT_APP_PRIVATE_KEY:&nbsp;
        {process.env.REACT_APP_PRIVATE_KEY}
      </p>
    </div>
  );
}

export default Content4;
