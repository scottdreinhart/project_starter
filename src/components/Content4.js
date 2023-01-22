import React from 'react';

function Content4() {
  return (
    <div>
      Content4
      <p>
        REACT_APP_PRIVATE_KEY:&nbsp;
        {process.env.REACT_APP_PRIVATE_KEY}
      </p>
    </div>
  );
}

export default Content4;
