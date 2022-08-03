import React, { useReducer } from 'react';
import { initialState, appReducer } from '../reudx/reducer';

export const AppReducerContext = React.createContext();

export const AppReducerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppReducerContext.Provider value={{ state, dispatch }}>
            {children}
        </AppReducerContext.Provider>
    );
};
