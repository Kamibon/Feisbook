'use client'
import React, {  MouseEventHandler, useEffect, useState } from 'react'
import {url, User} from '../constants/constants'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Social } from '../redux/stateSlice'
import { Avatar, Box, Button, Divider, Flex, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'


type myProps = {
  openChat:MouseEventHandler<HTMLDivElement>
}




export default  function Trending(/* {openChat}: myProps */) {

   const [people, setPeople] = useState<User[]>([])
  const [done, setDone] = useState(false);
  const users = useSelector((state:Social)=>state.social.users)


  
  



  

  

    return (
           <Flex className=' overflow-scroll fixed right-[5%] top-[15%]' direction={'column'}>
               <Box>
                   <Heading>TRENDING</Heading>
                   <Text>Scopri di più</Text>
                   <Text>Vieni a vedere tutti i nuovi trend</Text>
               </Box>
               <Divider></Divider>
               ONLINE
               <Flex direction={'column'}>
                  <List>
                  {users?.map(elem=>
          <ListItem margin={2} key={Math.random()*2567} >
            <Avatar name={elem.name}></Avatar>
         <Button bg={'transparent'} rightIcon={<CheckCircleIcon color={'green'}></CheckCircleIcon>}>   <Link href={`users/${elem.id.toString()}`}   key = {elem.id.toString()}>{elem.username}<br/> </Link> </Button>
            
            </ListItem>
          )}    

                  </List>


               </Flex>


           </Flex>
    )
  }
  /*  <aside className='absolute right-1 top-24   h-[100%] w-[15%] '>
           <div className='border border-gray-400 border-r-2 h-[30%]' >
           <h2>TRENDING  <br></br>   
            Scopri di più!</h2>
            <span>Vieni a vedere tutti i nuovi trend</span>
 

          </div>
           <div  className=' border-t-2 mt-5 h-[7%]  w-[100%]'> 
            <span> Online</span>
            </div> 
           {users?.map(elem=>
          <div key={Math.random()*2567} className='flex m-2 cursor-pointer justify-start hover:bg-blue-600'>
            <Link href={`users/${elem.id.toString()}`} className='align-text-bottom m-2 cursor-pointer justify-start hover:bg-blue-600' onClick={openChat}  key = {elem.id.toString()}>{elem.username}<br/> </Link> 
            </div>
          )}  

         
      
  
          </aside> */