import * as React from 'react';
import {connect} from 'react-redux';
import {Characters} from '../components/Characters';

interface Props {
  pages: string[];
}

export const App = function () {
  return (
    <div>
      Hello from App container
      <Characters/>
    </div>
  );
};

function mapStateToProps(state: Props) {
  return {
    pages: state.pages,
  };
}

export default connect(
  mapStateToProps
)(App);
