import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListView from './List-view';
import SearchComponent from './SearchComponent';

// const TAG = '[PostsComponent]';
const PostsComponent = props => {
    const [filterText, setFilterText] = useState('');
    const [filteredElements, setFilteredElements] = useState(
        props.latestPostData
    );
    const { latestPostData } = props;

    useEffect(() => {
        const searchResultDataset = latestPostData.filter(element => {
            const searchWord = filterText.trim().toLowerCase();
            const postBody = element.body.toLowerCase();
            return RegExp('\\b(.|\\s)' + searchWord).test(postBody);
            // const result = RegExp('\\b(.|\\s)' + searchWord).test(postBody);
            // console.log(
            //     TAG,
            //     `extractChars: ${searchWord.length} ${searchWord}, ${result}`
            // );
            // return result;
        });
        if (searchResultDataset && searchResultDataset.length > 0) {
            setFilteredElements(searchResultDataset);
        } else {
            setFilteredElements(latestPostData);
        }
    }, [latestPostData, filterText]);

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
    const handleFilterTextChange = text => {
        setFilterText(text);
    };

    return (
        <View style={styles.contentContainer}>
            <SearchComponent
                onChangeText={handleFilterTextChange}
                requestForRefresh={props.requestForRefresh}
            />
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
export default PostsComponent;
