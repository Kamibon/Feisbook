import React, {  useState } from 'react'

import { url } from '../constants/sections'
import {VscCircleFilled} from "@react-icons/all-files/vsc/VscCircleFilled"
import { User } from '../interfaces/User'



export default function Trending({openChat}) {

  const [people, setPeople] = useState<User[]>([])
  const [done, setDone] = useState(false);


  function onlineUsers(){
    if(!done){
      setDone(true)
    fetch(url + "users.json").then(response=>response.json()).then((peoples)=>{
    
    let list:User[] = [];
    
    for(let el of Object.keys(peoples))
      {
      list.push(peoples[el]);
      
     
  
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
          <div onMouseEnter={onlineUsers} className=' border-t-2 mt-5 h-[40%]  w-[100%]'>
            <span> Online</span>
           
          {people.map(elem=>
          <div key={Math.random()*2567} className='flex m-2 cursor-pointer justify-start hover:bg-blue-600'>
            <div className='align-text-bottom' onClick={openChat} key = {elem.name}>{elem.name + "\t"}{elem.surname} </div>
            <VscCircleFilled key={elem.surname +"d"} className='align-text-bottom fill-green-600' />
            </div>)} 

          </div>
      
  
      </aside>
    )
  }
  