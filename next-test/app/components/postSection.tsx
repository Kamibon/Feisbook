'use client'
import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import Think from './think'
import { getPhoto, getPosts, getUsers, showPosts, Social } from '../redux/stateSlice'
import { AppDispatch } from '../redux/store'
import PostComp  from './post'
import {  Flex, Spacer, VStack } from '@chakra-ui/react'




export default function PostSection() {

  
  useEffect(()=>{
    
 dispatch(getPosts())
 dispatch(getUsers())
 dispatch(getPhoto())
  }, [])



 
 const posts = useSelector((state:Social)=>state.social.posts)
 const users = useSelector((state:Social)=>state.social.users)

 const dispatch = useDispatch<AppDispatch>()
 
  return (
    <div id="post" className='w-[100%]'>
   
    <div className='w-[100%] mx-auto flex flex-col items-center   '>
    
      <VStack>
        <Flex direction={'column'} gap={40}  alignItems={'center'} >
        <Think />
       {posts.map(p=> <PostComp key={p.id.toString()} id ={p.id} uid = {p.userId} name={users.find((el)=>el.id ===p.userId)?.name} body={p.body} title={p.title} />
            )} 
            </Flex>
</VStack>


    </div>
    </div>

  )
}
