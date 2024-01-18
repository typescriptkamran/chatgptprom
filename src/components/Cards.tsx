'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import ButtonMain from './ButtonMain'
import { Product } from '@/data/Categories'
import Link from 'next/link'


const Cards = ({products, category, subCategory}: {products:Product[], category: string, subCategory: string}) => {
  return (
    <div className='flex flex-wrap gap-5 justify-between p-5'>
        {products.map(({ description, id, name, price,slug}) => {
          return (
            <Link href={`/${category}/${subCategory}/${slug}`}>
            <div key={id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
              <div className="border-solid border-2 font-bold rounded-xl p-5 cursor-pointer">
                {/* <img src={imageUrl} alt={name} className="w-full h-32 object-cover mb-2" /> */}
                
                <div>{name}</div>  
              </div>
              
              <div>{`USD: ${price}`}</div>
              <div>{description}</div>
              <div className='flex gap-3 justify-between'>
              <ButtonMain name= "buy" />
              <ButtonMain name= "Add to Cart" />
              
              </div>
            </div>
            </Link>
          )
        })}
      </div>
  )
}

export default Cards

