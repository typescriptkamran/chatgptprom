import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link"
import { ShoppingCart, Bell } from 'lucide-react';


import React from 'react'

function NavBar() {
  return (
    <div className='flex bg-slate-900 py-1 px-2 items-center justify-between text-white'>
         <Link href="{}">
         <p>Gifts Bouquets</p>
         </Link>
         <div className="flex items-center gap-5">
         <div className="flex gap-1">
         <ShoppingCart />
         <span>5</span>
         </div>
         <div className="flex gap-1">
         <Bell />
         <span className="bg-red-500 rounded-full absolute px-2 mt-[-10px] ml-3">5</span>
         </div>
         <Avatarimg />
         </div>

    </div>
  )
}

export default NavBar


export function Avatarimg() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
