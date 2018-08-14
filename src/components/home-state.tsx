import { connect } from 'react-redux';
import Home from './home';

export interface HomeProps {
  onClick: Function;
}

function mapStateToProps(state: Number) {
  console.log(state);
  return {
    counter: state
  };
}

function mapDispatchToProps(dispatch: Function) {
  let props: HomeProps = {
    onClick: () => {
      dispatch({ type: 'INCREMENT' });
    }
  };
  return props;
}

const HomeStore = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeStore;
