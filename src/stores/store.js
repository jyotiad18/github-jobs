import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import monitor from '../enhancers/monitor.js'
import loggerMiddleware from '../middleware/logger.js'

import jobsReducer from '../reducers/jobsSlice';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
      reducer: {   
		  jobs: jobsReducer
      },
      middleware: [loggerMiddleware, ...getDefaultMiddleware()],
      preloadedState,
      enhancers: [monitor]
  })
 
  return store
}