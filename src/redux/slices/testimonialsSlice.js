import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTestimonials = createAsyncThunk(
  'testimonials/fetchTestimonials',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 600))
    
    return [
      {
        id: 1,
        name: 'Sarah Chen',
        role: 'CTO, TechFlow',
        content: 'Codexveer transformed our outdated platform into a modern, lightning-fast application. Their attention to detail and technical expertise is unmatched.',
        avatar: 'SC',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        rating: 5
      },
      {
        id: 2,
        name: 'Marcus Rodriguez',
        role: 'Founder, StartupLab',
        content: 'From ideation to deployment, Codexveer was a true partner. Their design sensibility combined with rock-solid engineering made our vision a reality.',
        avatar: 'MR',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        rating: 5
      },
      {
        id: 3,
        name: 'Emily Watson',
        role: 'Product Lead, InnovateCo',
        content: 'Working with Codexveer felt like having an extension of our team. They delivered beyond expectations and on time. Highly recommend!',
        avatar: 'EW',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        rating: 5
      }
    ]
  }
)

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default testimonialsSlice.reducer
