import { createSlice } from '@reduxjs/toolkit'

const tasks = {
    tasks: [
        {
        id: 1,
        title: 'Prueba 1',
        description: 'Probando desde la task 1',
        completed: false,
        },
        {
        id: 2,
        title: 'Do homework',
        description: 'Probando desde la task ',
        completed: false,
        }
    ],
  
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: tasks,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = counterSlice.actions
export default counterSlice.reducer