import React, { createContext, useReducer, useContext } from 'react';

import initialData from './fake_data';

const AppContext = createContext();
const AppDispatch = createContext();

const AppContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialData);

  return (
    <AppContext.Provider value={data}>
      <AppDispatch.Provider value={dispatch}>{children}</AppDispatch.Provider>
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const data = useContext(AppContext);
  if (data === undefined)
    throw new Error('useAppContext must be used inside of AppContextProvider');
  return data;
};

const useAppDispatch = () => {
  const dispatch = useContext(AppDispatch);
  if (dispatch === undefined)
    throw new Error('useAppDispatch must be used inside of AppContextProvider');
  return dispatch;
};

const REVERSE = 'REVERSE';
const SET_OPTION = 'SET_OPTION';
const RESET_OPTIONS = 'RESET_OPTIONS';

const reducer = (state, action) => {
  switch (action.type) {
    case REVERSE: {
      return state;
    }
    case SET_OPTION: {
      return state;
    }
    case RESET_OPTIONS: {
      return state;
    }
    default:
      return state;
  }
};

const reverse = () => ({ type: REVERSE });

const setOption = id => option => ({ type: SET_OPTION, id, option });

const resetOptions = () => ({ type: RESET_OPTIONS });

export {
  AppContextProvider,
  useAppContext,
  useAppDispatch,
  reverse,
  setOption,
  resetOptions
};
