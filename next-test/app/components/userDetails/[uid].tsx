import React from 'react'
import { useSelector } from 'react-redux';
import { Social } from '@/app/redux/stateSlice';

/* export async function getStaticProps({ params }:{params:string}) {
  const  id = params;
  // Retrieve content that remains static most of the time
  const staticContent =  users.find((el)=>el.id.toString() === id)
   

  if (!staticContent) {
      return { notFound: true };
  }

  return { props: { staticContent }, revalidate: 10 };
}

export async function getStaticPaths() {
  // Generate the paths array for static generation
  const paths = await fetchPaths(); 
  return { paths, fallback: false };
} */




export default function Details() {
  const posts = useSelector((state:Social)=>state.social.posts)
  const users = useSelector((state:Social)=>state.social.users)

  




  return (
    <div>
       <span>Profilo</span>


    </div>
  )
}
