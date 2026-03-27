import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Mock API call - simulating fetching services
export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    return [
      {
        id: 1,
        title: 'Website Development',
        description: 'High-performance, SEO-optimized websites that convert visitors into customers. Built with modern frameworks for speed and scalability.',
        icon: 'Globe',
        features: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
        color: 'from-orange-500 to-red-500'
      },
      {
        id: 2,
        title: 'Mobile App Development',
        description: 'Cross-platform and native apps with fluid interactions, push notifications, and seamless offline support.',
        icon: 'Smartphone',
        features: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
        color: 'from-teal-500 to-cyan-500'
      },
      {
        id: 3,
        title: 'Custom Solutions',
        description: 'AI tools, SaaS platforms, and automation systems tailored to your business. From concept to deployment.',
        icon: 'Sparkles',
        features: ['Python', 'Node.js', 'AI/ML', 'AWS'],
        color: 'from-yellow-500 to-amber-500'
      }
    ]
  }
)

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default servicesSlice.reducer
