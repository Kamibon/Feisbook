import React, {useEffect, useState} from 'react'

import SideBar from '../sideBar.tsx'
import Trending from '../trending.tsx'
import Think from '../think.tsx'
//import { posts } from '../../constants/posts.js'
import Post from '../post.tsx'
import Searchbar from '../searchbar.tsx'
import { url } from '../../constants/sections'
import { PostType } from '../../interfaces/PostType.ts'


interface User{
  name:string,
  surname:string,
  date:Date,
  password:string,
  email:string
}



 function Chat({name}:{name:String}) {

  const [openChat, setOpenChat] = useState(true)


  return (
    <div className='absolute bottom-[-30%] right-0 h-[50%] w-[20%]'>
       <div onClick={()=>setOpenChat(!openChat)} className='bg-blue-700 cursor-pointer text-white font-bold'>{name}</div>
     { openChat &&  
     <div className='bg-slate-200 relative h-[68%]'>
     <div >
     <textarea placeholder=' Scrivi qui il tuo messaggio' className='w-full border absolute bottom-0 left-0 border-black rounded-md'></textarea>

     </div> 
     </div> 
      }  
    </div>
  )
}

type FakePost = {
    userID: Number,
    id: Number,
    title:String,
    body:String


}

export default function Home() {

  const [searched, setSearched] = useState<User[]>([])
 // const [posts, setPosts] = useState<PostType[]>([])
  const [openChat, setOpenChat] = useState(false)
  const [posts, setPosts] = useState<FakePost[]>([])
  useEffect(()=>loadPosts(), [])

  

  
  function loadPosts(){
    
    fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{return res.json()}).then((res)=>setPosts(res))
    /* fetch(url + "posts.json").then(response=>response.json()).then((results)=>{
    
    let list:PostType[] = [];
    let i = 0;
    for(let el of Object.keys(results))
      {
      list.push(results[el]);
    
      list[i].id = el;
     
      i++;
     
  
      }
    
     
     setPosts(list);
   
  } ) */
  
  }


function openCloseChat(){
  setOpenChat(!openChat)
}


  function search(sea){
  
   if(sea.length === 0) setSearched([])
  else
   fetch(url + "users.json").then(response=>response.json()).then((people:{})=>
    setTimeout(()=> {
      let list : User [] = []
      
      for(let el of Object.keys(people) )
        {
          list.push(people[el])
      
      
    
    }
    
    setSearched(list.filter(el=>el.name.includes(sea)))
    } , 500)
   )}
  

 /* */

  return (
    <div className='h-vh w-[100%] bg-gray-200'>
        <Searchbar searched={searched} onChange={search} name={localStorage.getItem("user")}></Searchbar>
        <div className='flex flex-col space-x-20'>
        <Think/>
        <SideBar/>
        <Trending openChat={openCloseChat}/>
        </div>
        <div className='absolute  left-[40%] top-[40%]'>
          
        {posts.length &&  posts?.map(el=><Post key={el.id + Math.random().toString()} id={el.id} name={el.userID} date={Date.now().toLocaleString()} text={el.body} likes={0}/>)}
        </div>
       {openChat && <Chat  name={"Giorgio Melita"}/> }
    </div>
  )
}
