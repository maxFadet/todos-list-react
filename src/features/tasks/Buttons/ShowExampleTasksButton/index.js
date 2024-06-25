import { useDispatch, useSelector } from "react-redux";
import { Button } from "../styled";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";

const ShowExampleTasksButton = () => {
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(fetchExampleTasks())} disabled={isLoading}>
            {isLoading ? "Loading..." : "Pobierz przykładowe zadania"}
        </Button>
    )
};

export default ShowExampleTasksButton;