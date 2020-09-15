import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        count: state.count + 1,
      };
    }
    case "MINUS": {
      return {
        count: state.count - 1,
      };
    }
    case "MULTIPLY": {
      return {
        count: state.count * action.payload.number,
      };
    }
    case "DIVIDE": {
      return {
        count: state.count / action.payload.number,
      };
    }
  }
};
const initialState = {
  count: 0,
};

function Counter1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({
            type: "ADD",
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "MINUS",
          });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "MULTIPLY",
            payload: {
              number: 2,
            },
          });
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "DIVIDE",
            payload: {
              number: 2,
            },
          });
        }}
      >
        /
      </button>
    </>
  );
}

function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({
            type: "ADD",
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "MINUS",
          });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "MULTIPLY",
            payload: {
              number: 2,
            },
          });
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "DIVIDE",
            payload: {
              number: 2,
            },
          });
        }}
      >
        /
      </button>
    </>
  );
}

export default () => (
  <>
    <Counter1 />
    <Counter2 />
  </>
);
