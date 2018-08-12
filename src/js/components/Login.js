import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Arjun',
    };
  }

  render() {
    const { classes } = this.props;
    const newValue = this.state;
    return (
      <div className={classes.loginWrap}>
        <div className={classes.loginWrapInner}>
          <TextField
            id="user"
            label="Username"
            value={newValue.user}
            className={classes.field}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            className={classes.fieldLast}
          />
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Login);
