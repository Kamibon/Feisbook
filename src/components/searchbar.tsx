import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {FiUsers} from "@react-icons/all-files/fi/FiUsers";
import {TiSocialFacebook} from "@react-icons/all-files/ti/TiSocialFacebook";





export default function Searchbar({name,onChange,  searched }) {
    const [value, setValue] = useState('')

 

    useEffect(()=>{
     
        onChange(value);
    
        
    }, [value])

  return (
    <div className='w-[100%] '>
   
        <nav className='bg-blue-800 flex h-20 justify-items-center align-middle items-center space-x-60'>
        
         
           
           <div className='m-10 '> <TiSocialFacebook className='fill-white border border-blue-900 size-6 rounded-sm'/></div>
            <input className='rounded-md  bg-white h-[35%] w-[40%] ' onChange={(e)=>setValue(e.target.value)} placeholder='Cerca'/>
           
           <Link to="/friends"> <FiUsers className='size-6 hover:fill-white'/></Link>    
           

            <div className='h-[55%] w-[30%] flex flex-col justify-center justify-items-center'>
             <div className=' hover:bg-blue-950 cursor-pointer m-4 text-center  h-full'>
              <span className='text-white font-bold m-4  ' >{name}</span>
             
             <img className='h-full w-[40%] mb-3 inline' alt = "" src ={require('./pages/photo/profile.jpg')}/>
             </div>
             </div>
        </nav>
         
        {searched?.map((el)=>
        <div key={Math.random()} className='flex flex-col justify-center ml-[40%] mb-1 z-10 w-[70%]'>
        <div key={el.name+Math.random()} className='w-[20%] h-[8%]   hover:bg-slate-500  '>{el.name} {el.surname} 
        <img key={el.surname} className='w-[30%] h-[50%]' alt = "" src ={require('./pages/photo/profile.jpg')}/>
        </div>
        </div>
        )
       
        
        }
        
          
    </div>
  )
}
