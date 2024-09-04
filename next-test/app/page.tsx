import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/navBar";
import { Suspense, use } from "react";
import Searchbar from "./components/searchbar";
import Trending from "./components/trending";
import SideBar from "./components/sideBar";
import Think from "./components/think";
import { Metadata } from "next";
import PostSection from "./components/postSection";
import { useDispatch } from "react-redux";
import { Flex } from "@chakra-ui/react";

export const metadata: Metadata ={
  title:"Feisbook"
}

export default function Home() {




  return (
    <div >
    
    
    <Suspense fallback = {"Miao"}>
      
    <Searchbar  />
    
    <Flex>
    <PostSection/>
    <Trending ></Trending>
    
    <SideBar/>
    </Flex>
    
    </Suspense>
    
    
    </div>
  );
}
