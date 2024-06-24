import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectHideDone, toggleTaskDone, removeTask, selectTasksList } from "../tasksSlice";

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
            {task.content}
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
