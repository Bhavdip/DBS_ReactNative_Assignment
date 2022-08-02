import { all } from 'redux-saga/effects';
import { AppSaga } from '../sagas';

export default function* rootSaga() {
    yield all([...AppSaga]);
}
