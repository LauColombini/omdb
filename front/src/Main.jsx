import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MoviesSearchContainer from "./containers/MoviesSearchContainer";
import LoginContainer from "./containers/LoginContainer";
import MovieContainer from "./containers/MovieContainer";
import Navbar from "./components/Navbar";
import backgroundFondo from "../../back/public/img/fondooo.png";
import RegisterContainer from "./containers/RegisterContainer";
import FavoritesContainer from './containers/FavoritesContainer'
import { connect } from "react-redux";
import noestaslogeado from './components/noestaslogeado'

const backgroundasa = {
  backgroundImage: `url(${backgroundFondo})`,
};

const mapStateToProps = (state) => {
  console.log(state.pepe);
  return {
    isLoggin: state.pepe,
  };
};



function App(props) {
  return (
    <div style={backgroundasa}>
      <Switch>
        
          <React.Fragment>
            <div>
              <Route exact path="/movies" component={MoviesSearchContainer} />
              <Route path="/movies/:id" component={MovieContainer} />
              <Route path="/navbar" component={Navbar} />
             
            </div>
          </React.Fragment>
        
          <React.Fragment>
            <div>
              <Route excat path='/movies'component={noestaslogeado}/>
              <Route excat path='/navbar'component={noestaslogeado}/>
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/register" component={RegisterContainer} />
            </div>
          </React.Fragment>
      

      </Switch>

        <Redirect from="/" to="/movies" />
    </div>
  );
}
export default connect(mapStateToProps, null)(App);
/*
function App(props) {
  return (
    <div >
      <Switch>
        <React.Fragment>
          <Route exact path="/movies" component={MoviesSearchContainer} />
          <Route path="/movies/:id" component={MovieContainer} />
          <Route path="/navbar" component={Navbar} />
          <Route path='/favorites' component={FavoritesContainer}/>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
        </React.Fragment>

        <Redirect from="/" to="/movies" />
      </Switch>
    </div>
  );
}
*/

