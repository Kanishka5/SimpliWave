import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function MenuAppBar() {
  const host = process.env.REACT_APP_HOST;
  const classes = useStyles();
  const [auth, setAuth] = React.useState(
    localStorage.getItem("Id") ? true : false
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const dashboard = () => {
    if (localStorage.getItem("type") == "student")
      this.props.history.push("/stddashboard");
    else this.props.history.push("/cltdashboard");
    setAnchorEl(null);
  };
  const logout = () => {
    Axios.post(`${host}/logout`);
    localStorage.clear();
    this.props.history.push("/");
    setAuth(false);
  };

  function handleMenu(event) {
    setAnchorEl();
    console.log("hendle menu");
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const user = JSON.parse(localStorage.getItem("userinfo"));
  //   console.log(user);
  let button = [];
  if (!localStorage.getItem("Id")) {
    button.push(
      <div>
        <a href='/login'>Login</a>
      </div>
    );
  } else {
    button.push(
      <div>
        <a onClick={logout}>logout</a>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Dashboard
          </Typography>
          {button}
          {/* <Button onClick={handleChange}>{auth ? "Logout" : "Login"}</Button> */}
          {auth && (
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={dashboard}>{user.name}</MenuItem>
                <MenuItem onClick={logout}>{logout}</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
