import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";
import ToogleButton from "./ToggleButton";

export function TaskList() {
    const tasks = useSelector((state) => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div className="w-4/6">
            <header className="flex justify-between items-center py-4">
                <h1 className="text-lg font-bold">Total de tareas: {tasks.length}</h1>
                <Link to="/create-task" className="bg-blue-600 px-2 py-1 rounded-md text-sm">Crear tarea</Link>
            </header>

            <div className="grid grid-cols-3 gap-3">
                {tasks.map((task, index) => (
                    <div className="bg-neutral-800 p-4 rounded-md" key={task.id}>
                        <header className="flex justify-between">
                            <h3 className="text-lg font-bold">{task.title}</h3>
                            <div className="flex gap-x-2">
                                <Link className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center" to={`/edit-task/${task.id}`}>Editar</Link>
                                <button className="bg-red-500 px-2 py-1 text-xs rounded-md" onClick={()=> handleDelete(task.id)}>Eliminar</button>
                            </div>
                        </header>
                        <p>{task.description}</p>
                        <div className="flex justify-between">
                            <p>{index + 1}</p>
                            <ToogleButton />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
