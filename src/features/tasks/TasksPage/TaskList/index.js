import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectHideDone, toggleTaskDone, removeTask, selectTasksList } from "../../tasksSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const TaskList = () => {
  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector(selectTasksList);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/ ${task.id}`}>{task.content}</Link>
          </Content>
          <Button
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            ✗
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;