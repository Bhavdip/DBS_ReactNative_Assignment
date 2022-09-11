import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListView from './List-view';
import { AppReducerContext } from '../context/AppReducerContext';
import AppContext from '../context/AppContext';

export const PostsComponent = () => {
    const { appState } = useContext(AppReducerContext);
    const { latestPostData, displayLoading } = useContext(AppContext);
    const [filteredElements, setFilteredElements] = useState(latestPostData);

    useEffect(() => {
        const searchResultDataset = latestPostData.filter(element => {
            const searchWord = appState.searchText.trim().toLowerCase();
            const postBody = element.body.toLowerCase();
            return RegExp('\\b(.|\\s)' + searchWord).test(postBody);
        });
        if (searchResultDataset && searchResultDataset.length > 0) {
            setFilteredElements(searchResultDataset);
        } else {
            setFilteredElements(latestPostData);
        }
    }, [appState.searchText, latestPostData]);

    const renderPostBody = ({ item }) => {
        const postContent = `${item.id}:${item.body}`;
        return (
            <View>
                <Text>{postContent}</Text>
                {item.randomNumber ? (
                    <Text style={styles.boldTextStyle}>
                        {item.randomNumber}
                    </Text>
                ) : null}
            </View>
        );
    };
    return (
        <View style={styles.contentContainer}>
            <ListView
                showLoading={displayLoading}
                data={filteredElements}
                renderItem={renderPostBody}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        marginTop: 16
    },
    boldTextStyle: {
        fontWeight: 'bold'
    }
});
