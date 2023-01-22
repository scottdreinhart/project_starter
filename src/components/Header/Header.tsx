import React from 'react';
import { FormattedMessage } from 'react-intl';

function Header() {
  return (
    <div>
      <FormattedMessage
        id="app.header"
        defaultMessage="This is a Default Header"
      />
    </div>
  );
}

export default Header;
