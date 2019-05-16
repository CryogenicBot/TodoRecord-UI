import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, AnyAction } from 'redux';
import Loadable from 'react-loadable';

import Login from './login/login';
import Loading from './general/loading/loading';
import rootReducer from '../state-management/reducers/app-reducer';
import AuthWrapper from './auth-wrapper/auth-wrapper';
import Dashboard from './dashboard/dashboard';

export interface AppState {
  userId: number
};

const initialState: AppState = {
  userId: -1
};

const store = createStore<AppState, AnyAction, null, null>(rootReducer, initialState);

const PageDoesNotExist = Loadable({
  loader: () => import('./general/404/page-does-not-exist'),
  loading: Loading
});

class AppRoot extends Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="bp3-dark">
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/login" component={Login} />
              <Route path="/home" component={AuthWrapper(Dashboard, {})} />
              <Route component={PageDoesNotExist} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default AppRoot;
