'use client'
import PostComp from '@/app/components/post';
import { Social, getPosts, getUsers } from '@/app/redux/stateSlice';
import { AppDispatch } from '@/app/redux/store';
import { useRouter } from 'next/navigation';
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function UserDetails({params}:{params:{id:string}}) {
  const id = params.id;
  
const sections = ["Amici", "Diario", "Informazioni"]

 const dispatch = useDispatch<AppDispatch>()
  
 const users = useSelector((state:Social)=>state.social.users) 
 const posts = useSelector((state:Social)=>state.social.posts) 
  useEffect(()=>{
     dispatch(getUsers())
     dispatch(getPosts())
     
    // if(!me) router.push('/')

  }, [])
  
  
  const router = useRouter()
  const me = users.find(el=>el.id.toString() === id)
  const myPosts = posts.filter(el=>el.userId.toString() === id.toString())
  return (
    <div className='h-full w-full '>
       <div className='w-[100%] h-[27%] flex bg-blue-600 text-center'> <span className='m-auto'>Immagine di copertina di {me?.name}</span></div>
       <div className=' rounded-3xl bg-gray-500 h-[15%] absolute left-2 top-[20%] w-[10%] z-10 '></div>
       <div className='flex  h-[15%] w-[100%] '>
         {sections.map((el,i)=><button className='bg-gray-400 grow border border-gray-500 font-bold  h-[100%] hover:bg-gray-700' key={i}>{el}</button>)}

       </div>

       <div className='m-4 w-full h-[30%] flex flex-col align-middle relative '>
        <div className='bg-gray-200 h-[40%] w-[90%]'>CONOSCI {me?.name.toUpperCase()}?</div>
          <input className='border border-gray-500 w-[90%] h-[60%]' placeholder={'Se conosci\t'  +me?.name+ ', scrivigli un messaggio'}>

          
          </input>
          <button className='bg-green-600 text-white font-thin absolute bottom-[5%] right-[13%]'>Aggiungi agli amici</button>

       </div>

       <div>
           {myPosts.map(el=><PostComp key = {el.id.toString()} id={el.id} uid = {el.userId} name = {me?.name} title={el.title} body={el.body} />)} 

       </div>


    </div>
  )
}
