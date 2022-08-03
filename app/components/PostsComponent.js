import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListView from './List-view';
import { AppContext } from '../context/ApplicationContext';

export const PostsComponent = props => {
    const { latestPostData } = props;
    const { state } = useContext(AppContext);
    const [filteredElements, setFilteredElements] = useState(latestPostData);

    useEffect(() => {
        const searchResultDataset = latestPostData.filter(element => {
            const searchWord = state.searchText.trim().toLowerCase();
            const postBody = element.body.toLowerCase();
            return RegExp('\\b(.|\\s)' + searchWord).test(postBody);
        });
        if (searchResultDataset && searchResultDataset.length > 0) {
            setFilteredElements(searchResultDataset);
        } else {
            setFilteredElements(latestPostData);
        }
    }, [state.searchText, latestPostData]);

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
                showLoading={props.showLoading}
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
