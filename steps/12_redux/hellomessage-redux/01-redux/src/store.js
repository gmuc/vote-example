import { createStore, combineReducers } from "redux";

import {
  UPDATE_GREETING,
  RESET_GREETING,
  INIT_GREETING,
  UPD_INPUT_STYLE
} from "./actions";

function greetingReducer(state = "aaa", action) {
  switch (action.type) {
    case UPDATE_GREETING:
      return action.greeting;
    case UPD_INPUT_STYLE:
      console.log(
        "==> greetingReducer state:",
        state,
        "action.inputStyle:",
        action.inputStyle
      );

      let value = "";
      if (state == "lightblue") {
        value = "lightgrey";
      } else {
        value = "lightblue";
      }
      return value;
    case RESET_GREETING:
      return "";
    case INIT_GREETING:
      return "==> init";
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    greeting: greetingReducer,
    inputStyle: greetingReducer
  }),
  {
    greeting: "a1111",
    inputStyle: "lightblue"
  }
);

export default store;
