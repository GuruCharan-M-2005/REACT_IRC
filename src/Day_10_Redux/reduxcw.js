import React, { useState, useEffect } from 'react';

const reduxcw = () => {
  const [message, setMessage] = useState("Hello dear one, learning React...?");

  useEffect(() => {
    console.log('useEffect hook called');

    setTimeout(() => {
      setMessage("Great.... This is time to learn about HOOKS");
    }, 2000);

    // Specify an empty dependency array to run the effect only once
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default reduxcw;