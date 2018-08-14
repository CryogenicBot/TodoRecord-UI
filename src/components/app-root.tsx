import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Loadable from 'react-loadable';

import HomeStore from './home-state';
import Loading from './general/loading';
import rootReducer from '../reducers/root-reducer';

const initialState = 0;
const store = createStore(rootReducer, initialState);

const PageDoesNotExist = Loadable({
  loader: () => import('./general/page-does-not-exist'),
  loading: Loading
});

class AppRoot extends Component {
  constructor() {
    super({}, {});
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeStore} />
            <Route component={PageDoesNotExist} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppRoot;
