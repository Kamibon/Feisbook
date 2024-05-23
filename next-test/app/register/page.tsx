'use client'
import React, { useState} from 'react'
import  Link  from 'next/link'
 
type User = {

}


export default function Register() {
   // const [credentials, setCredentials] = useState({name:"", surname:"", email:"", password:"", date:Date(), friends:[], posts:[{content:"Il mio post", date:Date()}]})
    const [credentials, setCredentials] = useState<User>({name:"", surname:"", email:"", password:"", birthDate:Date(), friends:[], online:true, posts:[{id:"" ,user:"",content:"Il mio post", date:Date(), likes:[""]}]})
    

  
    

    /* function createAccount(){
       
       fetch(url + "users/"+ credentials.email +".json" , {method:"POST", body: JSON.stringify(credentials)}).then((res)=>{
        if(res.status === 200) localStorage.setItem("user", credentials?.name + "\t"+ credentials?.surname)
       }).catch(error=>console.log(error))
    } */
  
    function changeCred(event: React.ChangeEvent<HTMLInputElement>, field:string){
      event.preventDefault()
      setCredentials({...credentials, [field]:event.target.value} );
     
     
    }
  
  
    return (
      <div className=' h-screen flex bg-gray-200'>
       <aside className='h-[100%] flex flex-col justify-center mt-[-5%]   w-[60%]'>
             <h1 className='text-blue-600 font-extrabold ml-[25%] text-5xl'>feisbook
                
             </h1>
            
             <h2 className='text-black text-4xl font-extrabold ml-[25%]'>Feisbook ti aiuta a connetterti e <br/>
                rimanere in contatto con le <br/>
                persone della tua vita.</h2>
     
                
       </aside>
       <div className='h-[100%] w-[40%] flex flex-col justify-start justify-items-start'>
       <form  className='h-[88%] w-[70%] my-20 p-7 bg-white rounded-md shadow shadow-slate-400'>
         
          <input  onChange={(e)=>changeCred(e, "email")}  placeholder='Email o numero di telefono' className='border  focus:outline-blue-500 shrink-0 rounded-md m-2 p-3 h-[10%] w-[60%]'/>
          <input  onChange={(e)=>changeCred(e, "name")} placeholder='Nome' className='border  focus:outline-blue-500 shrink-0 rounded-md m-2 p-3 h-[10%] w-[60%]'/>
          <input  onChange={(e)=>changeCred(e, "surname")} placeholder='Cognome' className='border  focus:outline-blue-500 shrink-0 rounded-md m-2 p-3 h-[10%] w-[60%]'/>
          <input  onChange={(e)=>changeCred(e, "date")} type='date' placeholder='Data di nascita' className='border  focus:outline-blue-500 shrink-0 rounded-md m-2 p-3 h-[10%] w-[60%]'/>
          <input  onChange={(e)=>changeCred(e, "password")}  type='password' placeholder='Password' className='border focus:outline-blue-500 shrink-0 rounded-md m-2 p-3 h-[10%] w-[60%]'/>
          
          
          <button /* onClick={()=>createAccount()} */ className='bg-lime-700 rounded-md font-bold text-white w-[50%] h-[12%] m-3'>
           {  <Link href="/">Crea un nuovo account</Link> }</button>
          <div className='text-blue-600 m-3'>Password dimenticata?</div>
         
           <button className='bg-blue-600 rounded-md flex-shrink font-bold text-white w-[66%] h-[10%] m-3'><Link href="/login">Accedi</Link> </button>
          </form> 
          </div>     
  
      </div>
    )
  }
  

