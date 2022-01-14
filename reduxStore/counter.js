import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = (value = 1) => {
  return { //obje
    type: INCREMENT,
    payload: value
  }
}

export const decrement = (value = 1) => ({
  type: DECREMENT,
  payload: value
})

const counterReducer = (counter= 0 , action) => {
  switch(action.type) {
    case INCREMENT:
      return counter + action.payload;
    case DECREMENT:
      return counter - action.payload;
    default:
      return counter;
  }
}

export default reducer;