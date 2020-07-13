import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  divAbout: {
    display:'inline-block',
    backgroundColor: '#272727',
    width: '100%',
    color: '#FFFFFF',
    paddingBottom: 134
  },
  line: {
    width: 200,
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 24
  },
  about: {
    fontSize: 40,
    fontWeight: 600,
    fontStyle: 'italic',
  },
  aboutContent: {
    marginTop: 72
  },
  aboutTexts: {
    width: 280,
    fontSize: 16,
    marginRight: 134,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    },
  },
  aboutText: {
    marginTop: 16,
  },
  greenText: {
    color: '#E5F67A',
    display: 'inline'
  },
  aboutImage: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 64,
      height: 240
    },
  }
}));

export default function About({id}) {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:960px)');
  var alignItems = 'stretch';
  var direction = 'row';
  
  if(matches) {
    alignItems = 'center';
    direction = 'column-reverse';
  }
  return (
    <div className={classes.divAbout} id={id}>
      <Container>
        <Grid container direction="column" alignItems="center" justify="center">
          <div className={classes.about}>About</div>
          <div className={classes.line}></div>
        </Grid>
        <div className={classes.aboutContent}>
          <Grid wrap="nowrap" container justify="center" alignItems={alignItems} direction={direction}>
            <Grid className={classes.aboutTexts} item container direction="column">
              <div>&emsp;&emsp;Hi i’m Luiz from Brazil, I love learn new things and <p className={classes.greenText}>technologies</p>, I am constantly researching and learning related things.</div>
              <div className={classes.aboutText}>&emsp;&emsp;
                Currently, I’m studying computer enginner at Federal University of Paraiba, I’m also a intern at Synchro, working with 
                <p className={classes.greenText}> ReactJS, Spring Framework</p> and <p className={classes.greenText}>SAP HANA.</p>
              </div>
              <div className={classes.aboutText}>&emsp;&emsp;While I’m still relatively new to <p className={classes.greenText}>UI/UX</p> designs, it has been pretty interesting learning experience.</div>
              <div className={classes.aboutText}>&emsp;&emsp;
                When I’m not working I like listen <p className={classes.greenText}>songs</p>(I do this while working too) , watch <p className={classes.greenText}>TV Shows</p> and <p className={classes.greenText}>hangout</p> with friends. 
              </div>
            </Grid>
            <Grid>
              <picture >
                <source className={classes.aboutImage} srcset={require('../imgs/aboutImage/aboutImage.webp')} type="image/webp"/>
                <source className={classes.aboutImage} srcset={require('../imgs/aboutImage/aboutImage.jp2')} type="image/jp2"/>
                <img className={classes.aboutImage} src={require('../imgs/aboutImage/aboutImage.png')}  alt="About"/>
              </picture>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}