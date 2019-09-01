import React from 'react';
import './Package.css';
import Zoom from '../../../../UI/Zoom/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    }
}));

const Package = props => {
    const classes = useStyles();

    return (
        <div className={'PackageContainer'}>
            <Zoom duration={'500'} trigger={'onEnter'}>
                <div className={'Package'}>
                    <div className={'PackageHeader'}><h2>{props.name}</h2></div>
                    <div style={{height: '1px', backgroundColor: 'gray'}}/>
                    <div className={'PackagePrice'}>
                        <h2>${props.price}</h2>
                        <p>/project or<br/>/internship</p>
                    </div>
                    <p className={'PackageDescription'}>{props.description}</p>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Purchase
                    </Button>
                </div>
            </Zoom>
        </div>
    );
};

export default Package;