import React from "react";
import Navbar from "./component/navbar";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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

const domains = [
  {
    value: 1,
    label: "WD"
  }
];

const ClientForm = () => {
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
    console.log("Name: " + values.domains);
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/client/project/",
      data: {
        client: 1,
        name: values.name,
        weeks: values.duration,
        amount: values.salary,
        description: values.description,
        domain: values.domains,
        package: 1,
        detailsFile: null,
        status: "Active"
        // "client": null,
        // "name": "",
        // "domain": null,
        // "package": null,
        // "weeks": null,
        // "description": "",
        // "detailsFile": null,
        // "status": null
      }
    });

    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
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
            id='outlined-salary'
            label='Salary'
            value={values.salary}
            onChange={handleChange("salary")}
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
};

export default ClientForm;
