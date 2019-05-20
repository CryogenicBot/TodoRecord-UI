import * as React from 'react';

// import * as styles from './dashboard-item.css';
import { Button, Card, Elevation, HTMLTable } from "@blueprintjs/core";
import { Column, Table, Cell, ICellRenderer } from "@blueprintjs/table";
import * as _ from 'lodash';
import API from '../general/api';

interface ItemProps {
  title: string;
  data: any[];
}

interface ItemState {
  data: {
    thumbnail: string,
    title: string,
    day: Date,
    runTime: number
  }[];
}

const moviesResponse =
  [
    {
      "timeSinceRecordCreated": "2018-08-13T00:53:26.877863",
      "recordApiKey": "245891"
    },
    {
      "timeSinceRecordCreated": "2019-01-10T00:58:54.677666",
      "recordApiKey": "562"
    }
  ];


class DashboardItem extends React.Component<ItemProps, {}> {
  constructor(props: ItemProps) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let modifiedData: ItemState = { data: [] };
    this.props.data.forEach(item => {
      API.get('https://api.themoviedb.org/3/movie/' + item.recordApiKey, {
        params: {
          api_key: '935c8a4dce7a7bc6fcd1ddcc37257332'
        }
      }).then((response) => {
        modifiedData.data.push({
          thumbnail: 'https://image.tmdb.org/t/p/w92/' + response.data.poster_path,
          title: response.data.original_title,
          day: new Date(item.timeSinceRecordCreated),
          runTime: response.data.runtime
        });
        this.setState(() => modifiedData);
      })
    });
  }

  render() {
    const { title } = this.props as ItemProps;
    const { data } = this.state as ItemState;
    if (data.length > 0 && Object.keys(data[0]).length > 0) {
      return <div>
        <h1>{title}</h1>
        <Card interactive={false} elevation={Elevation.TWO}>
          <HTMLTable interactive={true} bordered={true}>
            <thead>
              <tr>
                {Object.keys(data[0]).map(header => <th>{_.startCase(header)}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map(row => <tr>
                {Object.values(row).map(rowVal => <td>
                  {rowVal.toString().startsWith('http') ? <img src={rowVal.toString()}/> : rowVal.toString()}
                </td>)}
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