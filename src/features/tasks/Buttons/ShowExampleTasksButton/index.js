import { useDispatch } from "react-redux";
import { Button } from "../styled";
import { fetchExampleTasks } from "../../tasksSlice";

const ShowExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </Button>
    )
};

export default ShowExampleTasksButton;