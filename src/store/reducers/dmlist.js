/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import lightdm from '../../constants/lightdm'

export const dmListSlice = createSlice({
  name: 'dmlist',
  initialState: {
    sessions: lightdm.sessions
  },
  reducers: {
    getAll: state => state.sessions,
    get: (state, { key }) => state.filter(session => session.key === key)
  }
})

// Action creators are generated for each case reducer function
export const { getAll, get } = dmListSlice.actions

export default dmListSlice.reducer
