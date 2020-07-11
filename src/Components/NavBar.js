import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Hidden } from '@material-ui/core';
import logo from '../imgs/Logo.svg';
import MyTab from './Tabs';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    background: '#272727'
  }
}));

export default function NavBar({option, selectedOptionChanged, id, tabsOptions}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  return (
    <div className={classes.root} id={id}>
      <AppBar  elevation={4}>
        <Container>
          <Toolbar>
            <img src={logo} alt="LuizFrra"/>
            <div className={classes.root}></div>
            <Hidden smDown>
              <MyTab selectedOption={option} selectedOptionChanged={selectedOptionChanged} tabsOptions={tabsOptions} />
            </Hidden>
            <Hidden mdUp implementation='css'>
              <IconButton color='secondary' onClick={handleClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                classes={{ paper: classes.paper}}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MyTab orientation={'vertical'} selectedOption={option} selectedOptionChanged={selectedOptionChanged} tabsOptions={tabsOptions} />
              </Menu>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}