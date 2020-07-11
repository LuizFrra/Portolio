import React from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formDiv: {
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
  contact: {
    fontSize: 40,
    fontWeight: 600,
    fontStyle: 'italic',
  },
  textFieldInput: {
    color: '#FFFFFF',
  },
  textField: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 24
    }
  },
  formInputs: {
    marginTop: 60,
    [theme.breakpoints.down('sm')]: {
      marginTop: 36
    }  
  },
  message: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: 'white'
    },
    marginTop: 24
  },
  button: {
    marginTop: 16,
    marginRight: '4%',
    [theme.breakpoints.down('sm')]: {
      marginRight: '17%'
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '0%'
    }
  }
}));

export default function Form() {
  const classes = useStyles();

  return (
    <div className={classes.formDiv}>
      <form name="contact" method="POST" data-netlify="true">
        <Container>
          <Grid container direction="column" alignItems="center">
            <div className={classes.contact}>Contact</div>
            <div className={classes.line}></div>
          </Grid>
          <Grid className={classes.formInputs} container direction="column">
            <Grid item container direction="row" justify="space-around">
              <Grid item md={5} sm={8} xs={12}>
                <TextField
                  InputProps={{
                    className: classes.textFieldInput
                  }}
                  className={classes.textField}
                  label="Nome"
                  name="nome"
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      color: 'white'
                    }
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={5} sm={8} xs={12}>
                <TextField
                  InputProps={{
                    className: classes.textFieldInput
                  }}
                  className={classes.textField}
                  label="Email"
                  name="email"
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      color: 'white'
                    }
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item container justify="space-around">
              <Grid item sm={8} md={11} xs={12}>
                <TextField
                  rows={4}
                  multiline
                  InputProps={{
                    className: classes.textFieldInput
                  }}
                  className={classes.message}
                  label="Message"
                  name="message"
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      color: 'white'
                    }
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item container direction="row" justify="flex-end" alignItems="flex-end">
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
    </div>
  )
}