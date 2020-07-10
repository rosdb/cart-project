import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import Header from './Header';

function Details({match, details}) {
  useRouteMatch('/product/:id');

  let {id} = match.params;

  console.log('Details', details);

  return (
    <>
      <Header title="Product details" />
      <h3 className="text-center">ID prodotto: {id}</h3>
    </>
  );
}

export default Details;
