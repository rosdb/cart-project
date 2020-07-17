import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';

function Details({match, details}) {
  useRouteMatch('/product/:id');

  let {id} = match.params;

  return (
    <div className="m-4 list">
      <div className="flex flex-col">
        <Link className="" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <g transform="translate(0, 0)">
              <path
                fill="#444444"
                d="M1.293,15.293L11,5.586L12.414,7l-8,8H31v2H4.414l8,8L11,26.414l-9.707-9.707 C0.902,16.316,0.902,15.684,1.293,15.293z"
              ></path>
            </g>
          </svg>
          <span>Back</span>
        </Link>
        <h3 className="text-center h-screen">ID prodotto: {id}</h3>
      </div>
    </div>
  );
}

export default Details;
