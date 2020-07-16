import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';

function Details({match, details}) {
  useRouteMatch('/product/:id');

  let {id} = match.params;

  return (
    <div className="m-4 list">
      <div className="flex flex-col">
        <h3 className="text-center">ID prodotto: {id}</h3>
        <Link className="self-end" to="/">
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
}

export default Details;
