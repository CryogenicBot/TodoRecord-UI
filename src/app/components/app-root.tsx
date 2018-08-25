import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Loadable from 'react-loadable';
import { Hello } from './Hello';

import Loading from './general/loading/loading';
import rootReducer from './app-reducer';

export interface AppState {};

const initialState: AppState = {};

const store = createStore<AppState, any, any, any>(rootReducer, initialState);

const PageDoesNotExist = Loadable({
  loader: () => import('./general/404/page-does-not-exist'),
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
            <Route exact={true} path="/" component={() => <Hello />}/>
            {/* <Route exact={true} path="/main" component={() => <Main monthList={monthList} />}/> */}
            <Route component={PageDoesNotExist} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppRoot;
