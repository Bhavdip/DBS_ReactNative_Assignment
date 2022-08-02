import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import DBSApplication from './app/DBSApplication';
import globalStore from './app/store';

export default function RNTestApp() {
    return (
        <Provider store={globalStore}>
            <DBSApplication />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => RNTestApp);
