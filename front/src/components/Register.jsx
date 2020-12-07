import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

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

  return (
    <div style={estilos}>
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
        <Button type='submit' style={{ alignSelf: "center" }} variant="contained">Register</Button>

      </form>

    </div>
  )
}
