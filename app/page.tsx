import Link from "next/link";
import { getAllNews } from "./lib/data";
import Image from 'next/image';
//import profilePic from 'public/pict.jpg'



export default async function Home() {
  const newsData = await getAllNews();
  return (

    <div className="flex flex-col items-center flex-wrap bg-background p-6">
    <h1 className="text-center text-foreground text-head mr-20 mb-7">Тетральная студия "Исключительно для..."</h1>

    <Image
    className="flex items-center rounded-2xl"
      src={'/pict.jpg'}
      alt="Обложка" 
      width={1024}
      height={768}/>

    <main className="grid grid-cols-3 gap-10 mt-20">
      <div key={1} className="bg-foreground text-background text-center text-buttons font-custom2 p-6 rounded-2xl">
          <Link href='/information'>О нас</Link>
      </div>
      <div key={2} className="bg-foreground text-background text-center text-buttons font-custom2 p-6 rounded-2xl">
          <Link href='/news'>Новости</Link>
      </div>
      <div key={3} className="bg-foreground text-background text-center text-buttons font-custom2 p-6 rounded-2xl">
          <Link href='/contacts'>Контакты</Link>
      </div>


    </main>
    </div>
  );
}
