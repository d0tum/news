import React from 'react';
import Link from 'next/link';
import { getAllNews } from "@/app/lib/data";

export default async function NewsComponent(){
    const newsData = await getAllNews();
    console.log(newsData[0]);
    return(
        <div className="grid grid-cols-1 gap-4 bg-gray-700">
            {newsData.map((elem) =>(
                <Link href={`/news/${elem.id}`} key = {elem.id} className={"group"}>
                    <div key = {elem.id} className={"bg-red-500"}>
                        Hello, {elem.title}
                    </div>
                </Link>
            ))}
        </div>
    );
}