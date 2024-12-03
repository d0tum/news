import { getNewsById } from "@/app/lib/data";
import NewsComponent from "@/app/ui/news-component";

export default async function Page({params}: {params: {slug: string}}){
    const {slug} = await params
    const newsData = await getNewsById(Number(slug));
    const newsArray = newsData? [newsData] : [];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify">
            <main className="flex flex-col gap-8 row-start-2 items-centre">
                <NewsComponent newsData={newsArray} />
            </main>
        </div>
    )
}