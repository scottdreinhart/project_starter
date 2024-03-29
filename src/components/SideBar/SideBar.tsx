import React from 'react';
import { FormattedMessage } from 'react-intl';

import './SideBar.scss';

function SideBar() {
  return (
    <div className="sideBar">
      SideBar
      <FormattedMessage
        id="app.header"
        defaultMessage="This is a Default Header"
      />
    </div>
  );
}

export default SideBar;
