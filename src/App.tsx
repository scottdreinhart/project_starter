import './assets/styles/App.scss';
import React from 'react';

export function App() {
  return (
    <div>
      You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      <p>
        REACT_APP_PRIVATE_KEY:&nbsp;
        {process.env.REACT_APP_PRIVATE_KEY}
      </p>
      <p>
        REACT_APP_PUBLIC_KEY:&nbsp;
        {process.env.REACT_APP_PUBLIC_KEY}
      </p>
      <p>
        REACT_APP_API_KEY:&nbsp;
        {process.env.REACT_APP_API_KEY}
      </p>
    </div>
  );
}

export default App;
