import React from 'react';
import './Content3.scss';

function Content3() {
  return (
    <div className="content3">
      Content3
      <p>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </p>
    </div>
  );
}

export default Content3;
