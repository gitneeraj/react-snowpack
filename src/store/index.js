import { configureStore } from '@reduxjs/toolkit'
import counter from './reducers/counter'
import dmlist from './reducers/dmlist'

export default configureStore({
  reducer: {
    counter,
    dmlist
  }
})
