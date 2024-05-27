import React, { useEffect, useState } from 'react'


type myProps = {
  id:Number,
  uid:Number,
  name:string|undefined,
  title:string,
  body:string
}

export default function PostComp( {id, uid, name, title, body}: myProps ) {

  const [liked, setLiked] = useState(false);




 /* function addLike(){
  
  likes.push(localStorage.getItem("user"))
  fetch(url+ 'posts/' +id + '.json', {method:'PATCH', body:JSON.stringify({likes: likes})} ).
  then((r)=>console.log(r)).catch(e=> console.log(e))
  setLiked(!liked)
  
 } */

 

  return (
    <div className=' border-4 bg-white flex flex-col justify-start m-[20%] relative items-start h-40 w-96'>
         <h3 className='text-blue-700 cursor-pointer '>{name}</h3>
         <strong className='text-ellipsis'>{title}</strong>
        <div className='text-clip'>{body}</div> 
        <div className='mb-0 absolute bottom-[20%] flex justify-between'> 
        
        </div>
       
         <div className='h-[20%]  border-2 border-gray-500 w-[100%] flex align-middle   text-left '><button className='hover:bg-blue-600 mx-2'>Mi piace </button><button className='hover:bg-blue-600 mx-2'>Commenta</button></div> 



    </div>
  )
}
