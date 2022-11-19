import React from 'react'
import SongList from './SongList';

const LibraryComponent = () => {
  return (
    <div>
          <h1 className='text-2xl'>My Library</h1>
          <section><SongList/></section>
    </div>
  );
}

export default LibraryComponent