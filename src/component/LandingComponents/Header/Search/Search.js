import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        padding: '2px 4px',
        margin: '0 8px',
        display: 'flex',
        alignItems: 'center',
        width: '300px',
        height: '90%',
        backgroundColor: 'rgba(0,0,0,0.61)'
    },
    input: {
        color: 'white',
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        color: 'white',
        padding: 10,
    },
});

const Search = props => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search SimpliWave"
                inputProps={{ 'aria-label': 'Search Google Maps' }}
            />
            <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default Search;