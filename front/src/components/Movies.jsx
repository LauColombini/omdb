import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from '../containers/NavbarContainer'
import BackgroundImg from '../../../back/public/img/fondooo.png'
///ESTILOS IMPORTADOS
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 444,
    margin: 30,
    minWidth: 444,
  },
  media: {
    height: 300,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export default ({ movies }) => {
  const classes = useStyles();
  const estilos = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundImage: `url(${BackgroundImg})`,
  };
  const estiloText = {
    color: "black",
    fontWeight: "900",
    
  };
  return (
    <div>
      <NavbarContainer
      />
    
      <div style={estilos}>
        {movies &&
          movies.map((movie) => {
            return (
              <Card key={movie.imdbID} className={classes.root}>
                <Link to={`/movies/${movie.imdbID}`}> 
                  <CardMedia
                    className={classes.media}
                    image={movie.Poster}
                    title="Lil Bricio"
                  />
                </Link>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <span style={estiloText}>Title:</span> {movie.Title} <br />
                    <span style={estiloText}>Year:</span> {movie.Year}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  
                </CardActions>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

// <div key={movie.imdbID}>
// <img src={movie.Poster}/> <br/>
// Titulo: <span>{movie.Title}</span> <br/>
// A;o: <span>{movie.Year}</span>

// </div>
