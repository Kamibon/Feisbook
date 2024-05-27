import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/navBar";
import { use } from "react";
import Searchbar from "./components/searchbar";
import Trending from "./components/trending";
import SideBar from "./components/sideBar";
import Think from "./components/think";
import { Metadata } from "next";
import PostSection from "./components/postSection";

export const metadata: Metadata ={
  title:"Feisbook"
}

export default function Home() {

  


  return (
    <div >
    
    {/* <Link href={"/test"}> Moderfaca</Link> */}
    
    <Searchbar name = "Io"  />
    <PostSection/>
    <Trending ></Trending>
    <SideBar/>
    
    </div>
  );
}
