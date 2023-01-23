import React from 'react';
import './Content5.scss';

function Content5() {
  return (
    <div className="content5">
      Content5
      <p>
        REACT_APP_PUBLIC_KEY:&nbsp;
        {process.env.REACT_APP_PUBLIC_KEY}
      </p>
    </div>
  );
}

export default Content5;
