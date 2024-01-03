import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TestState = {
  isStuck: boolean
}

const initialState: TestState = {
  isStuck: true
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setIsStuck: (state, action: PayloadAction<boolean>) => {
      state.isStuck = action.payload
    }
  }
})

export const testSliceReducer = testSlice.reducer
export const { actions } = testSlice
