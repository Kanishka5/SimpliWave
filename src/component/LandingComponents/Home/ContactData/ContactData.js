import React from 'react';
import './ContactData.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexFlow: 'column',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const ContactData = props => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div>
            <form className={`${classes.container} ContactData`} autoComplete="off">
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
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-subject"
                    label="Subject"
                    className={classes.textField}
                    value={values.subject}
                    onChange={handleChange('subject')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-message"
                    label="Message"
                    className={classes.textField}
                    value={values.message}
                    onChange={handleChange('message')}
                    margin="normal"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                />
                <div>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Send
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.button} onClick={props.canceled}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactData;