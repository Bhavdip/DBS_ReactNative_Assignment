import React from 'react';
const AppContext = React.createContext({
    latestPostData: [],
    displayLoading: false,
    onReRender: () => {}
});
export default AppContext;
