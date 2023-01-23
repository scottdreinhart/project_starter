import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Footer.scss';

function Footer() {
  return (
    <FormattedMessage
      id="app.footer"
      defaultMessage="This is Default Footer. {copyrightMsg}"
      values={{ copyrightMsg: 'Copyright 2023, all rights reserved.' }}
    />
  );
}

export default Footer;
