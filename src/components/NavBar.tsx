import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import React from 'react'

function NavBar() {
  return (
    <div className='flex bg-slate-200 py-1 px-2 items-center justify-between'>
         <p>Gifts Bouquets</p>
         <Avatarimg />

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
