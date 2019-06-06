import React from "react";

import ReduxButton from "./ReduxButton";
import HelloMessage from "./HelloMessage";

export default class Global extends React.Component {
  render() {
    return (
      <div>
        <HelloMessage />
        <ReduxButton />
      </div>
    );
  }
}
