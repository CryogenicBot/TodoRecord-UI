import * as React from 'react';

import * as styles from './dashboard.css';
import { MoviesItem, GamesItem, ShowsItem, BooksItem } from '../dashboard-item/dashboard-item';

class Dashboard extends React.Component<{}, {}> {
  render() {
    return <div className={styles.container}>
      <div className={styles.item}>
        <MoviesItem />
      </div>
      <div className={styles.item}>
        <GamesItem />
      </div>
      <div className={styles.item}>
        <ShowsItem />
      </div>
      <div className={styles.item}>
        <BooksItem />
      </div>
    </div>
  }
}

export default Dashboard;