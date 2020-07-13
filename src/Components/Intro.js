import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
    height: "100%",
    width: "100%"
  }
}));  

const partcilesParams = {
  particles: {
    number: {
      value: 60,
        density: {
          enable: true,
          value_area: 1500
        }
    },
    line_linked: {
      enable: true,
      opacity: 0.02
    },
    move: {
      direction: "right",
      speed: 0.05
    },
    size: {
      value: 1
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05
      }
    }
  },
  interactivity: {
    events: {
      onresize: {
        enable: true,
        density_auto: true
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      push: {
        particles_nb: 1
      }
    }
  },
  retina_detect: true
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
          <picture>
            <source className={classes.myImage} srcset={require('../imgs/Me/Me.webp')} type="image/webp"/>
            <source className={classes.myImage} srcset={require('../imgs/Me/Me.jp2')} type="image/jp2"/>
            <img className={classes.myImage} srcset={require('../imgs/Me/Me.png')} alt="Me" />
          </picture>
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