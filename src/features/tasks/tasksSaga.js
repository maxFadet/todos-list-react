import { takeEvery, takeLatest, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, setLoading, setError, selectTasksList, setStatus } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExmpleTasksHandler() {
    try {
        yield put(setStatus({ isLoading: true, isError: false }));
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield put(setStatus({ isLoading: false, isError: true }));
    } finally {
        yield put(setStatus({ isLoading: false, isError: false }));
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