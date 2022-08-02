import { takeLatest } from 'redux-saga/effects';
import { FETCH_POST, REQ_RERENDER } from '../reudx/types';
import { fetchLatestPostData, refreshPostData } from './appSaga';

export const AppSaga = [
    takeLatest(FETCH_POST, fetchLatestPostData),
    takeLatest(REQ_RERENDER, refreshPostData)
];
