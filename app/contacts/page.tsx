import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-wrap items-center bg-background p-6">
    <h1 className="text-left text-foreground text-head mx-20">Где мы находимся?</h1>
    <main className="grid grid-cols-2 gap-10 mt-2">

    <div className="text-foreground font-custom2 p-6 m-20">
    Всё очень просто! Записывайте адрес:<br/><br/>
    Санкт-Петербург,проспект Стачек, 111к3, театральный зал<br/><br/>
    
    Наши занятия проходят по понедельникам и пятницам с 19:00 до 22:00<br/><br/>
    
    По всем вопросам обращайтесь к нашему руководителю: Сати Саркисьянц<br/><br/>
    Номер телефона: +7-(952)-067-90-24
    </div>
    <div className="flex items-center">
      <Image
      src={'/location.jpg'}
      alt="Картинка"
      width={550} 
      height={300}
      layout="fixed"></Image>
    </div>
    </main>
    <div className=' font-custom2 bg-foreground text-background text-center text-back p-3 rounded-2xl'>
        <Link href='./' className=''>Назад</Link>
    </div>
    </div>
  );
}
