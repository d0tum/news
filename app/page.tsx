import Link from "next/link";
import { getAllNews } from "./lib/data";
import Image from 'next/image';
import profilePic from 'C:/Users/tuman/news/public/pict.jpg'



export default async function Home() {
  const newsData = await getAllNews();
  return (

    <div className="">
    <h1 className="custom-text">Тетральная студия "Исключительно для..."</h1>
    <Image
    className="img"
      src={profilePic}
      alt="Обложка" 
      width={1200}/>

      <main className="buttons">
        <div key={1} className="button">
          <Link href='/information'>О нас</Link>
        </div>
        <div key={2} className="button">
          <Link href='/news'>Новости</Link>
        </div>
        <div key={3} className="button">
          <Link href='/contacts'>Контакты</Link>
        </div>
        </main>
    </div>
  );
}
