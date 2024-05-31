'use client'
import React, {  MouseEventHandler, useEffect, useState } from 'react'
import {url, User} from '../constants/constants'
import Link from 'next/link'


type myProps = {
  openChat:MouseEventHandler<HTMLDivElement>
}




export default  function Trending(/* {openChat}: myProps */) {

   const [people, setPeople] = useState<User[]>([])
  const [done, setDone] = useState(false);

  useEffect(()=>{
      onlineUsers()


  }, [])
  



  function onlineUsers(){
    if(!done){
      setDone(true)
    fetch(url + "users").then(response=>response.json()).then((peoples)=>{
    
    let list:User[] = [];
    
    for(let el of peoples)
      {
      list.push(el);
      
     
  
      }
     setPeople(list);
     
  } )
  }
  } 

    return (
      <aside className='absolute right-1 top-24   h-[100%] w-[15%] '>
           <div className='border border-gray-400 border-r-2 h-[30%]' >
           <h2>TRENDING     Scopri di più</h2>
            <span>Vieni a vedere tutti i nuovi trend</span>
 

          </div>
           <div onMouseEnter={onlineUsers} className=' border-t-2 mt-5 h-[7%]  w-[100%]'> 
            <span> Online</span>
            </div> 
           {people.map(elem=>
          // <div key={Math.random()*2567} className='flex m-2 cursor-pointer justify-start hover:bg-blue-600'>
            <Link href={`users/${elem.id.toString()}`} className='align-text-bottom m-2 cursor-pointer justify-start hover:bg-blue-600' /* onClick={openChat} */ key = {elem.id.toString()}>{elem.username}<br/> </Link> 
            // </div>
           )}  

         
      
  
      </aside>
    )
  }
  