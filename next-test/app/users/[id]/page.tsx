'use client'
import PostComp from '@/app/components/post';
import { Photo } from '@/app/constants/constants';
import { Social, getPhoto, getPosts, getUsers } from '@/app/redux/stateSlice';
import { AppDispatch } from '@/app/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { memo, useEffect, useMemo, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function UserDetails({params}:{params:{id:string}}) {
  const id = params.id;
  
const sections = ["Amici", "Diario", "Informazioni"]

 const dispatch = useDispatch<AppDispatch>()
  
 const users = useSelector((state:Social)=>state.social.users) 
 const posts = useSelector((state:Social)=>state.social.posts) 
 const photos = useSelector((state:Social)=>state.social.photos)
  useEffect(()=>{
     dispatch(getUsers())
     dispatch(getPosts())
     dispatch(getPhoto())
     imageUrl = photos.find(el=>el.id.toString() === id)
    // if(!me) router.push('/')

  }, [])
  
  
  const router = useRouter()
  const me = users.find(el=>el.id.toString() === id)
  const [page, setPage] = useState("Diario")

  let imageUrl:Photo|undefined 
  if(photos){
   imageUrl = photos.find(el=>el.id.toString() === id)
  }
  else { imageUrl = undefined}
  const myPosts = posts.filter(el=>el.userId.toString() === id.toString())
  return (
    <div className='h-full w-full '>
       <div className='w-[100%] h-[27%] flex bg-blue-600 text-center'> <span className='m-auto'>Immagine di copertina di {me?.name}</span></div>
       {/* <div className=' rounded-3xl bg-gray-500 h-[15%] absolute left-2 top-[20%] w-[10%] z-10 '></div> */}
       <Image className=' rounded-3xl bg-gray-500 h-[15%] absolute left-2 top-[20%] w-[10%] z-10 '  width={80} height={80}   alt={imageUrl?imageUrl.title:''} src={imageUrl?imageUrl.thumbnailUrl:'https://via.placeholder.com/150/771796'}/>
       <div className='flex  h-[15%] w-[100%] '>
         {sections.map((el,i)=><button onClick={()=>setPage(el)} className='bg-gray-400 grow border border-gray-500 font-bold  h-[100%] hover:bg-gray-700' key={i}>{el}</button>)}

       </div>

  {//
   page === "Diario" &&
  <>
       <div className='m-4 w-full h-[30%] flex flex-col items-center relative '>
        <div className='bg-gray-200 h-[40%] w-[90%]'>CONOSCI {me?.name.toUpperCase()}?</div>
          <input className='border border-gray-500 w-[90%] h-[60%]' placeholder={'Se conosci\t'  +me?.name+ ', scrivigli un messaggio'}>

          
          </input>
          <button className='bg-green-600 text-white font-thin absolute bottom-[5%] right-[13%]'>Aggiungi agli amici</button>

       </div>

       <div className='flex flex-col  items-center'>
        
      

           {myPosts.map(el=><PostComp key = {el.id.toString()} id={el.id} uid = {el.userId} name = {me?.name} title={el.title} body={el.body} />)} 
        
       </div>
       </>
       //
}

{//Amici
page === "Amici" &&
<section className='w-[100%] border h-[100%]  absolute left-0'>
        
          <div className='w-full h-full grid grid-cols-3 '>{
          users.map(el=>
           <div className='size-[100%] text-center flex items-center border border-black m-4 relative' key={el.id.toString()}>
          <Image width={10} height={10} alt='Profilo' src={photos.find(p=>p.id===el.id)? photos.find(p=>p.id===el.id)!.thumbnailUrl:'https://via.placeholder.com/150/771796'} className=' bg-blue-800 m-2 w-[30%] h-[80%] overflow-clip hover:shadow-xl  shadow-blue-600 ' key={el.id.toString()}></Image>
          <Link className='font-bold text-blue-700' href={el.id.toString()}>{el.username}</Link>
          <button className='bg-blue-800 rounded-sm text-white font-bold m-5 p-1 absolute right-[5%]'>Aggiungi agli amici</button>
          </div>)

          }
        
          </div>
          
       </section>//
}

{page ==="Informazioni" && <>
      <strong>Informazioni</strong>
      <ul>
        <li>{me?.name}</li>
        <li>Abito a : {me?.address.city}</li>
        <li>Telefono:{me?.phone}</li>
        <li>Lavoro per {me?.company.name}</li>
      
        <li>Sito personale: {me?.website}</li>
      </ul>
</>}
    </div>
  )
}
