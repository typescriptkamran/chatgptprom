import CategoryItems from '@/components/CategoryItems'
import SingleItem from '@/components/SingleItem'


export default function Page({params: {category, subCategory, slug}}: {params: {category:string, subCategory:string, slug:string}}) {
    return (<div key={slug}>
        
        
        <div>
            <SingleItem category={category} slug={slug} subCategory={subCategory} key={slug}/>
            
        </div>

        

    </div>)
}