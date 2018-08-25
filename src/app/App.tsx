import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRoot from '../app/components/app-root'
declare let module: any

ReactDOM.render(<AppRoot />,
  document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}