import React from "react";
import { connect } from "react-redux";
import Navbar from '../components/Navbar'
import {fetchMovies} from '../action-creators/movies'
import {userLogOut} from '../action-creators/logOut'

console.log(userLogOut)

const mapStateToProps = (state) => { 
  return {
    movie: state.movie
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    fetchMovies: (str) => dispatch(fetchMovies(str)),
    userLogOut: ()=>dispatch(userLogOut())
  };
};

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchMovies(this.state.input);
    console.log('funciono')
  }
  handleChange(e) {
    const valor = e.target.value;
    this.setState({
      input: valor,
    });
    console.log('funciono')
  }


  logOut(){
    this.props.userLogOut()
  }

  render() {
    return (
      <div>
        <Navbar   
          logOut={this.logOut}       
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
