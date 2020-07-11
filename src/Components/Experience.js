import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Star from '../imgs/Star.png';

const useStyles = makeStyles((theme) => ({
  experienceDiv: {
    display: 'inline-block',
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
  experience: {
    fontSize: 40,
    fontWeight: 600,
    fontStyle: 'italic',
  },
  starIcon: {
    color: '#FFFFFF',
    display: 'inline-block',
    height: 27,
    width: 24
  },
  TimelineContent: {
    backgroundColor: '#272727',
    width: '650px'
  },
  TimelineSeparator: {
    borderStyle: 'solid',
    height: 160,
    color: '#FFFFFF',
    borderWidth: '0px 0px 0px 2px',
    marginTop: 8,
    width: 2,
    marginLeft: 7,
    display: 'inline-block'
  },
  timelineDate: {
    fontSize: 20,
    fontWeight: 600,
    fontStyle: 'italic',
    marginLeft: 24,
    display: 'inline-block'
  },
  timeline: {
    marginTop: 88
  },
  TimelineTextAbout: {
    verticalAlign: 'top',
    display: 'inline-block',
    marginLeft: 54,
    [theme.breakpoints.down(610)]: {
      width: 360, 
    },
    [theme.breakpoints.down(480)]: {
      width: 220,
    },
  },
  enterpriseName: {
    fontSize: 20,
    fontWeight: 600,
    fontStyle: 'italic',
    [theme.breakpoints.down(361)]: {
      fontSize: 16
    },
  },
  enterpriseLogo: {
    marginTop: 40,
    [theme.breakpoints.down(361)]: {
      marginTop: 24
    },
  },
  timelineMargin: {
    paddingLeft: '30%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '25%'
    },
    [theme.breakpoints.down(640)]: {
      paddingLeft: '0%'
    },
  },
  skills: {
    marginTop: 80
  },
  skill: {
    maxHeight: 50,
    [theme.breakpoints.down('sm')]: {
      marginTop: 32,
      maxHeight: 100
    }
  }
}));

export default function Experience({experiences, skills}) {

  const classes = useStyles();

  var experiencesRendered = experiences.map((value, index) => {
    return (
      <Grid className={classes.timeline} key={index}>
        <div id="title">
          <div className={classes.starIcon}>
            <img src={Star} alt="Current job" />
          </div>
          <div className={classes.timelineDate}>
            {value.dateWork}
        </div>
        </div>
        <div id="content">
          <div>
            <div className={classes.TimelineSeparator}></div>
            <div className={classes.TimelineTextAbout}>
              <div className={classes.enterpriseName}>- {value.enterpriseAndJob}</div>
              <Grid container justify="center" className={classes.enterpriseLogo}>
                <img src={value.logo} alt="Synchro Logo" />
              </Grid>
            </div>
          </div>
        </div>
      </Grid>)
  });

  var skillsRendered = [];

  for(var skill in skills) {
    skillsRendered.push(
      <Grid className={classes.skill} key={skill} container item sm={12} md={2} justify="center">
        <img src={skills[skill]} alt="skill" />
      </Grid>
    );
  }

  return (
    <div className={classes.experienceDiv}>
      <Container>
        <Grid container direction="column" alignItems="center" justify="center">
          <div className={classes.experience}>Experience</div>
          <div className={classes.line}></div>
        </Grid>
        <Grid container className={classes.timelineMargin} direction="column" alignItems="flex-start">
          {experiencesRendered}
        </Grid>
        <Grid className={classes.skills} container direction="row" justify="space-around">
          {skillsRendered}
        </Grid>
      </Container>
    </div>
  );
}