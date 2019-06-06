// Action
export const UPDATE_GREETING = "UPDATE_GREETING";
export const RESET_GREETING = "RESET_GREETING";
export const INIT_GREETING = "INIT_GREETING";
export const UPD_INPUT_STYLE = "UPD_INPUT_STYLE";

// Action creator
export function updateGreeting(greeting) {
  return {
    type: UPDATE_GREETING,
    greeting
  };
}

export function updateInputStyle(inputStyle) {
  return {
    type: UPD_INPUT_STYLE,
    inputStyle
  };
}

export function resetGreeting() {
  return {
    type: RESET_GREETING
  };
}

export function initGreeting() {
  return {
    type: INIT_GREETING
  };
}
