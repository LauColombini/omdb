import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'





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
  const estiloo={
    color: 'grey',
    border: 'none'
  }
  return (
    
    <div style={estilos}>
      <h1>Bienvenido a The Burger Machine</h1>
      <h3>Para ver nuestras peliculas, tendras que loggearte, si no tienes una cuenta, puedes hacerte una pagando una cuota mensual de unos $300usd</h3>
      <h5>Wallet de BitCoin: 1DxjY2wBApsUpAywjKxx37XMTbcJYiqKa6</h5>
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
      <Link style={estiloo} to='/register'>
        <h6>nah mentira, hacete una cuenta haciendo click aki</h6>
      </Link>
      

    </div>
  )
}