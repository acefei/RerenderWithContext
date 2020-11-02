import { useReducer } from "react";

const setStateHelper = (prevState, nextState) => {
  return JSON.stringify(prevState) === JSON.stringify(nextState)
    ? prevState
    : nextState;
};

const initState = 0;

const actions = {
  SET_DATA_SOURCE: "SDS"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_DATA_SOURCE:
      return setStateHelper(state, action.data);
    default:
      return state;
  }
};

const useDataSourceReducer = () => {
  const [dataSource, dispatch] = useReducer(reducer, initState);

  const setDataSource = (data) => {
    dispatch({ type: actions.SET_DATA_SOURCE, data });
  };

  return {
    dataSource,
    setDataSource
  };
};

export default useDataSourceReducer;
