import React from 'react';

function Header({title}) {
  return (
    <div className="header">
      <div className="bg-gray-800 text-white">
        <h1 className="text-6xl text-center">{title}</h1>
      </div>
    </div>
  );
}

export default Header;
