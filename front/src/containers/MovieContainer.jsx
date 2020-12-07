import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";
import { fetchMovie } from "../action-creators/movie";
import {
  addFavorites,
  fetchFavorites,
  deleteFavorite,
} from "../action-creators/favorites";

const mapStateToProps = (state) => {
  return {
    movie: state.movie.movie,
    user: state.userLog.id,
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    fetchMovie: (id) => dispatch(fetchMovie(id)),
  };
};

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.addFavorite = this.addFavorite.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  addFavorite(data) {
    addFavorites(data);
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <Movie movie={this.props.movie} addFav={this.addFavorite} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
