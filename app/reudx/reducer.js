import createReducer from '../helper/createReducer';
import {
    FETCH_POST,
    REQ_RERENDER,
    FAILED_TO_FETCH_POST,
    SAVE_POST_DATA
} from './types';

const initialState = {
    isFetchingPost: false,
    postData: [],
    errorData: null
};

export const appReducer = createReducer(initialState, {
    [REQ_RERENDER](state) {
        return {
            ...state,
            isFetchingPost: true,
            errorData: null
        };
    },
    [FETCH_POST](state) {
        return {
            ...state,
            isFetchingPost: true,
            postData: []
        };
    },
    [SAVE_POST_DATA](state, action) {
        return {
            ...state,
            isFetchingPost: false,
            postData: [...action.payload.latestPostData]
        };
    },
    [FAILED_TO_FETCH_POST](state, action) {
        return {
            ...state,
            isFetchingPost: false,
            errorData: action.payload.error
        };
    }
});
