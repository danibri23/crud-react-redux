import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";


export function TaskList() {
    const tasks = useSelector((state) => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            <header>
                <h1>Total de tareas: {tasks.length}</h1>
                <Link to="/create-task">Crear tarea</Link>

            </header>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={()=> handleDelete(task.id)}>Eliminar</button>
                    <Link to={`/edit-task/${task.id}`}>Editar</Link>
                </div>
            ))}
        </div>
    );
}
