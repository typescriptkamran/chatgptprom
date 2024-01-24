import CategoryItems from '@/components/CategoryItems'
import React from 'react'

export default function Items({params: {category}}: {params: {category: string}}) {
  return (
    <div>
        {category}
    </div>
  )
}

