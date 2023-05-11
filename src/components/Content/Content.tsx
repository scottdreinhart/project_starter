import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';

import ContactForm from '../ContactForm/ContactForm';

import './Content.scss';

function Content() {
  return (
    <div className="content">
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
      <ContactForm />
    </div>
  );
}

export default Content;
