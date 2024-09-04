'use client'
import Link from 'next/link';
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { url } from '../constants/constants';
import { Avatar, Box, Button, Card, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { CheckIcon, EditIcon } from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';


type myProps = {
  id:Number,
  uid:Number,
  name:string|undefined,
  title:string,
  body:string
}

type Comment = {
  postId:Number,
  id:Number,
  name:String,
  email:String,
  body:String

}

export default function PostComp( {id, uid, name, title, body}: myProps ) {

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random()*50))
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments ] = useState(false)
  const url = usePathname()
  console.log(url === '/')

 
 


 /* function addLike(){
  
  likes.push(localStorage.getItem("user"))
  fetch(url+ 'posts/' +id + '.json', {method:'PATCH', body:JSON.stringify({likes: likes})} ).
  then((r)=>console.log(r)).catch(e=> console.log(e))
  setLiked(!liked)
  
 } */

  function liking(event : React.MouseEvent<HTMLButtonElement, MouseEvent>){
    console.log(liked)
    
    setLiked(prev=>{return !prev})
    setTimeout(()=>console.log(liked), 3000)
  }

 

  return (

    <Card my = {2} className=' w-[40%] '>
      <Flex alignItems={'center'}><Avatar name={name}  ></Avatar>
      <Link className='text-blue-700 basis-[10%] cursor-pointer '   href={ url==='/'? 'users/'+uid : url+ uid.toString()}>{name}</Link></Flex>
      
       <Heading as={'h3'}>{title}</Heading>
       <Text>{body}</Text>
       <Divider/>
       <Box flexGrow={1}>
         <Text><CheckIcon></CheckIcon>A {likes} persone piace questo elemento</Text>
         </Box>
       <Flex>
         <Button className={'hover:text-blue-700' + liked? 'text-blue-700':'text-black'} onClick={(e)=>liking(e)} flexGrow={1} rightIcon={<CheckIcon></CheckIcon>}>Mi piace</Button>
         <Button className='hover:text-blue-700' flexGrow={1} rightIcon={<EditIcon></EditIcon>}>Commenta</Button>
         
         
       </Flex>

    </Card>
   /*  <div className='  shadow-blue-500 shadow-xl bg-white flex flex-col   m-[8%]  items-start h-[75%] w-[40%]  '>
         <Link className='text-blue-700 basis-[10%] cursor-pointer ' href={'users/'+uid}>{name}</Link>
         <strong className='text-ellipsis basis-[10%]'>{title}</strong>
        <div className='text-clip basis-[40%]'>{body}</div> 
        
       
         <div className='basis-[20%]  border-2 border-gray-500 w-[100%] flex align-middle   text-left '><button onClick={()=>{setLiked(!liked), setLikes(likes=>likes+(liked?-1:1) )}} className= {`hover:text-blue-600 mx-2 ${liked && 'text-blue-600'}`} >Mi piace </button><button className='hover:text-blue-600 mx-2'>Commenta</button></div> 
         <div className='basis-[20%]  border-2 border-gray-500 w-[100%] flex align-middle   text-left '>{likes} Like <button onClick={()=>setShowComments(!showComments)} className=' hover:text-blue-500'> {comments.length} commenti</button></div> 
        {showComments && comments?.map(el => <div className='bg-blue-300' key={el.id.toString()}>
              <span className='font-bold text-blue-700'>{el.name}</span> <div>{el.body}</div>

        </div>)}


    </div> */
  )
}
