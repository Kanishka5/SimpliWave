import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Home, AccountBox, AccountCircle} from '@material-ui/icons';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
const SideDrawer = (props) => {
    const classes = useStyles();

    return (
        <Drawer open={props.show} onClose={props.close}>
            <div
                className={classes.list}
                role="presentation"
                onClick={props.close}
                onKeyDown={props.close}
            >
                <List>
                    <ListItem button onClick={() => props.linkClick('/')}>
                        <ListItemIcon><Home/></ListItemIcon>
                        <ListItemText primary={'Home'}/>
                    </ListItem>
                    <Divider/>
                    <ListItem button onClick={() => props.linkClick('/stdsignup')}>
                        <ListItemIcon><AccountBox/></ListItemIcon>
                        <ListItemText primary={'Student Sign-Up'}/>
                    </ListItem>
                    <Divider/>
                    <ListItem button onClick={() => props.linkClick('/cltsignup')}>
                        <ListItemIcon><AccountBox/></ListItemIcon>
                        <ListItemText primary={'Client Sign-Up'}/>
                    </ListItem>
                    <Divider/>
                    <ListItem button onClick={() => props.linkClick('/login')}>
                        <ListItemIcon><AccountCircle/></ListItemIcon>
                        <ListItemText primary={'Log In'}/>
                    </ListItem>
                    <Divider/>
                </List>
            </div>
        </Drawer>
    );
};

export default SideDrawer;