import React, { useReducer } from 'react';
import { initialState, appReducer } from '../reudx/reducer';

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
