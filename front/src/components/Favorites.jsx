import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from '../containers/NavbarContainer'

export default ({ movies }) => {
  
  return (
    <div>
      <NavbarContainer/>
        <p>hola</p>
      {/* <div>
        {movies &&
          movies.map((movie) => {
            return (
              <p>hola</p>
            );
          })}
      </div> */}
    </div>
  );
};