import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { PostsComponent } from './components/PostsComponent';
import GIFComponent from './components/GIFComponent';
import SearchComponent from './components/SearchComponent';
import { AppReducerProvider } from './context/AppReducerContext';
import AppContextProvider from './context/AppContextProvider';

class DBSApplication extends Component {
    render() {
        return (
            <AppContextProvider>
                <View style={styles.sectionContainer}>
                    <GIFComponent />
                    <AppReducerProvider>
                        <SearchComponent />
                        <PostsComponent />
                    </AppReducerProvider>
                </View>
            </AppContextProvider>
        );
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 38 : 0
    }
});

export default DBSApplication;
