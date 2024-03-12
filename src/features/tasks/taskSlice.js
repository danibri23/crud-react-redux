import { createSlice } from '@reduxjs/toolkit'

const initialState =[
        {
        id: '1',
        title: 'Prueba 1',
        description: 'Probando desde la task 1',
        completed: false,
        },
        {
        id: '2',
        title: 'Prueba 2',
        description: 'Probando desde la task 2',
        completed: false,
        }
    ]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload]
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload)
    },
    updateTask: (state, action) => {
      return state.map(task => task.id === action.payload.id ? action.payload : task)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, updateTask } = taskSlice.actions
export default taskSlice.reducer