'use client'

import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Social, getPosts, getUsers } from '../redux/stateSlice'
import { User } from '../constants/constants'
import Link from 'next/link'
import { AppDispatch } from '../redux/store'
import NavBar from './navBar'
import { Avatar, Box, Flex } from '@chakra-ui/react'



type myProps = {
  name:String,
  // onChange: Function,
  
}



export default function Searchbar() {
    const [value, setValue] = useState('')
    const [searched, setSearched] = useState<User[]>([])

    const posts = useSelector((state:Social)=>state.social.posts)
    const users = useSelector((state:Social)=>state.social.users)
    


    const search = (val:string)=>{
      if(val.length>0)
      setSearched(users?.filter((el)=>el.username.startsWith(val)||el.name.startsWith(val)))
    else setSearched([])
    }



  return (
    <Box className='w-[100%] h-[40%] '>
   
        {/* <nav className='bg-blue-800 flex h-20 justify-items-center align-middle items-center space-x-60'>
        
         
           
           <div className='m-10 text-white text-3xl font-bold '> Feisbook </div>
            <input className='rounded-md  bg-white h-[35%] w-[40%] ' onChange={(e)=>search(e.target.value)} placeholder='Cerca'/>
           
           
        
           

            <div className='h-[55%] w-[30%] flex flex-col justify-center justify-items-center'>
             <div className=' hover:bg-blue-950 cursor-pointer m-4 text-center  h-full'>
              <span className='text-white font-bold m-4  ' >Me</span>
             
             { <Image className='h-full w-[40%] mb-3 inline' alt = "" src ={require('./pages/photo/profile.jpg')}/> }
             </div>
             </div>
             
        </nav> */}
        <NavBar onChange={search}  name={'Giorgio Armani'}></NavBar>
         
        {searched?.map((el)=>
        <Box key={el.id.toString()} className='flex flex-col border fixed top-[10%]  bg-white justify-center m-auto z-10 w-[70%]'>
        <Flex justifyContent={'center'}>
        <Link  key={el.id.toString()} href={'users/'+el.id} className='w-[20%] h-[8%] border-gray-400  hover:bg-slate-500  '>
        {el.username } 
        {/* <Image key={el.surname} className='w-[30%] h-[50%]' alt = "" src ={require('./pages/photo/profile.jpg')}/> */}
        <Avatar name={el.name}></Avatar>
        </Link>
        </Flex>
        </Box>
        )
       
        
        }
          
    </Box>
  )
}
