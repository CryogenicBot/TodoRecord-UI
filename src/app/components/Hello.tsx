import * as React from 'react';
import API from '../Api';

import { Button, Intent, Spinner } from "@blueprintjs/core";

import * as styles from './Hello.css';

export class Hello extends React.Component<{}, {}> {

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    API.get('users')
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return <div>
      <h1>hello world</h1>
      <form className="input-form" onSubmit={this.handleSubmit}>
        <input className={styles.submitButton} type="submit" value="Submit" />
        <Button icon="refresh" intent={Intent.PRIMARY}/>
      </form>
    </div>

  }
}