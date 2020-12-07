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

export default function BasicTextFields() {
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
    border: 'none',
    textDecoration: 'none'
  }
  return (

    <div style={estilos}>
      <h1 style={{ color: 'red' }}>You are not logged in!</h1>

      <Link style={estiloo} to='/login'>
        <h3>Login here!</h3>
      </Link>
      <Link style={estiloo} to='/register'>
        <h3>If you don't have an account, you can create one by clicking here</h3>
      </Link>




    </div>
  )
}