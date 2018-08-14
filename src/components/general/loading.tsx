import * as React from 'react';
// const LoadingGif = require('../../imgs/loading.gif');
import { LoadingComponentProps } from 'react-loadable';
import '../../styles/general/page-gifs.css';

class LoadingComponent extends React.Component<LoadingComponentProps> {
  render() {
    return (
      <div>
        {this.props.error}
        {this.props.isLoading}
        {this.props.pastDelay}
        {this.props.timedOut}
      </div>
    );
  }
}

export default LoadingComponent;
