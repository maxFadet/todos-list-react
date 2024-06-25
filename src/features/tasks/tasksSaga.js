import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, setLoading } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

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

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExmpleTasksHandler);
};