import { createSlice } from "@reduxjs/toolkit"

interface User {
  id: number
  status: boolean
}
interface initialState {
  data: User[]
}
const initialState: initialState = {
  data: [
    {
      id: 1,
      status: false,
    },
    {
      id: 2,
      status: true,
    },
  ],
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    DeleteR: (state, {payload}) => {
      state.data = state.data.filter((el)=>el.id !== payload)
    },
    EditR: (state, {payload}) => {
      state.data = state.data.map((el)=>el.id === payload.id?payload:el)
    },
  },
})

export const {DeleteR,EditR} = counterSlice.actions

export default counterSlice.reducer
