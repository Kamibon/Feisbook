'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { url } from '../constants/constants';
import { randomInt } from 'crypto';


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
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(()=>{
     fetch(url+'comments').then((res)=>res.json()).then((data:Comment[])=>setComments(data.filter(el=>el.postId === id)))

  }, [])
 


 /* function addLike(){
  
  likes.push(localStorage.getItem("user"))
  fetch(url+ 'posts/' +id + '.json', {method:'PATCH', body:JSON.stringify({likes: likes})} ).
  then((r)=>console.log(r)).catch(e=> console.log(e))
  setLiked(!liked)
  
 } */

 

  return (
    <div className=' border-4 bg-white flex flex-col justify-start m-[12%] relative items-start h-40 w-96'>
         <Link className='text-blue-700 cursor-pointer ' href={'users/'+uid}>{name}</Link>
         <strong className='text-ellipsis'>{title}</strong>
        <div className='text-clip'>{body}</div> 
        <div className='mb-0 absolute bottom-[20%] flex justify-between'> 
        
        </div>
       
         <div className='h-[20%]  border-2 border-gray-500 w-[100%] flex align-middle   text-left '><button onClick={()=>setLiked(!liked)} className= {`hover:text-blue-600 mx-2 ${liked && 'text-blue-600'}`} >Mi piace </button><button className='hover:text-blue-600 mx-2'>Commenta</button></div> 
         <div className='h-[20%]  border-2 border-gray-500 w-[100%] flex align-middle   text-left '>{Math.floor(Math.random()*50)} Like  {comments.length} commenti</div> 



    </div>
  )
}
