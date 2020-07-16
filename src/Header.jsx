import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

function Header({title, cartItemCount}) {
  return (
    <div className="header">
      <div className="bg-gray-800 text-white flex justify-between">
        <span className="icon-box">
          <Link to="/">
            <svg
              className={
                title === 'Product details' ? 'icon m-4' : 'icon m-4 hidden'
              }
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
            >
              <g transform="translate(0, 0)">
                <path
                  d="M29.646,12.236l-13-11a1,1,0,0,0-1.292,0l-13,11A1,1,0,0,0,2,13V30a1,1,0,0,0,1,1h9V21h8V31h9a1,1,0,0,0,1-1V13A1,1,0,0,0,29.646,12.236Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          </Link>
        </span>
        <h1 className="text-6xl text-center">{title}</h1>
        <div className="icon-box">
          <svg
            className="icon m-4"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <g transform="translate(0, 0)">
              <circle
                data-color="color-2"
                cx="8"
                cy="29"
                r="3"
                fill="#ffffff"
              ></circle>
              <circle
                data-color="color-2"
                cx="27"
                cy="29"
                r="3"
                fill="#ffffff"
              ></circle>
              <path
                d="M27,23H7a1.5,1.5,0,0,1-1.492-1.351L3.643,3H0V0H5A1.5,1.5,0,0,1,6.492,1.351L6.957,6H30.5a1.5,1.5,0,0,1,1.455,1.864l-3.5,14A1.5,1.5,0,0,1,27,23Z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
          <span className={cartItemCount > 0 ? 'notification' : 'hidden'}>
            {cartItemCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
