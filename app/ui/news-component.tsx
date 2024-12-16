import React from 'react';
import Image from "next/image";
import Link from 'next/link';
// import { getAllNews } from "@/app/lib/data";
import { News } from '@prisma/client';

export default async function NewsComponent({newsData, isOneNews}: {newsData: News[], isOneNews: boolean}){
    // const newsData = await getAllNews(); 
    if (isOneNews){
        const elem = newsData[0];
        return(
            
            <div className=''>
            <h1 className='flex-start text-center text-foreground text-head mr-20'>{elem.title}</h1>
            <div className='flex'>
                <div className="flex-1 justify-around p-6 text-foreground">

                    <div className='bg-foreground text-background text-center rounded-2xl p-6'>{elem.excerpt}</div>
                    <div className='mt-7'>
                            {elem.text.split('\n').map((paragraph, index) => (
                                <p key={index} className='mb-4'>{paragraph}</p> // Здесь добавлены отступы
                            ))}
                        </div>
                </div>
                <div className='flex-2 mx-auto p-6 text-foreground'>
                    <div>{elem.date.toDateString()}</div>
                    <Image src={String(elem.image)} alt='Картинка' width={370} height={555}/>
                </div>
            </div>
            </div>
        );
    }
    return(
        <div className="grid grid-cols-3 gap-10">
                {newsData.map((elem) =>(
                
                    <div key = {elem.id} className='text-foreground text-center p-6'>
                        <Link href={`/news/${elem.id}`} key = {elem.id} className={"text-center text-back"}>
                            {elem.title}
                        </Link>

                    <div className='p-10 items-center'>
                        <Image src={String(elem.image)} alt='Картинка' width={300} height={450} />
                    </div>
                    </div>     
            ))}
        </div>
    );
}