import React, { useReducer, createContext, useContext } from 'react';
import * as actions from '../actions/actionTypes';

const AppStateContext = createContext(null);

export const useAppStateContext = () => useContext(AppStateContext);

const initialState = {
  loginUserName: '',
  searchText: '',
  results: []
};

function reducer(state, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESSFUL:
      return {
        ...state,
        loginUserName: action.userName
      };
    case actions.SEARCH_PLANET:
      return {
        ...state,
        searchText: action.searchText
      };
    case actions.SEARCH_RESULTS:
      return {
        ...state,
        results: action.results
      };
    default:
      return state;
  }
}

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>;
}
