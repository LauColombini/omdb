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
  console.log(state);
  return {
    isLoggin: state.pepe,
  };
};



function App(props) {
  const isLoggin = props.isLoggin.id
  console.log('HOLAAA', isLoggin)
  return (
    <div style={backgroundasa}>
      <Switch>
        <React.Fragment>
          {isLoggin ?
            <React.Fragment>
              <Route exact path="/movies" component={MoviesSearchContainer} />
              <Route exact path="/movies/:id" component={MovieContainer} />
              <Route exact path="/navbar" component={Navbar} />
              <Redirect from="/" to="/movies" />
            </React.Fragment>
            :
            <React.Fragment>
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/register" component={RegisterContainer} />
              <Route excat path='/movies' component={noestaslogeado} />
              <Route excat path='/navbar' component={noestaslogeado} />
            </React.Fragment>
          }
        </React.Fragment>
      </Switch>


    </div>
  );
}
export default connect(mapStateToProps, null)(App);