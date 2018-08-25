import * as React from 'react';
import * as styles from './page-does-not-exist.css';

const NoPage = require('../../../../imgs/404.gif');

class ErrorPage extends React.Component {
  render() {
    return <img src={NoPage} alt="" className={styles.fullPageGifs} />;
  }
}

export default ErrorPage;
