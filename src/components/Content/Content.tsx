import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';

function Content() {
  return (
    <>
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
    </>
  );
}

export default Content;
