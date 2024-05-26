'use client'
import React from 'react'

const names = [
  'Generale',
   'Sicurezza',
   'Privacy',
   'Blocco',
   'Lingua',
   'Applicazioni'


]

export default function SideBar() {
  return (
    <aside className='absolute left-0 flex flex-col items-center top-20 border-r-2 border-gray-300 h-[80%] w-[15%] '>
       {   names.map((el, id)=>
        
        
        <div key = {id} className='hover:bg-slate-300 hover:cursor-pointer p-auto m-3 text-center flex-shrink-0 w-full h-[5%]'>{el}</div>) }
 

    </aside>
  )
}
