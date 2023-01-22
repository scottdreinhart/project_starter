import React from 'react';
import { FormattedMessage } from 'react-intl';

function Footer() {
  return (
    <div>
      <FormattedMessage
        id="app.footer"
        defaultMessage="This is Default Footer. {copyrightMsg}"
        values={{ copyrightMsg: 'Copyright 2023, all rights reserved.' }}
      />
    </div>
  );
}

export default Footer;
