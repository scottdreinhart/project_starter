import React, { useState, useEffect } from 'react';

type DisplayCounterType = {
  counter: number;
};

function DisplayCounter(props: DisplayCounterType) {
  const { counter } = props;

  return <h1>{counter}</h1>;
}

function ContactForm() {
  const [name, setName] = useState('Scott');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('here');
    // make API call
  }, [counter]);

  return (
    <div className="contact-form">
      <DisplayCounter counter={counter} />
      <input
        type="button"
        onClick={() => setCounter((n) => n + 1)}
        value="Click Me"
      />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
  );
}

export default ContactForm;
