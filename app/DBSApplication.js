import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchComponent from './components/SearchComponent';
import PostsComponent from './components/PostsComponent';
import GIFComponent from './components/GIFComponent';
import {
    requestForReRender,
    fetchLatestPost,
    searchInBody
} from './reudx/action';
import { connect } from 'react-redux';

class DBSApplication extends Component {
    render() {
        const { requestForRefresh, showLoading, latestPostData } = this.props;
        return (
            <View style={styles.sectionContainer}>
                <GIFComponent />
                <SearchComponent
                    requestForRefresh={requestForRefresh}
                    onChangeText={text => {
                        this.props.searchInPostBody(text);
                    }}
                />
                <PostsComponent
                    showLoading={showLoading}
                    latestPostData={latestPostData}
                />
            </View>
        );
    }

    componentDidMount() {
        this.props.fetchLatestPost();
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        marginTop: 38
    }
});

function mapStateToProps(globalState) {
    return {
        showLoading: globalState.appReducer.isFetchingPost,
        latestPostData: globalState.appReducer.postData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        requestForRefresh: () => dispatch(requestForReRender()),
        fetchLatestPost: () => dispatch(fetchLatestPost()),
        searchInPostBody: searchChars => dispatch(searchInBody(searchChars))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DBSApplication);
