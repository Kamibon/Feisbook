import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/navBar";
import { use } from "react";
import Searchbar from "./components/searchbar";
import Trending from "./components/trending";
import SideBar from "./components/sideBar";
import Think from "./components/think";


export default function Home() {

  


  return (
    <>
    
    {/* <Link href={"/test"}> Moderfaca</Link> */}
    
    <Searchbar name = "Io"  searched ={[]}/>
    <Trending openChat = {false}></Trending>
    <SideBar/>
    <Think/>
    </>
  );
}
