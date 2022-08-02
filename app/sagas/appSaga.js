import { call, put, select } from 'redux-saga/effects';
import { failedToFetchData, savePostData } from '../reudx/action';
import { postData } from '../reudx/selectors';

const TAG = '[AppSaga]';

const getRandomNumber = () => {
    const min = 1000000000;
    const max = 9000000000;
    // const result = Math.random() * (max - min + 1);
    return Math.floor(min + Math.random() * (max - min + 1));
};

const appendRanNumAttribute = fromArray => {
    /**
     * this will append the random number into each post
     */
    let resultData = Array.from(fromArray);
    resultData.forEach(element => {
        element.randomNumber = getRandomNumber();
    });
    return resultData;
};

const duplicateArrayMultipleTimes = (arr, repeats) => {
    return []
        .concat(...Array.from({ length: repeats }, () => arr))
        .map((element, index) => {
            return { ...element, id: index };
        });
};

const fetchRemotePost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const responseData = await response.json();
    const nwResponseData = duplicateArrayMultipleTimes(responseData, 30);
    return appendRanNumAttribute(nwResponseData);
};

export function* fetchLatestPostData() {
    try {
        console.log(TAG, 'fetchLatestPostData');
        const responseData = yield call(fetchRemotePost);
        console.log(TAG, `Response:${JSON.stringify(responseData)}`);
        yield put(savePostData(responseData));
        console.log(TAG, 'Saved Response Successfully');
    } catch (error) {
        yield put(failedToFetchData(error));
    }
}
export function* refreshPostData() {
    try {
        console.log(TAG, 'Inside refreshPostData');
        let nwUpdatedPostData = appendRanNumAttribute(yield select(postData));
        yield put(savePostData(nwUpdatedPostData));
        console.log(TAG, 'Saved Updated Post Data Successfully');
    } catch (error) {
        console.log(TAG, error);
    }
}
