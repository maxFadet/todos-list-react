import { takeEvery, takeLatest, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, setLoading, setError, selectTasksList } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExmpleTasksHandler() {
    try {
        yield put(setLoading(true));
        yield put(setError(false));
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield put(setError(true));
    } finally {
        yield put(setLoading(false));
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasksList);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExmpleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};