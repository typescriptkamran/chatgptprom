import Cards from '@/components/Cards';
import Categories from '@/data/Categories';



const CategoryItems = ({params}) => {

    const Data = Categories.find((elem)=>elem.path === params.category)?.subCategories.find((elem)=>elem.path === params.subCategory)?.items
  
      return (
      
      <div className='w-full h-screen'>
  
        <Cards data={Data}/>
      </div>
    )
  }
  

export default CategoryItems