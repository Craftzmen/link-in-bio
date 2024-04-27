import * as React from "react";
import LinkItem from "@/app/components/LinkItem"
import { LinkedIn, Github, Medium, Twitter } from "@/app/components/Icon"
import Image from "next/image"
import ProfileImg from "@/app/assets/profile.png";
import BgImage from "@/app/assets/bg-3.jpg";

const Page = () => {
  return (
      <div className="h-screen w-full" >
        <Image src={BgImage} alt='bg-image' className="z-0 w-full h-full object-cover absolute" />
        <div className='z-10 w-full flex flex-col items-center py-10 px-14'>
          <Image src={ProfileImg} alt='profile-img' className="border-4 border-white z-10 rounded-full w-40 aspect-square" />
          <h1 className="mt-6 text-white font-semibold z-10 bg-zinc-900/40 backdrop-blur-md px-4 py-2.5 rounded-full border-2 border-zinc-800" >@Craftzmen</h1>
          <div className="max-w-md mx-auto flex flex-col gap-5 text-white mt-10 lg:mt-20 w-full">
            <LinkItem icon={<LinkedIn/>} url={"https://www.linkedin.com/in/abdullah-imran-592550267/"}>Linkedin</LinkItem>
            <LinkItem icon={<Github/>} url={"https://github.com/Craftzmen/"} >Github</LinkItem>
            <LinkItem icon={<Medium/>} url={"https://medium.com/@abdullah.imran.code/"} >Medium</LinkItem>
            <LinkItem icon={<Twitter/>} url={"https://x.com/Craftzmen/"} >Twitter</LinkItem>
          </div>
        </div>
      </div>
  )
}

export default Page;
