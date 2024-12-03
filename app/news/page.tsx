import Image from "next/image";
import NewsComponent from "@/app/ui/news-component";
import { getAllNews } from "@/app/lib/data";

export default async function Home() {
  const newsData = await getAllNews();
 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className={"font-bold"}>In news page</p>

        <NewsComponent/>

    </main>
   </div> 
  );
}
