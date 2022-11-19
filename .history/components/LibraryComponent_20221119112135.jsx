import React from 'react'
import SongList from './SongList';
import { IoMdArrowRoundBack } from 'react-icons/io'

const LibraryComponent = () => {
    const router= useRouter
  return (
    <div className="space-y-10">
      <section className=''>
        <div className="m-4 cursor-pointer" onClick={() => router.back()}>
          <IoMdArrowRoundBack />
        </div>{" "}
        <h1 className="text-2xl">My Library</h1>
      </section>

      <section>
        <SongList />
      </section>
    </div>
  );
}

export default LibraryComponent