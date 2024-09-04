import { Flex, Heading, Input,Text, Box, Avatar } from '@chakra-ui/react'

import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'

export default function NavBar({name}) {



  return (
    <Box className=' w-[100%] h-[30%] fixed top-0 z-10'>
    <Flex justifyContent={'space-around'}  height={'30%'} alignItems={'center'} className=' bg-blue-800' gap={6}>
       <Heading color={'white'}>Feisbook</Heading>
       <Input  width={'30%'}  bg={'white'} name = "search" placeholder='Cerca qui i tuoi amici'></Input>
       
       
       <Flex alignItems={'center'}>
        
        
        <Avatar  name={name}></Avatar>
       </Flex>
    </Flex>
    </Box>
  )
}
