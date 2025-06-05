import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Error!!!</h1>
        <p>ooops!!!</p>
        <p>Something went wrong</p>
    </div>
  )
}

export default Error;