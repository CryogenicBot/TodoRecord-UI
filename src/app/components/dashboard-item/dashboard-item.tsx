import * as React from 'react';

import * as styles from './dashboard-item.css';
import { Button, Card, Elevation, HTMLTable } from "@blueprintjs/core";
import { Column, Table, Cell, ICellRenderer } from "@blueprintjs/table";
import API from '../general/api';

interface ItemProps {
  title: String;
  data: object[];
}

interface ItemState {

}

const moviesResponse =
  [
    {
      title: "John Wick",
      itema: "blah",
      itemb: 24,
      itemc: "cvxx"
    },
    {
      title: "Die Hard",
      itema: "blah",
      itemb: 24,
      itemc: "cvxx"
    }
  ];


class DashboardItem extends React.Component<ItemProps, {}> {
  constructor(props: ItemProps) {
    super(props);
  }

  componentWillMount() {
    // make api call
    this.setState(() => {

    });
  }

  rowMapper = (row: object) => {
    row
  }

  render() {
    const { title, data } = this.props as ItemProps;
    if (data.length > 0 && Object.keys(data[0]).length > 0) {
      return <div>
        <h1>{title}</h1>
        <Card interactive={false} elevation={Elevation.TWO}>
          <HTMLTable interactive={true} bordered={true}>
            <thead>
              <tr>
                {Object.keys(data[0]).map(header => <th>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map(row => <tr>
                {Object.values(row).map(rowVal => <td>{rowVal}</td>)}
              </tr>)}
            </tbody>
          </HTMLTable>
        </Card>
      </div>
    }
    return <div>
      <h1>No {title} recorded.</h1>
    </div>
  }
}

export const MoviesItem = () => {
  return <DashboardItem title="Movies" data={moviesResponse} />
}

export const GamesItem = () => {
  return <DashboardItem title="Games" data={[]} />
}

export const ShowsItem = () => {
  return <DashboardItem title="Shows" data={[]} />
}

export const BooksItem = () => {
  return <DashboardItem title="Books" data={[]} />
}