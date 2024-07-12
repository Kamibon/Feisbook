import React, { useEffect, useState } from 'react'

import {BiLike} from "@react-icons/all-files/bi/BiLike";
import {BiComment} from "@react-icons/all-files/bi/BiComment";
import { url } from '../constants/sections';


export default function Post({id, name, date, text, likes}) {

  const [liked, setLiked] = useState(false);




 function addLike(){
  
  likes.push(localStorage.getItem("user"))
  fetch(url+ 'posts/' +id + '.json', {method:'PATCH', body:JSON.stringify({likes: likes})} ).
  then((r)=>console.log(r)).catch(e=> console.log(e))
  setLiked(!liked)
  
 }

 

  return (
    <div className=' border-4 bg-white flex flex-col justify-start m-[7%] relative items-start h-40 w-96'>
        <h3 className='text-blue-700 '>{name}</h3>
        <span className='text-gray-500'>{date}</span>
        <div className='text-ellipsis'>{text}</div>
        <div className='mb-0 absolute bottom-[20%] flex justify-between'> 
        <BiLike onClick={()=>addLike()} className=  {'hover:fill-blue-700 mr-2 size-5  '.concat(liked? 'fill-blue-700':'')}  />
        <BiComment className='hover:bg-blue-700 mr-2 size-5'/>
        </div>
       
        <div className='h-[20%] absolute border-y-2 w-[100%]   text-left bottom-0'><BiLike className='inline'/><span>{likes.length}</span></div>



    </div>
  )
}
