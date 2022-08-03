import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestForReRender, fetchLatestPost } from '../reudx/action';
import AppContext from './AppContext';

class AppContextProvider extends Component {
    render() {
        return (
            <AppContext.Provider
                value={{
                    latestPostData: this.props.latestPostData,
                    displayLoading: this.props.displayLoading,
                    onReRender: this.props.requestForRefresh
                }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
    componentDidMount() {
        this.props.fetchLatestPost();
    }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(AppContextProvider);
