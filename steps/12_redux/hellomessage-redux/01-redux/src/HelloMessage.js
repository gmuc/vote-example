import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "./actions";

class HelloMessage extends React.Component {
  render() {
    const { greeting, inputStyle, updateGreeting, resetGreeting } = this.props;

    return (
      <div>
        <input
          style={{ backgroundColor: inputStyle }}
          onChange={event => updateGreeting(event.target.value)}
          value={greeting}
        />
        <p>
          Hello, {greeting}, {inputStyle}
        </p>
        <button onClick={() => resetGreeting()}>Clear</button>
      </div>
    );
  }

  componentWillMount() {
    console.log("componentWillMount ==> greeting:" + this.props.greeting);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate ==> greeting:" + this.props.greeting);
    console.log("nextProps:", nextProps, " nextState:", nextState);
    return true;
  }
}

function mapStateToProps(state) {
  return {
    greeting: state.greeting,
    inputStyle: state.inputStyle
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloMessage);
