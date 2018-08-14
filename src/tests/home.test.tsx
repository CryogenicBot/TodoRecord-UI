import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from '../components/home';
import { HomeProps } from '../components/home-state';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props:HomeProps = {
    onClick: () => {}
  }
  ReactDOM.render(<Home {...props}/>, div);
});
