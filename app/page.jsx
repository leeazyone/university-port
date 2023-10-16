import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header></Header>
      <h1 className='text-2xl mb-4 font-mono text-center'>
        <br></br>My Portfolio✨
      </h1>
      <p className='mb-8 font-mono text-center'>
        This is a web page that collects my web projects
      </p>
      <div className='centered-image-container'>
        <Image
          src='/img/me.png'
          alt='me'
          width={300}
          height={200}
          className='centered-image'
        />
      </div>
    </>
  )
}
