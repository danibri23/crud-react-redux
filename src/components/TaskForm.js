import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from 'uuid'


export function TaskForm() {

    const dispatch = useDispatch()

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({
            ...task,
            id: uuid(),
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Titulo" onChange={handleInputChange} />
                <textarea name="description" placeholder="Descripcion" onChange={handleInputChange}></textarea>
            <button type="submit">Añadir tarea</button>
        </form>
    );
  }
  