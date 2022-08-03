import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PostsComponent from './components/PostsComponent';
import GIFComponent from './components/GIFComponent';
import { requestForReRender, fetchLatestPost } from './reudx/action';
import { connect } from 'react-redux';

class DBSApplication extends Component {
    render() {
        const { showLoading, latestPostData } = this.props;
        return (
            <View style={styles.sectionContainer}>
                <GIFComponent />
                <PostsComponent
                    showLoading={showLoading}
                    latestPostData={latestPostData}
                    requestForRefresh={() => this.props.requestForRefresh()}
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
        fetchLatestPost: () => dispatch(fetchLatestPost())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DBSApplication);
