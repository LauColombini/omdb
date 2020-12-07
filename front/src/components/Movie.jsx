import React from "react";
import NavbarContainer from "../containers/NavbarContainer";

import Background from "../../../back/public/img/fondo2.png";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 444,
    minWidth: 444,
    position: "absolute",    
    marginTop: 50,
    marginLeft: 680
  },
  media: {
    height: 444,
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

export default ({ movie, addFav }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const estilosSpan = {
    fontFamily: "Staatliches , cursive",
    fontWeight: 780,
  };

  const titleStyle = {
    fontFamily: "Staatliches , cursive",
    fontWeight: 780,
    textAlign: "center",
    color: "#fff",
    textShadow: "3px 0 0 #000, 0 -1px 0 #000, 0 3px 0 #000, -1px 0 0 #000",
  };
  const papiStyle = {};
  const navbarstyle = {
    backgroundImage: `url(${Background})`,
  };
  console.log(movie);
  return (
    <div>
      <NavbarContainer style={navbarstyle} />
      <div style={papiStyle}>
        <Card className={classes.root}>
          <h1 style={titleStyle}>{movie.Title}</h1>
          <CardMedia
            className={classes.media}
            image={movie.Poster}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {movie.Plot} <br /> <br />
              <span style={estilosSpan}>Genre: </span>
              {movie.Genre}
              <br />
              <span style={estilosSpan}>Director: </span>
              {movie.Director}
              <br />
              <span style={estilosSpan}>Released: </span>
              {movie.Released}
              <br />
              <span style={estilosSpan}>Production: </span>
              {movie.Production}
              <br />
              <span style={estilosSpan}>Language: </span>
              {movie.Language}
              <br />
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon
                onClick={() =>
                  addFav({ title: movie.Title, poster: movie.Poster })
                }
              />
            </IconButton>
            <span style={estilosSpan}>See more...</span>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <span style={estilosSpan}>Runtime: </span>
                {movie.Runtime} <br />
                <span style={estilosSpan}>Writer: </span>
                {movie.Writer} <br />
                <span style={estilosSpan}>BricioRating: </span>
                {movie.imdbRating} <br />
                <span style={estilosSpan}>Metascore: </span>
                {movie.Metascore} <br />
                <span style={estilosSpan}>Country: </span>
                {movie.Country} <br />
                <span style={estilosSpan}>BoxOffice: </span>
                {movie.BoxOffice} <br />
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
};
