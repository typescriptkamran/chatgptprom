'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import ButtonMain from './ButtonMain'


const Cards = ({params}) => {
  let router = useRouter()
  return (
    <div className='flex flex-wrap gap-5 justify-between p-5'>
        {params.map(({ id, name, description, price, imageUrl, category, subCategory, }) => {
          return (
            <div key={id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
              <div className="border-solid border-2 font-bold rounded-xl p-5 cursor-pointer"
              onClick={()=>router.push(`/porduct-details?category=${category}&subCategory${subCategory}&`)}>
                <img src={imageUrl} alt={name} className="w-full h-32 object-cover mb-2" />
                
                <div>{name}</div>  
              </div>
              
              <div>{`USD: ${price}`}</div>
              <div>{description}</div>
              <div className='flex gap-3 justify-between'>
              <ButtonMain name= "buy" />
              <ButtonMain name= "Add to Cart" />
              
              </div>

            </div>
          )
        })}
      </div>
  )
}

export default Cards

