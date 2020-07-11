import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Hidden } from '@material-ui/core';
import logo from '../imgs/Logo.svg';
import MyTab from './Tabs';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

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
}));

export default function NavBar({option, selectedOptionChanged, id}) {
  const classes = useStyles();
  return (
    <div className={classes.root} id={id}>
      <AppBar  elevation={4}>
        <Container>
          <Toolbar>
            <img src={logo} alt="LuizFrra"/>
            <div className={classes.root}></div>
            <Hidden smDown>
              <MyTab selectedOption={option} selectedOptionChanged={selectedOptionChanged} tabsOptions={['Contact', 'Experience', 'About']} />
            </Hidden>
            <Hidden mdUp implementation='css'>
              <IconButton color='secondary'>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}