import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../styled";
import { fetchExampleTasks, selectIsError, selectIsLoading, setError } from "../../../tasksSlice";

const ShowExampleTasksButton = () => {
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setError(false));
        dispatch(fetchExampleTasks());
    };

    return (
        <>
            <Button onClick={handleClick} disabled={isLoading}>
                {isLoading ? "Loading..." : "Pobierz przykładowe zadania"}
            </Button>
            {isError &&
                <div style={{ color: 'red' }}>
                    Nie udało się załadować zadań. Spróbuj ponownie później.
                </div>}
        </>
    );
};

export default ShowExampleTasksButton;
