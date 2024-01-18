import CategoryItems from '@/components/CategoryItems'
import React from 'react'

export default function Data({params: {category, subCategory}}: {params: {category:string, subCategory: string}}) {
  return (
    <div>
      {category}/{subCategory}

        <CategoryItems categoryParam={category} subCategoryParam={subCategory}/>
    </div>
  )
}

