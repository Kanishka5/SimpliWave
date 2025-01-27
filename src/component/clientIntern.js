import React from "react";
import Navbar from "./navbar";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
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
    Fontsize: "2rem" + " !important",
    letterSpacing: "0.1rem",
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
  timeField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
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

const stipendType = [
  {
    value: 1,
    label: "Weekly"
  },
  {
    value: 2,
    label: "Monthly"
  }
];

const ClientIntern = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    domain: "",
    duration: "",
    stipend: "",
    About: "",
    SkillsRqd: "",
    resp: "",
    people: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    console.log("Name: " + values.name);
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/client/internship/",
      data: {
        name: values.name,
        domain: values.domain,
        duration: values.duration,
        stipend: values.stipend,
        About: values.About,
        SkillsRqd: values.SkillsRqd,
        resp: values.resp,
        people: values.people
      }
    });
    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <h1 style={style.text}>New Internship</h1>
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
            id='outlined-name'
            label='Domain'
            className={classes.textField}
            value={values.name}
            onChange={handleChange("domain")}
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
            label='Stipend'
            value={values.stipend}
            onChange={handleChange("stipend")}
            type='number'
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin='normal'
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>Rs.</InputAdornment>
              )
            }}
          />
          <TextField
            id='outlined-select-currency'
            select
            label='Stipend Type'
            className={classes.textField}
            value={values.stipendType}
            onChange={handleChange("stipendType")}
            SelectProps={{
              MenuProps: {
                className: classes.stipendType
              }
            }}
            helperText='Please select the stipend type of project'
            margin='normal'
            variant='outlined'
          >
            {stipendType.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id='outlined-date'
            label='Apply before'
            type='date'
            defaultValue='2019-05-24'
            className={classes.timeField}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id='outlined-multiline-flexible'
            label='About'
            multiline
            value={values.About}
            onChange={handleChange("About")}
            className={classes.textField}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-multiline-flexible'
            label='Skills Required'
            multiline
            rowsMax='5'
            value={values.SkillsRqd}
            onChange={handleChange("SkillsRqd")}
            className={classes.textField}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-name'
            label='Responsibility'
            className={classes.textField}
            value={values.resp}
            onChange={handleChange("resp")}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-duration'
            label='Numner of People'
            value={values.people}
            onChange={handleChange("people")}
            type='number'
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
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ClientIntern;
