import React from 'react';

const HelloWorld = () => {
  
  function sayHello2() {
    alert('Hello, swetasrirrrr!');
  }
  
  return (
    <button onClick={sayHello2}>Click me!</button>
  );
};

export default HelloWorld;