import React from "react";
import { connect } from "react-redux";
import Movies from "../components/Movies";
import { fetchMovies } from "../action-creators/movies";

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    fetchMovies: (str) => dispatch(fetchMovies(str)),
  };
};
class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
   
  }
 
  render() {
    return (
      <div>
        <Movies
          movies={this.props.movies}          
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
