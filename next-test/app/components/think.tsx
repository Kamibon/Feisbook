'use client'
import React, { useState } from 'react'


export default function Think() {

  const[content, setContent] = useState("")

  /* function createPost(){
    fetch(url+"posts.json", {method:"POST", body:JSON.stringify({content:content, user:localStorage.getItem("user"), date:new Date().toLocaleDateString(), likes:[""] })})
  }
 */
  return (
    <div className='h-[35%] w-[35%] absolute left-[35%] m-4'>
        <div className='bg-slate-500 h-[17%] flex justify-start items-start'>
             <div className='hover:bg-gray-700 inline m-2'>Aggiorna stato</div>
             <div className='hover:bg-gray-700 inline m-2'>Aggiungi foto/video</div>

        </div>
        <input value={content} onChange={(e)=>setContent(e.target.value)} className='h-[40%] w-[100%]'
           placeholder = ' A cosa stai pensando?'/>
        
        <div className='bg-slate-500 h-[17%] flex justify-end items-center'>
             <button /* onClick={createPost} */ className='bg-blue-700  m-2 p-1 rounded-md text-white hover:bg-blue-800'>Posta</button>

        </div>


    </div>
  )
}
