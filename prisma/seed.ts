import prisma from "@/app/lib/db";
// import { title } from "process";
// import { text } from "stream/consumers";

async function main() {
    const newsArray = [
        {
            title: 'New Features in Prisma',
            date: new Date('2024-12-1'),
            execerpt: 'Prisma introduces new features in the latest release.',
            text: 'Full details of all new features and improvements in Prisma.',
            image: '',
        },
        {
            title: 'Ла ла ла',
            date: new Date('2024-11-30'),
            execerpt: 'Пу пу пу',
            text: 'На на на',
            image: '',
        },
    ];

    for (const newsData of newsArray){
        await prisma.news.upsert({
            where: { title: newsData.title},
            update:{
                date: newsData.date,
                excerpt: newsData.execerpt,
                text: newsData.text,
                image: newsData.image,
            },
            create:{
                title: newsData.title,
                date: newsData.date,
                excerpt: newsData.execerpt,
                text: newsData.text,
                image: newsData.image,

            },
        });
        console.log(`Upserted news: ${newsData.title}`);
    }
}

main()
    .then(async ()=> {
        await prisma.$disconnect();
    })
    .catch(async (e) =>{
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
