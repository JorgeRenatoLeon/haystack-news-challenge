'use client';
import Feed from '@/components/Feed';
import { getFeed, getTagFeed } from '@/services/commonServices';
import { useEffect, useState } from 'react';

export default function Home() {
  const [photos, setPhotos] = useState(null);

  async function getPhotos(tag = null) {
    let listPhotos = null;
    if (!tag) {
      listPhotos = await getFeed();
    } else {
      listPhotos = await getTagFeed(tag);
    }
    setPhotos(listPhotos);
    return;
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div className="home-container w-50">
        {photos && <Feed photos={photos?.data.photos.photo} searchFunction={getPhotos} />}
      </div>
    </>
  );
}
