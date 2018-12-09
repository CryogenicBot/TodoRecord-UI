import * as React from 'react';
import { InputGroup, Button, Label, Icon, Intent, Popover, PopoverInteractionKind } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { loginUser } from '../../state-management/actions';
import API from '../general/api';

import * as styles from './login.css';
import { AppState } from '../app-root';
import { Location } from 'history';

interface LoginState {
  isPasswordRevealed: boolean;
  email: string;
  password: string;
  loginInProgress: boolean;
}

interface LoginProps {
  userId: number;
  loginUser: Function;
  location: Location;
  isAuthenticated: boolean;
}

class Login extends React.Component<LoginProps, LoginState> {

  constructor(props: LoginProps) {
    super(props);

    this.state = {
      isPasswordRevealed: false,
      email: "",
      password: "",
      loginInProgress: false
    };
  }

  toggleRevealPassword = () => {
    this.setState({
      isPasswordRevealed: !this.state.isPasswordRevealed
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({
      loginInProgress: true
    });

    API.post('users/login', {
      'email': this.state.email,
      'password': this.state.password
    }).then(res => {
      this.props.loginUser(res.data.contents);
      this.setState({
        loginInProgress: false
      });
    })
      .catch(err => {
        console.error(err);
        // TODO: ERROR HANDLING
        this.setState({
          loginInProgress: false
        });
      });
  };

  handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      email: event.currentTarget.value
    });
  }

  handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      password: event.currentTarget.value
    });
  }

  render = () => {
    let lockIcon = <Icon icon={this.state.isPasswordRevealed ? IconNames.UNLOCK : IconNames.LOCK} />
    let lockButton = <Button
      minimal={true}
      intent={Intent.WARNING}
      icon={lockIcon}
      onClick={this.toggleRevealPassword} />;
    let popoverButton = <Popover
      popoverClassName="bp3-popover-content-sizing"
      className={styles.popover}
      content={this.state.isPasswordRevealed ? "Hide password" : "Show password"}
      target={lockButton} interactionKind={PopoverInteractionKind.HOVER}
      hoverOpenDelay={0}
      hoverCloseDelay={0} />

    if (this.props.isAuthenticated) {
      console.log(this.props.location);
      return <Redirect to={this.props.location.state.referrer} />
    } else {
      return <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div>
            <Label>
              Email
          <InputGroup onChange={this.handleEmailChange}
                value={this.state.email} />
            </Label>
          </div>
          <div>
            <Label>
              Password
          <InputGroup type={this.state.isPasswordRevealed ? "text" : "password"}
                rightElement={popoverButton}
                onChange={this.handlePasswordChange}
                value={this.state.password} />
            </Label>
          </div>
          <div className={styles.buttonContainer}>
            <Button intent={Intent.PRIMARY}
              icon={IconNames.LOG_IN}
              type="submit"
              loading={this.state.loginInProgress}>
              Login
          </Button>
          </div>
        </form>
      </div>
    }
  }

}

function mapStateToProps(state: AppState) {
  return {
    isAuthenticated: state.userId >= 0
  }
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    loginUser: (userId: number) => dispatch(loginUser(userId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);