import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';
import * as styles from './loading.css';

const LoadingGif = require('../../../../imgs/loading.svg');

class LoadingComponent extends React.Component<LoadingComponentProps> {
  render() {
    return (
      <div className={styles.background}>
        <img src={LoadingGif} className={styles.fullPageGifs}/>
      </div>
    );
  }
}

export default LoadingComponent;
