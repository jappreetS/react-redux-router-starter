import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { simpleAction } from './../../actions/simpleAction';


class Root extends Component {
  testAction = () => {
    this.props.actions.simpleAction();
  }
  render() {
    const { simpleReducer } = this.props;
    return (
      <React.Fragment>
        <h1>React Redux with React-Router Starter</h1><hr />
        <h2>React with Redux</h2>
        <button type="button" onClick={this.testAction}>Test Redux Action</button>
        <pre>
          {JSON.stringify(simpleReducer)}
        </pre>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  simpleReducer: state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    simpleAction,
  }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Root);