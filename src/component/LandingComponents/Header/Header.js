import React from 'react';
import './Header.css';
import { Tab, Tabs, withStyles } from '@material-ui/core';
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import DrawerToggler from "./DrawerToggler/DrawerToggler";

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        minWidth: 100,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&:focus': {
            opacity: 1,
        },
    },
}))(props => <Tab disableRipple {...props} />);

const Header = props => {
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <header className={'Header'}>
            <DrawerToggler toggle={props.menuToggle}/>
            <div className={'Logo'}>
                <Logo/>
            </div>
            <div className={'Right'}>
                <Search/>
                <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab label="Home" onClick={() => props.linkClick('/')}/>
                    <StyledTab label="Student Sign-up" onClick={() => props.linkClick('/stdsignup')}/>
                    <StyledTab label="Client Sign-up" onClick={() => props.linkClick('/cltsignup')}/>
                    <StyledTab label="Sign in" onClick={() => props.linkClick('/login')}/>
                </StyledTabs>
            </div>
        </header>
    );
};

export default Header;