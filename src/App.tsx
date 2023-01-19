import './assets/styles/App.scss';

import React from 'react';

export function App() {
  console.log(process.env.REACT_APP_API_KEY); // TODO: Remove this.
  return <div className="bigRed">Hello, World!!!</div>;
}

export default App;
