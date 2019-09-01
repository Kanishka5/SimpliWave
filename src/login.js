import React from "react";
import Navbar from "./component/navbar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};
const host = process.env.REACT_APP_HOST;
const style = {
  box: {
    width: window.innerWidth > breakpoints.tablet ? "30vw" : "80vw",
    margin: window.innerWidth > breakpoints.tablet ? "5vh 35vw" : "5vh 10vw",
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

const Login = withRouter(({ history }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    todashboard: false,
    loading: false
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    setValues({ ...values, loading: true });
    axios({
      method: "post",
      url: `${host}/login`,
      data: {
        username: values.email,
        password: values.password
      }
    })
      .then(response => {
        console.log(response.data);
        let tokenStr = response.data.token;
        localStorage.setItem("jwttoken", tokenStr);
        localStorage.setItem("Id", response.data.userId);
        axios
          .get(`${host}/student/user/${response.data.userId}`)
          .then(() => {
            console.log("i am student");
            localStorage.setItem("type", "student");
            axios
              .get(
                `http://localhost:8000/student/profile/?userid=${localStorage.getItem(
                  "Id"
                )}`
              )
              .then(json => {
                localStorage.setItem("userinfo", JSON.stringify(json.data[0]));
                history.push("/stddashboard");
              });
          })
          .catch(() => {
            console.log("i am client");
            localStorage.setItem("type", "client");
            axios({
              method: "get",
              url: `http://localhost:8000/client/profile/?userid=${localStorage.getItem(
                "Id"
              )}`,
              headers: {
                Authorization: `token ${localStorage.getItem("jwttoken")}`
              }
            }).then(json => {
              localStorage.setItem("userinfo", JSON.stringify(json.data[0]));
              history.push("/cltdashboard");
            });
          });
      })
      .catch(error => {
        console.error(error);
      });

    event.preventDefault();
  };

  let login = [];
  if (values.loading) {
    login.push(
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader type='ThreeDots' color='red' height={80} width={80} />
      </div>
    );
  } else {
    login.push(
      <Button
        variant='contained'
        color='secondary'
        type='submit'
        className={classes.button}
        onClick={handleSubmit}
      >
        Login
      </Button>
    );
  }

  return (
    <div>
      <Navbar />
      <h1 style={style.text}>Login</h1>
      <div style={style.box}>
        <form className={classes.container} noValidate autoComplete='off'>
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
          {login}
        </form>
        <p style={{ paddingLeft: "4vw" }}>
          Don't have an account?<a href='/stdsignup'>Signup</a>
        </p>
        {/* <div style={{ display: "flex" }}>
          <Button
            variant='contained'
            color='primary'
            style={{ margin: "3vh 4vw", marginTop: 0 }}
          >
            <Link
              to='/cltsignup'
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Client SignUp
            </Link>
          </Button>

          <Button
            variant='contained'
            color='primary'
            style={{ margin: "3vh 0", marginTop: 0 }}
          >
            <Link
              to='/stdsignup'
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Student SignUp
            </Link>
          </Button>
        </div> */}
      </div>
    </div>
  );
});

export default Login;
