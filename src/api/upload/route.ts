import { NextResponse } from "next/server"
import {writeFile} from 'fs/promises'

export async function Post(req:any){
    const data = await req.formData()
    const file:any = data.get('file')
    if (!file) {
        return NextResponse.json({'message': 'no image found', success: false})
    }
    const byteData= await file.arrayBuffer()
    const buffer = Buffer.from(byteData)
    const path=`./public/${file.name}`
    writeFile(path, buffer)
    return NextResponse.json({'mesage': 'file upload complete', success: true})

}
