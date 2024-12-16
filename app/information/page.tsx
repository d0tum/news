import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-wrap bg-background p-6">
    <h1 className="text-left text-foreground text-head">Тетральная студия<br/>"Исключительно для..."</h1>
    <main className="grid grid-cols-2 gap-10 mt-2">

    <div className="text-foreground font-custom2 mt-10">

    ...при Санкт-Петербургском государственном морском техническом университете (СПБГМТУ) — это уникальный творческий коллектив, объединяющий студентов и выпускников университета, стремящихся выразить себя через искусство театра.
    <br/><br/>Здесь каждый может найти свое место — будь то на сцене или за кулисами. Атмосфера поддержки и взаимопомощи позволяет каждому раскрыть свой потенциал и преодолеть страхи публичных выступлений.
    <br/><br/>Коллектив представляет свои спектакли, участвует в студенческой городской весне и мероприятиях вуза. "Исключительно для..." — это не просто студия, это сообщество единомышленников, где царит дух творчества и дружбы. Мы верим, что театр способен объединять людей и вдохновлять на новые свершения!
    
    </div>
    <div className="flex items-center">
      <Image
      src={'/inf-pict.jpg'}
      alt="Картинка"
      width={600} 
      height={450}
      layout="fixed"></Image>
    </div>
    </main>
    <div className=' font-custom2 bg-foreground text-background text-center text-back p-3 rounded-2xl'>
        <Link href='./' className=''>Назад</Link>
    </div>
    </div>
  );
}
