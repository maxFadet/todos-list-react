import { takeEvery, takeLatest, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, setLoading, selectTasksList } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage"

function* fetchExmpleTasksHandler() {
    try {
        yield put(setLoading(true));
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
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