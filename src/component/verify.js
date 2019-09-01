import React from "react";
import Navbar from "./navbar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withRouter } from "react-router-dom";

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

const Verify = withRouter(({ history }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    code: "",
    codeValid: true
  });
  console.log(history);

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
      color: "black"
    },
    errorCode: {
      display: values.codeValid ? "none" : "block",
      color: "red"
    }
  };

  const handleSubmit = () => {
    axios({
      method: "post",
      url: `${host}/${localStorage.getItem("type")}/verify/`,
      auth: {
        username: history.location.state.email,
        password: history.location.state.password
      },
      data: {
        code: values.code
      }
    }).then(() => {
      console.log("verified");
      history.push("/login");
    });
  };

  const handleChange = event => {
    setValues({ ...values, code: event.target.value });
  };

  return (
    <div>
      <Navbar />
      <h1 style={style.text}>Enter the validation code sent to your email:</h1>
      <div style={style.box}>
        <form className={classes.container} noValidate autoComplete='off'>
          <TextField
            id='outlined-number'
            label='code'
            value={values.code}
            onChange={handleChange}
            type='number'
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin='normal'
            variant='outlined'
          />
          <h1 style={style.errorCode}>Invalid code</h1>
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
});

export default Verify;
