import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Social</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-[#29292f] min-h-screen flex max-w-[1500px] mx-auto'>
        <Sidebar />
        <Feed/>
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
