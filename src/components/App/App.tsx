import React from 'react';
import '../../assets/styles/App.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
// import PropTypes from 'prop-types';
import { FormattedMessage, FormattedDate } from 'react-intl';
// import { LanguageChooser } from '../LanguageChooser/LanguageChooser';
// import languages from '../../languages/languages.json';
// import English from '../../languages/en-US.json';
// import Spanish from '../../languages/es-MX.json';
// import German from '../../languages/de-DE.json';
// import Chinese from '../../languages/zh-CN.json';
// import Japanese from '../../languages/ja-JP.json';
// import French from '../../languages/fr-FR.json';
// import Italian from '../../languages/it-IT.json';

function App() {
  return (
    <div>
      <hr />
      <p>
        <p>
          <FormattedMessage
            id="app.header"
            defaultMessage="This is a Default Header"
          />
        </p>
        <p>
          <FormattedMessage
            id="app.content"
            defaultMessage="This is Default Content"
          />
          <FormattedDate
            value={Date.now()}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </p>
        <p>
          <FormattedMessage
            id="app.footer"
            defaultMessage="This is Default Footer. {copyrightMsg}"
            values={{ copyrightMsg: 'Copyright 2023, all rights reserved.' }}
          />
          <hr />
        </p>
      </p>
      <p>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </p>
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
