import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            { id: 1, content: "przykładowo zrobione zadanie", done: true },
            { id: 2, content: "przykładowo nie zrobione zadanie", done: false },
        ],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: (state, { payload: taskId }) => {
            state.tasks = state.tasks.filter(({ id }) => id !== taskId);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach(task => {
                task.done = true;
            });
        },
    },
},
);

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectTasksList = state => selectTasksState(state).tasks;

export const selectAllTasksDone = state =>
    selectTasksList(state).every(task => task.done);

export const selectTasksNotEmpty = state =>
    selectTasksList(state).length > 0;

export default tasksSlice.reducer;
