import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as exampleAction  from './actions/actions.js';
import Test from '././test/Test.js'

class App extends Component {

  render() {
      return (
          <div>
              <h1>Hello world, this is a Redux tutorial!</h1>
              <p>Here is our property: {this.props.examplePropOne}</p>
              <Test/>
          </div>
          )
  }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    
    return {
        examplePropOne: state.state.examplePropOne,
        examplePropTwo: state.state.examplePropTwo,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return bindActionCreators({ exampleAction }, dispatch);


}
export default connect(mapStateToProps, mapDispatchToProps) (App);


