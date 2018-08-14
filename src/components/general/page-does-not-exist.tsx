import * as React from 'react';
const NoPage = require('../../imgs/404.gif');
import '../../styles/general/page-gifs.css';

function ErrorPage() {
  return <img src={NoPage} alt="" className="full-page-gifs" />;
}

export default ErrorPage;
