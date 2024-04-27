import * as React from "react";
import Link from 'next/link'

interface LinkProps {
    icon: React.ReactNode;
    children: any;
    url: string;
}

const LinkItem = ({icon, children, url}: LinkProps) => {
    return (
      <div class="flex flex-col">
        <div class="z-10 rounded-t-full w-full h-2 bg-gradient-to-r from-transparent via-[#EB873A] to-transparent"></div>
        <Link href={url} target={'_blank'} className="hover:scale-[1.1] duration-200 font-medium bg-zinc-901/40 backdrop-blur-md p-4 rounded-b-lg flex-1 inline-flex items-center gap-3 justify-center">
          {icon}
          {children}
        </Link>
      </div>
    )
}

export default LinkItem;
