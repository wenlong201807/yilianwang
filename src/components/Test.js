import '../styles/Test.less';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addNumAC } from '../store/actions.js';

function mapStateToProps(state) {
  return {
    Num: state.Num,
    InitUsers: state.Users
  };
}

function mapDispatchToProps(dispatch, setState) {
  return {
    //region**全局加减法
    addNum: step => {
      dispatch(addNumAC(step));
    }
  };
}

class Test extends Component {
  render() {
    return (
      <div className="test">
        <h1>我是Test组件页面的内容</h1>
        <button onClick={e => this.props.addNum(6)}>加上*step*</button>
        &nbsp;*****
        {this.props.Num}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
