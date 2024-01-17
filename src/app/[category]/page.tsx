import CategoryItems from '@/components/CategoryItems'
import React from 'react'

export default function Items({params}) {
    const {category, subCategory} = params
    console.log(params)

  return (
    <div>
        {category}/{subCategory}
    </div>
  )
}

