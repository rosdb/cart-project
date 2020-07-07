import React from "react";
import { useRouteMatch } from "react-router-dom";
import Header from "./Header";

function Details({match}) {
  useRouteMatch('/product/:id');

  let {id} = match.params;
  
  return (
    <>
      <Header title="Product details"/>
      <h3>Dettaglio: {id}</h3>
    </>
  );
}

export default Details;