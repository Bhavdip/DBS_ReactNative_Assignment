import {
    FETCH_POST,
    REQ_RERENDER,
    SAVE_POST_DATA,
    FAILED_TO_FETCH_POST,
    SEARCH_IN_POST
} from './types';

export function requestForReRender() {
    return {
        type: REQ_RERENDER,
        payload: {}
    };
}

export function fetchLatestPost() {
    return {
        type: FETCH_POST
    };
}

export function savePostData(responseData) {
    const latestPostData =
        responseData && responseData.length > 0 ? [...responseData] : [];
    return {
        type: SAVE_POST_DATA,
        payload: {
            latestPostData
        }
    };
}

export function failedToFetchData(error) {
    return {
        type: FAILED_TO_FETCH_POST,
        payload: {
            error
        }
    };
}

export function searchInPost(text) {
    return { type: SEARCH_IN_POST, payload: text };
}
