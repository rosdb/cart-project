import React from "react";

function Header({title}) {
  return (
    <div className="grid grid-cols-12">
      <div className="grid col-start-1 col-end-13 bg-gray-800 text-white">
        <span className="col-start-1 col-end-2 text-center">Logo</span>
        <h1 className="col-start-2 col-end-12 text-6xl text-center">
          {title}
        </h1>
        <span className="col-start-12 col-end-13 text-center">Cart</span>
      </div>
    </div>
  );
}

export default Header;
