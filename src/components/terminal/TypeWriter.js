import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = ({ strings, loop = true, delay = 50, deleteSpeed = 30 }) => (
  <Typewriter
    options={{
      strings,
      autoStart: true,
      loop,
      delay,
      deleteSpeed,
    }}
  />
);

TypeWriter.displayName = 'TypeWriter';
export default TypeWriter;
