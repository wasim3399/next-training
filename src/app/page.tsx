import Counter from '@/components/Counter'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className=' m-auto'>
      <h4 className="text-3xl text-gray-400 font-semibold tracking-widest font-sans uppercase">
          Redux Counter Application
        </h4>
        <Counter></Counter>
      </div>
    </main>
  )
}
