import React from "react";
import Navbar from "./component/navbar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withRouter } from "react-router-dom";

const style = {
  box: {
    width: "60vw",
    margin: "5vh 20vw",
    background: "white",
    borderRadius: 5,
    overflow: "hidden",
    boxShadow: "rgb(125, 125, 152) -6px 5px 12px 4px"
  },
  text: {
    marginTop: "15vh",
    textAlign: "center",
    Fontsize: "1.8rem",
    letterspacing: "0.1rem",
    color: "#ffffff"
  }
};

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: "5% 10%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    width: "25%",
    marginTop: "8%",
    marginLeft: "34.5%"
  }
}));

const SignupClt = withRouter(({ history }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    name: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    const name = values.name.split(" ");
    axios({
      method: "post",
      url: "http://localhost:8000/student/user/",
      data: {
        first_name: name[0],
        last_name: name[1] ? name[1] : "",
        email: values.email,
        password: values.password
      }
    }).then(() => {
      history.push("/login");
    });
    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <h1 style={style.text}>Signup</h1>
      <div style={style.box}>
        <form className={classes.container} noValidate autoComplete='off'>
          <TextField
            id='outlined-name'
            label='name'
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-name'
            label='email'
            className={classes.textField}
            value={values.email}
            onChange={handleChange("email")}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-duration'
            label='password'
            value={values.password}
            onChange={handleChange("password")}
            type='password'
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin='normal'
            variant='outlined'
          />
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            onClick={handleSubmit}
          >
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
});

export default SignupClt;
