"use client"
import Cards from '@/components/Cards';
import { usePathname } from 'next/navigation';
import Categories from '@/data/Categories';



const CategoryItems = ({params}) => {
  // let {category, subCategories} = params;
  console.log(params);
    const path = usePathname()
    const links = path.split('/')
    const Data = Categories.find((elem)=>elem.path === links[1])?.subCategories.find((elem)=>elem.path === links[2])?.items
  
      return (
      
      <div className='w-full h-screen'>
  
        <Cards data={Data}/>
      </div>
    )
  }
  

export default CategoryItems