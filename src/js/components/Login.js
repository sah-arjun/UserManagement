import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  errorStyle: { color: 'rgb(242, 101, 50)' },
  field: { marginBottom: '12px' },
  fieldLast: { marginBottom: '24px' },
  fieldFocus: { borderColor: 'rgb(242, 101, 50)' },
  loginButtonBg: 'rgb(242, 101, 50)',
  loginButtonLabel: '#fafafa',
  loginWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  loginWrapInner: {
    display: 'flex',
    flexDirection: 'column',
  },
  noStyle: {},
  title: { fontSize: '1.5em', color: 'rgb(242, 101, 50)', textAlign: 'center' },
};

const urlForGithubUser = username => `/api/${username}`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubData: [],
    };
  }

  componentDidMount() {
    fetch(urlForGithubUser('sah-arjun'), {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

    })
      .then(response => response.json())
      .then((response) => {
        this.setState({
          githubData: response,
        });
      });
  }

  render() {
    const { classes } = this.props;
    const userData = this.state;
    return (
      <div className={classes.loginWrap}>
        <div className={classes.loginWrapInner}>
          <TextField
            id="user"
            value={userData.githubData.login}
            className={classes.field}
            helperText="Github Username"
          />
          <TextField
            id="name"
            value={userData.githubData.name}
            className={classes.fieldLast}
            helperText="Github Full Name"
          />
          <Button variant="contained" color="primary">
            Login
          </Button>

        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Login);
