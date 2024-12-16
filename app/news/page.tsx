import { News } from '@prisma/client';
import Link from 'next/link';
import { getAllNews } from '../lib/data';
import NewsComponent from '../ui/news-component';


export default async function Page() {
  const newsData = await getAllNews();
  return (
    <div className='flex flex-col items-center bg-background p-3 min-h-screen'>
      <h1 className="text-center text-foreground text-head">Последние новости</h1>
      <div className="grid grid-cols-3 gap-10"></div>
        <NewsComponent newsData = {newsData} isOneNews={false}/>
      <div/>
      <div className='font-custom2 bg-foreground text-background text-center text-back p-3 rounded-2xl mt-0'>
        <Link href='./' className=''>Назад</Link>
      </div>
    </div>
  );
}