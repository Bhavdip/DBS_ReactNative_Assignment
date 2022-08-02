import { takeLatest } from 'redux-saga/effects';
import { FETCH_POST, REQ_RERENDER, SEARCH_IN_BODY } from '../reudx/types';
import {
    fetchLatestPostData,
    refreshPostData,
    searchInPostBody
} from './appSaga';

export const AppSaga = [
    takeLatest(FETCH_POST, fetchLatestPostData),
    takeLatest(REQ_RERENDER, refreshPostData),
    takeLatest(SEARCH_IN_BODY, searchInPostBody)
];
