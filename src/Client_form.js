import React from "react";
import Navbar from "./component/navbar";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { withRouter } from "react-router-dom";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};
const host = process.env.REACT_APP_HOST;
const style = {
  box: {
    width: window.innerWidth > breakpoints.tablet ? "60vw" : "80vw",
    margin: window.innerWidth > breakpoints.tablet ? "5vh 20vw" : "5vh 10vw",
    background: "white",
    borderRadius: 5,
    overflow: "hidden",
    boxShadow: "rgb(125, 125, 152) -6px 5px 12px 4px"
  },
  text: {
    marginTop: "15vh",
    textAlign: "center",
    fontSize: "1.5em",
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

const domains = [
  {
    value: 1,
    label: "WD"
  }
];

const ClientForm = withRouter(({ history }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    duration: "",
    salary: "",
    description: "",
    domains: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    const user = JSON.parse(localStorage.getItem("userinfo"));
    console.log(user);
    const token = localStorage.getItem("jwttoken");
    axios({
      method: "post",
      url: `${host}/client/project/`,
      data: {
        client: user.id,
        name: values.name,
        domain: 1,
        package: 1,
        weeks: values.duration,
        description: values.description,
        detailsFile: null
      },
      headers: {
        Authorization: `token ${token}`
      }
    });
    history.push("/cltdashboard");

    event.preventDefault();
  };

  return (
    <div>
      <Navbar name='Dashboard' />
      <h1 style={style.text}>New Project</h1>
      <div style={style.box}>
        <form className={classes.container} noValidate autoComplete='off'>
          <TextField
            id='outlined-name'
            label='Name'
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-duration'
            label='Duration'
            value={values.duration}
            onChange={handleChange("duration")}
            type='number'
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-multiline-flexible'
            label='Description'
            multiline
            // rowsMax='5'
            value={values.description}
            onChange={handleChange("description")}
            className={classes.textField}
            margin='normal'
            variant='outlined'
          />
          <div
            style={{
              display: "flex",
              marginLeft: 8,
              alignItems: "center"
            }}
          >
            <p>
              Deatils:{" "}
              <FontAwesomeIcon
                icon={faPlusCircle}
                style={{ fontSize: "1rem" }}
              />{" "}
            </p>
          </div>
          <TextField
            id='outlined-select-currency'
            select
            label='Domain'
            className={classes.textField}
            value={values.domain}
            onChange={handleChange("domain")}
            SelectProps={{
              MenuProps: {
                className: classes.domain
              }
            }}
            helperText='Please select the domain of project'
            margin='normal'
            variant='outlined'
          >
            {domains.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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

export default ClientForm;
