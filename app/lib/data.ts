import prisma from '@/app/lib/db'
// import {news} from '@prisma/client';
// import { error } from 'console';
// import {Prisma} from '@prisma/client';
import { unstable_noStore as noStore } from 'next/cache';


export async function getAllNews(){
    noStore();
    try {
        const data = await prisma.news.findMany();
        return data
    } catch (error){
        console.error("Database Error:", error)
        throw new Error("Failed to fetch employee data.")
    }

}
    
export async function getNewsById(id:number) {
    noStore();
    try{
        const data = await prisma.news.findUnique(
            {
                where: {id}
            }
        );
        
        return data;} 
        catch (error) {
        console.error("Database Error", error);
        throw new Error("Failed to fetch news data.");
    }
}



