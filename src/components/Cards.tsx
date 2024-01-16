import React from 'react'

const Cards = ({data}) => {
  return (
    <div className='flex flex-wrap gap-5 justify-between p-5'>
        {data.map(({ id, name, description, price, imageUrl }) => {
          return (
            <div key={id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
              <div className="border-solid border-2 font-bold rounded-xl p-5">
                <img src={imageUrl} alt={name} className="w-full h-32 object-cover mb-2" />
                {name}
                
              </div>
              <div>{`USD: ${price}`}</div>
              <div>{description}</div>

            </div>
          )
        })}
      </div>
  )
}

export default Cards