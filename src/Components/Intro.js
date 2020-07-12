import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Me from '../imgs/Me.png';
import { Particles } from 'react-particles-js';


const useStyles = makeStyles((theme) => ({
  divIntro: {
    height: '100vh',
    display:'inline-block',
    backgroundColor: '#272727',
    width: '100%',
    color: '#FFFFFF',
    [theme.breakpoints.up('sm')]: {
      height: '70vh'
    },
  },
  gridRoot: {
    marginTop: '10%',
  },
  gridTexts: {
    marginLeft: 48,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      textAlign: 'center'
    },
  },
  hiThere: {
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      marginTop: 16,
    },
  },
  name: {
    fontSize: 40,
    marginTop: 16,
    [theme.breakpoints.down('sm')]: {

    },
  },
  iCan: {
    fontSize: 16,
    color: "#737272",
    width: 240,
    marginTop: 16,
    [theme.breakpoints.down('sm')]: {
    },
  },
  line: {
    width: 200,
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 32
  },
  icon: {
    fontSize: 40,
    marginTop: 16
  },
  canvas: {
    position: 'absolute',
    height: "100vh",
    width: "95vw"
  }
}));  

const partcilesParams = {
  "particles": {
      "number": {
          "value": 20
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}

export default function Intro(props) {
  const classes = useStyles();
  var alignItems = 'stretch';
  var direction = 'row';


  function gitHubButton() {
    window.open(props.gitLink);
  }

  function linkedInButton() {
    window.open(props.linkedin);
  }

  const matches = useMediaQuery('(max-width:960px)');

  if(matches) {
    alignItems = 'center';
    direction = 'column';
  }

  return (
    <div className={classes.divIntro} id={props.id}>
      <Particles className={classes.canvas} params={partcilesParams} />
      <Grid className={classes.gridRoot} container direction={direction} alignItems={alignItems} justify="center">
        <Grid item>
          <img className={classes.myImage} src={Me} alt="Me"/>
        </Grid>
        <Grid item className={classes.gridTexts}>
          <div className={classes.hiThere}>Hi There, My name is</div>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.iCan}>I can developt a sistem for your business, increasing your productivity.</div>
          <Grid container justify="center">
            <div className={classes.line}></div>
          </Grid>
          <Grid container justify="center">
            <Button color="secondary" onClick={gitHubButton}>
              <GitHubIcon className={classes.icon} />
            </Button>
            <Button color="secondary" onClick={linkedInButton}>
              <LinkedInIcon className={classes.icon} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}