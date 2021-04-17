import { configureStore } from '../_snowpack/pkg/@reduxjs/toolkit.js'
import counter from './reducers/counter.js'
import dmlist from './reducers/dmlist.js'

export default configureStore({
  reducer: {
    counter,
    dmlist
  }
})
