import React from 'react';

function Content5() {
  return (
    <div>
      Content5
      <p>
        REACT_APP_PUBLIC_KEY:&nbsp;
        {process.env.REACT_APP_PUBLIC_KEY}
      </p>
    </div>
  );
}

export default Content5;
