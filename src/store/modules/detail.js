import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: 'detial',
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload
    }
  }
})

export const { changeDetailInfoAction } = detailSlice.actions
export default detailSlice.reducer