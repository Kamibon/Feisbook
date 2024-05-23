'use client'

import Image from 'next/image'
import React, {useEffect, useState} from 'react'



type myProps = {
  name:String,
  // onChange: Function,
  searched:Array<any>
}


export default function Searchbar({name,  searched }:myProps) {
    const [value, setValue] = useState('')

 

    
  return (
    <div className='w-[100%] '>
   
        <nav className='bg-blue-800 flex h-20 justify-items-center align-middle items-center space-x-60'>
        
         
           
           <div className='m-10 text-white text-3xl font-bold '> Feisbook </div>
            <input className='rounded-md  bg-white h-[35%] w-[40%] ' onChange={(e)=>setValue(e.target.value)} placeholder='Cerca'/>
           
              
           

            <div className='h-[55%] w-[30%] flex flex-col justify-center justify-items-center'>
             <div className=' hover:bg-blue-950 cursor-pointer m-4 text-center  h-full'>
              <span className='text-white font-bold m-4  ' >{name}</span>
             
             {/* <Image className='h-full w-[40%] mb-3 inline' alt = "" src ={require('./pages/photo/profile.jpg')}/> */}
             </div>
             </div>
        </nav>
         
        {searched?.map((el)=>
        <div key={Math.random()} className='flex flex-col justify-center ml-[40%] mb-1 z-10 w-[70%]'>
        <div key={el.name+Math.random()} className='w-[20%] h-[8%]   hover:bg-slate-500  '>{el.name} {el.surname} 
        {/* <Image key={el.surname} className='w-[30%] h-[50%]' alt = "" src ={require('./pages/photo/profile.jpg')}/> */}
        </div>
        </div>
        )
       
        
        }
        
          
    </div>
  )
}
