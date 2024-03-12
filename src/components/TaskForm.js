import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from "react-router-dom";

export function TaskForm() {

    const tasks = useSelector((state) => state.tasks)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

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

        if (params.id) {
           dispatch(updateTask(task)) 
        } else {
            dispatch(addTask({
                ...task,
                id: uuid(),
            }))
        }  
        navigate('/')
    }

    useEffect(() => {
        if (params.id) {
            const taskFound = tasks.find(task => task.id === params.id)
            setTask(taskFound)
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Titulo" value={task.title} onChange={handleInputChange}/>
            <textarea name="description" placeholder="Descripcion" value={task.description} onChange={handleInputChange}></textarea>
            <button type="submit">Añadir tarea</button>
        </form>
    );
  }
  