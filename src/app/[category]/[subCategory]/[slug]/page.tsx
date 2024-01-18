import CategoryItems from '@/components/CategoryItems'


export default function Page({params: {category, subCategory, slug}}: {params: {category:string, subCategory:string, slug:string}}) {
    return (<div>
        
        {category}/{subCategory}/{slug}
        <div>
            
        </div>

        

    </div>)
}