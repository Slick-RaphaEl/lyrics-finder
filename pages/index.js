import Head from 'next/head';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';


export default function Home() {

  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Lyrics translator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex flex-col w-2/3 ml-[15%] mt-[10%]">
        <h1 className="text-4xl mb-10 ml-[35%] items-center">Lyrics translator</h1>
        <p className="text-xl">
          This is a simple lyrics translator. Search your favourite songs in the box above and you can easily find and translate the lyrics to one of the given languages
        </p>
      </div>
      
    </div>
  )
}
