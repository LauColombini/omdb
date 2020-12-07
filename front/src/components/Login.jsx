import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'





const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields({
  handleSubmit,
  handleChangePassword,
  handleChangeEmail,
}) {

  const classes = useStyles();

  const estilos = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };
  const estiloo = {
    color: 'grey',
    border: 'none'
  }
  return (

    <div style={estilos}>
      <h1>Welcome to The Burger Machine</h1>
      <h3>To see our movies, you will have to log in.</h3>
      <Link to='/register'>
        <h4 style={estiloo}>If you don't have an account, you can create one by clicking here</h4>
      </Link>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleChangeEmail}
          id="outlined-basic"
          label="User/Email"
          variant="outlined"
        />
        <TextField
          onChange={handleChangePassword}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="Password"
        />
        <Button type='submit' style={{ alignSelf: "center" }} variant="contained">Login</Button>

      </form>



    </div>
  )
}