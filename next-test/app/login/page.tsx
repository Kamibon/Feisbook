'use client'
import React, {  useState } from 'react'
import  Link  from 'next/link'


export default function Login() {
  const [credentials, setCredentials] = useState({email:"", password:""})

  


  /* function enterAccount(){
    
     fetch(url + "users.json", {method:"POST", body: JSON.stringify(credentials)}).then((res)=>{localStorage.setItem("user", credentials.email)}).catch(error=>console.log(error))
  } */

  function changeCred(event:React.ChangeEvent<HTMLInputElement>, field:string){
    event.preventDefault()
    setCredentials({...credentials, [field]:event.target.value})
    
   
  }


  return (
    <div className=' h-screen flex bg-gray-200'>
     <aside className='h-[100%] flex flex-col justify-center mt-[-5%]   w-[60%]'>
           <h1 className='text-blue-600 font-extrabold  text-5xl'>feisbook
              
           </h1>
          
           <h2 className='text-black text-4xl font-extrabold'>Feisbook ti aiuta a connetterti e <br/>
              rimanere in contatto con le <br/>
              persone della tua vita.</h2>
   
              
     </aside>
     <div className='h-[100%] w-[40%] flex flex-col justify-start justify-items-start'>
     <form  className='h-[60%] w-[70%] my-20 p-7 bg-white rounded-md shadow shadow-slate-400'>
        <input  onChange={(e)=>changeCred(e, "email")} placeholder='Email o numero di telefono' className='border  focus:border-blue-600 shrink-0 rounded-md m-2 p-3 h-[10%] w-[60%]'/>
        <input  onChange={(e)=>changeCred(e, "password")}  type='password' placeholder='Password' className='border shrink-0 rounded-md m-2 p-3 h-[10%] w-[60%]'/>
        <button className='bg-blue-600 rounded-md font-bold text-white w-[66%] h-[14%] m-3'><Link href="/">Accedi</Link></button>
        <div className='text-blue-600 m-3'>Password dimenticata?</div>
        <button /* onClick={()=>enterAccount()} */ className='bg-lime-700 rounded-md font-bold text-white w-[50%] h-[14%] m-3'>
         {  <Link href="/register">Crea un nuovo account</Link> }</button>
        
        </form> 
        </div>     

    </div>
  )
}
