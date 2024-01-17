import CategoryItems from '@/components/CategoryItems'
import React from 'react'

export default function Data({params}) {
    const {category, subCategory} = params
  return (
    <div>
      {category}/{subCategory}

        <CategoryItems params ={params}/>
    </div>
  )
}

