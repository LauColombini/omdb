import React from "react";
import { Link } from "react-router-dom";
import Background from "../../../back/public/img/fondo2.png";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    
  },
  fullList: {
    width: "auto",
  },  
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))


export default ({ handleSubmit, handleChange, logOut }) => {
  const imgStyle = {
    width: 200,
    heigth: 62.5,
    marginLeft: 25,
  };
  console.log('asdasdasdasdas',Background)
  const fatherFlex = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "flex-start",
    
    backgroundColor: '#032B43',
    maxHeight: 115,
  };
  const divFather = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "flex-start",
  };
  const inputStyle = {
    marginRight: 15,
    height: 40,
    backgroundColor: "#BFC0C0",
    border: "none",
    borderRadius: "2%",
    borderRadius: "3%",
    fontSize: 17,
    fontFamily: "Henny Penny, cursive",
  };  
  const titleStyle = {
    fontFamily: "Henny Penny, cursive",
    fontSize: "2rem",
    textAlign: "center",
    color: "#fff",
    textShadow: "3px 0 0 #000, 0 -1px 0 #000, 0 3px 0 #000, -1px 0 0 #000",
  };
  const buttonUserStyle = {
    color: 'black',
    backgroundColor: "#E2A501",
  }
  const botonLogOut={
    color: "#707070",
    borderBottom: 'none'
  }
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div    
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Favoritos"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Log Out"].map((text, index) => (
          <Link to="/login">
          <ListItem style={botonLogOut} onClick={logOut} button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
 
  return (
    <div>
      <form style={fatherFlex} onSubmit={handleSubmit}>
        <Link to="/movies">
          <img
            style={imgStyle}
            src="https://i.pinimg.com/originals/3e/d4/cd/3ed4cd97923dea617d3cf7a7c8f46e09.png"
            alt=""
          />
        </Link>
        <h1 style={titleStyle}>THE BURGER MACHINE</h1>

        <div style={divFather}>
          <input
            placeholder="Search Movie..."
            style={inputStyle}
            onChange={handleChange}
          />        
        {/* /BOTON RE PIOLA QUE ESTA RE PIOLA Y ES RE PIOLA PORQUE ES PIOLA/ */}
        <div >
          {["User"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button style={buttonUserStyle} onClick={toggleDrawer(anchor, true)} variant="contained" color="primary" href="#contained-buttons">
              {anchor}
               </Button>
              {/* <Button  onClick={toggleDrawer(anchor, true)}>
                {anchor}
              </Button> */}
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        {/* //////////////////////////////////////////////////////////////// */}
        </div>
      </form>      
    </div>
  );
};
