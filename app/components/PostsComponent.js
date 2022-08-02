import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListView from './List-view';

class PostsComponent extends Component {
    renderPostBody = ({ item }) => {
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

    render() {
        const { showLoading, latestPostData } = this.props;
        return (
            <View style={styles.contentContainer}>
                <ListView
                    showLoading={showLoading}
                    data={latestPostData}
                    renderItem={this.renderPostBody}
                />
            </View>
        );
    }
}

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
