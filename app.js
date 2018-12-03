const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  counter: 0,
  actionType: ""
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT_COUNTER") {
    // console.log("increment action");

    return {
      ...state,
      counter: state.counter + 1,
      actionType: action.actionType
    };
  }

  if (action.type === "DECREMENT_COUNTER") {
    return {
      ...state,
      counter: state.counter - 1,
      actionType: action.actionType
    };
  }
};

const store = createStore(rootReducer);

store.dispatch({ type: "INCREMENT_COUNTER", actionType: "increment" });
console.log(store.getState());

store.dispatch({ type: "DECREMENT_COUNTER", actionType: "decrement" });
console.log(store.getState());
