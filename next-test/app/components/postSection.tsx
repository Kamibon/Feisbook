'use client'
import React, { useEffect, useState } from 'react'
import {url, Post, User} from '../constants/constants'
import { useSelector, useDispatch } from 'react-redux'
import Think from './think'
import { getData, showPosts } from '../redux/stateSlice'
import { AppDispatch } from '../redux/store'

type Social = {
    social:{
    users: User[],
    posts : Post[]
    }
  }

export default function PostSection() {

   useEffect(()=>{ dispatch(getData())}, [])

/* async function showPosts(){
  const res = await  fetch(url + 'posts');
  const data = await res.json();
  console.log(data)
  //setPosts(data)
 } */

 //const [posts, setPosts] = useState<Post[]>([])
 const posts = useSelector((state:Social) => state.social.posts)
 const dispatch = useDispatch<AppDispatch>()

  return (
    <>
    <Think />
    <div className='w-[30%] mx-auto '>
       {posts.map(p=>
            <div key={p.id.toString()} onMouseEnter={()=>dispatch(showPosts())} className='border border-gray-500 shadow-slate-600 m-auto mt-5 w-[95%] h-[30%] overflow-clip'>
            <div>{p.userId.toString()}</div>
            <div>{p.title}</div>
            <div>{p.body}</div>
            
            </div>)} 



    </div>
    </>

  )
}
