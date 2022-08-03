import React, { useState } from 'react';

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
    const [filterText, setFilterText] = useState('');

    return (
        <AppContext.Provider value={{ filterText, setFilterText }}>
            {children}
        </AppContext.Provider>
    );
};
