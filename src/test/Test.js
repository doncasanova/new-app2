import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as exampleAction  from '../actions/actions.js';


class Test extends Component {

  render() {
      return (
          <div>
              <h1>This is in the Test.js!</h1>
              <p>Here is our property: {this.props.examplePropOne}</p>
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
export default connect(mapStateToProps, mapDispatchToProps) (Test);


