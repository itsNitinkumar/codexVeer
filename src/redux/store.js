import { configureStore } from '@reduxjs/toolkit'
import servicesReducer from './slices/servicesSlice'
import testimonialsReducer from './slices/testimonialsSlice'
import projectsReducer from './slices/projectsSlice'

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    testimonials: testimonialsReducer,
    projects: projectsReducer,
  },
})
