import React from 'react';
import './SignupForm.css';
import {TextField, Button, makeStyles} from "@material-ui/core";
import RadioButton from "../../../../UI/RadioButton/RadioButton";
import axios from "../../../../../axios";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column",
        padding: "5% 5%"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const SignupForm = withRouter(({ history }) => {
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const [type, setType] = React.useState({formType: 'student'});

    const radioChange = event => {
        setType({formType: event.target.value});
    };
    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value });
    };

    const classes = useStyles();

    const handleSubmit = event => {
        const name = values.name.split(" ");
        axios({
            method: "post",
            url: `${type.formType}/user/`,
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
        <div className={'SignupForm'}>
            <div className={'SignUpType'}>
                <RadioButton
                    label={'Student'}
                    value={'student'}
                    checked={type.formType === 'student'}
                    onChange={radioChange}/>
                <RadioButton
                    label={'Client'}
                    value={'client'}
                    checked={type.formType === 'client'}
                    onChange={radioChange}/>
            </div>
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        value={values.email}
                        onChange={handleChange('email')}
                        type="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        value={values.password}
                        onChange={handleChange('password')}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    <div className={'PasswordGuide'}>Make sure it's at least 8 characters including a number and a letter.</div>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
                        Sign Up for SimpliWave
                    </Button>
                    <div className={'SignUpGuide'}>By clicking “Sign up for SimpliWave”, you agree to our <span style={{color: '#4350cc'}}>Terms of Service and Privacy Statement</span>. We’ll occasionally send you account related emails.</div>
                </form>
            </div>
        </div>
    );
});

export default SignupForm;