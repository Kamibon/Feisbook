
import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit'
import {url, User,Post} from '../constants/constants'



interface initialState  {
  users:User[],
  posts:Post[]
}

const initialState:initialState = {
  users : [],
  posts:[]
}

export const getData = createAsyncThunk("posts", async()=> {
  const res = await fetch(url+'posts');
  const data = await res.json()
  return data
})

export const getUsers = createAsyncThunk("users", async()=> {
  const res = await fetch(url+'users');
  const data = await res.json()
  return data
})



export const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    showPosts: (state) => {
     
      
    
      
    },
    decrement: (state) => {
      
    },
    incrementByAmount: (state, action) => {
      
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(getData.fulfilled, (state, action)=>{
 state.posts = action.payload;
 
 builder.addCase(getUsers.fulfilled, (state,action)=>{
  state.users = action.payload;

 })

    })
  }
})

// Action creators are generated for each case reducer function
export const { showPosts, decrement, incrementByAmount } = socialSlice.actions

export default socialSlice.reducer