import { createSlice } from '@reduxjs/toolkit'

const initialState =[
        {
        id: 1,
        title: 'Prueba 1',
        description: 'Probando desde la task 1',
        completed: false,
        },
        {
        id: 2,
        title: 'Prueba 2',
        description: 'Probando desde la task 2',
        completed: false,
        }
    ]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = taskSlice.actions
export default taskSlice.reducer