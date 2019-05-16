import * as React from 'react';
import { Route, Redirect } from 'react-router';

import { connect } from 'react-redux';
import { AppState } from '../app-root';

interface AuthenticatedProps {
  isAuthenticated: boolean
};

function AuthWrapper<P extends object>(Component: React.ComponentType<P>, props: P) {
  class AuthenticatedComponent extends React.Component<AuthenticatedProps, {}> {
    render() {
      const { isAuthenticated } = this.props as AuthenticatedProps;
      return <Route
        {...props}
        render={rProps =>
          isAuthenticated ? (
            <Component {...props as P} />
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { referrer: rProps.location }
                }}
              />
            )
        }
      />
    }
  }
  function mapStateToProps(state: AppState) {
    return {
      isAuthenticated: state.userId >= 0
    };
  }

  return connect(mapStateToProps, null)(AuthenticatedComponent);
}

export default AuthWrapper;