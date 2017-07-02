import * as React from 'react';
import {connect} from 'react-redux';

interface Props {
  pages: string[];
}

export const App = function () {
  return (
    <div>
      Hello from App container
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
