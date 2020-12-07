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

export default function BasicTextFields() {
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
    border: 'none',
    textDecoration: 'none'
  }
  return (
    
    <div style={estilos}>
      <h1 style={{color:'red'}}>NO TE HAGAS EL LOCO, NO ESTAS LOGEADO</h1>

      <Link style={estiloo} to='/login'>
         <h3>Si queres logearte, hace click</h3>
      </Link>
      <Link style={estiloo} to='/register'>
       <h3>Si queres registrarte, hace click</h3>
      </Link>   
      
      
      

    </div>
  )
}