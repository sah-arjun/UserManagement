import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

import { APP_TITLE, API_HOST, FIELD_EMPTY } from '../settings';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.doAuth = this.doAuth.bind(this);
  }

  get canAttemptLogin() {
    const { username, password } = this.state;
    return (
      username.length === 0
      || password.length === 0
    );
  }

  // Extracting into local methods because calling an anonymous function like this ( () => {} ) within the render method will create a new method
  // each time the component is rendered, which is a small performance hit.
  handleOnChangeUsername = e => this.setState({ username: e.target.value })

  handleOnChangePassword = e => this.setState({ password: e.target.value })

  doAuth() {
    const { username, password } = this.state;

    fetch(`${API_HOST}settings`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${window.btoa(`${username}:${password}`)}`,
      },
    })
      .then(response => response.json())
      .then((response) => {
        if (response.name_id) {
          console.log(`Welcome ${username} (${response.name})`);
        }
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">{APP_TITLE}</Typography>
            <form className={classes.form}>
              <FormControl margin="normal" fullWidth>
                <TextField
                  id="username"
                  label="Username"
                  required
                  onChange={this.handleOnChangeUsername}
                  autoFocus
                  helperText={username === '' ? FIELD_EMPTY : ''}
                  error={username === ''}
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  required
                  helperText={password === '' ? FIELD_EMPTY : ''}
                  error={password === ''}
                  type="password"
                  id="password"
                  label="Password"
                  onChange={this.handleOnChangePassword}
                />
              </FormControl>
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                onClick={this.doAuth}
                disabled={this.canAttemptLogin}
              >
              Sign in
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Login);
