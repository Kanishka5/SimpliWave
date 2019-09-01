import React from "react";
import Navbar from "./component/navbar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { StylesContext } from "@material-ui/styles/StylesProvider";

const host = process.env.REACT_APP_HOST;
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

const SignupStd = withRouter(({ history }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    formErrors: { email: "", password: "", password2: "" },
    emailValid: false,
    passwordValid: false,
    confirmValid: false,
    formValid: false
  });

  const breakpoints = {
    desktop: 1040,
    tablet: 840,
    mobile: 540
  };

  const style = {
    box: {
      width: window.innerWidth > breakpoints.tablet ? "60vw" : "90vw",
      margin: window.innerWidth > breakpoints.tablet ? "5vh 20vw" : "5vh 5vw",
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
    },
    errorEmail: {
      display: values.formErrors.email == "" ? "none" : "block",
      color: "red"
    },
    errorPass: {
      display: values.formErrors.password == "" ? "none" : "block",
      color: "red"
    },
    errorPass2: {
      display: values.formErrors.password2 == "" ? "none" : "block",
      color: "red"
    }
  };

  const handleSubmit = event => {
    const name = values.name.split(" ");
    localStorage.setItem("type", "student");
    axios({
      method: "post",
      url: `${host}/client/user/`,
      data: {
        first_name: name[0],
        last_name: name[1] ? name[1] : "",
        email: values.email,
        password: values.password
      }
    }).then(() => {
      console.log("sign up");
      history.push("/login");
    });

    event.preventDefault();
  };

  const validateField = (fieldName, value) => {
    console.log("in validate");
    let fieldValidationErrors = values.formErrors;
    let emailValid = values.emailValid;
    let passwordValid = values.passwordValid;
    let confirmPassword = values.confirmValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "Invalid email";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      case "password2":
        confirmPassword = value == values.password;
        fieldValidationErrors.password2 = confirmPassword
          ? ""
          : "password donot match";

      default:
        break;
    }
    setValues(
      {
        ...values,
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        confirmValid: confirmPassword
      },
      validateForm()
    );
  };

  const validateForm = () => {
    setValues({
      ...values,
      formValid:
        values.emailValid && values.passwordValid && values.confirmValid
    });
  };

  const handleChange = name => event => {
    setValues(
      { ...values, [name]: event.target.value },
      validateField(name, event.target.value)
    );

    console.log(values.formErrors);
    console.log("change");
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
          <h1 style={style.errorEmail}>{values.formErrors.email}</h1>
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
          <h1 style={style.errorPass}>{values.formErrors.password}</h1>
          <TextField
            id='outlined-duration'
            label='password2'
            value={values.password2}
            onChange={handleChange("password2")}
            type='password'
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin='normal'
            variant='outlined'
          />
          <h1 style={style.errorPass2}>{values.formErrors.password2}</h1>
          <Button
            variant='contained'
            color='secondary'
            type='submit'
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

export default withRouter(SignupStd);
