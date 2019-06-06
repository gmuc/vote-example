import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "./actions";

// Wie werden Actions zu Properties?
class ReduxButton extends React.Component {
  render() {
    const { updateInputStyle } = this.props;

    return (
      <div>
        <button
          onClick={() => {
            updateInputStyle("lightgrey");
          }}
        >
          reduxButton2
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(ReduxButton);
