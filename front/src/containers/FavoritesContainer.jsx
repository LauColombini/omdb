import React from "react";
import { connect } from "react-redux";
import Favorites from "../components/Favorites";
import { addFavorites,fetchFavorites,deleteFavorite } from "../action-creators/favorites";

const mapStateToProps = (state) => {
  return {
    
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    
  };
};
class FavoritesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
   
  }
 
  render() {
    return (
      <div>
        <Favorites/>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
