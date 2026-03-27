import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 700))
    
    return [
      {
        id: 1,
        title: 'FinFlow Dashboard',
        category: 'Web Application',
        description: 'A comprehensive financial platform with real-time data visualization and AI-powered insights.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        tech: ['React', 'D3.js', 'Node.js'],
        link: '#'
      },
      {
        id: 2,
        title: 'Pulse Health',
        category: 'Mobile App',
        description: 'Health tracking app with smart notifications, emergency integration, and personalized wellness plans.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
        tech: ['React Native', 'Flutter', 'ML Kit'],
        link: '#'
      },
      {
        id: 3,
        title: 'CloudSync Infrastructure',
        category: 'Custom Solution',
        description: 'Enterprise-grade cloud infrastructure with automated scaling, monitoring, and CI/CD pipelines.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        tech: ['AWS', 'Terraform', 'Docker'],
        link: '#'
      }
    ]
  }
)

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default projectsSlice.reducer
