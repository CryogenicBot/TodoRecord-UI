import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRoot from '../app/components/app-root'

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

declare let module: any

ReactDOM.render(<AppRoot />,
  document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}