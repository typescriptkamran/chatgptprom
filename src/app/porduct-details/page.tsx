"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
function page() {
    const params = useSearchParams()
    console.log(params)
    
      return (
    <div>product details</div>
  )
}

export default page