import { useDispatch } from "react-redux";
import { Button, Panel } from "../styled";
import { fetchExampleTasks } from "../../tasksSlice";

const ShowExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <Panel>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </Panel>
    )
};

export default ShowExampleTasksButton;