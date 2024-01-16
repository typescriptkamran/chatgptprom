import CategoryItems from '@/components/CategoryItems'
import React from 'react'

export default function Data({params}) {
    const {category, subCategories} = params
  return (
    <div>
        <CategoryItems data ={params}/>
    </div>
  )
}

