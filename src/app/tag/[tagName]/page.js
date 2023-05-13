'use client';
import Head from 'next/head';
import { getTagFeed } from '@/services/commonServices';
import Feed from '@/components/Feed';
import { useEffect, useState } from 'react';

export default function Tag({ params }) {
  const [photos, setPhotos] = useState(null);

  async function getPhotos(tag) {
    const text = decodeURIComponent(tag);
    const listPhotos = await getTagFeed(text);
    setPhotos(listPhotos);
  }

  useEffect(() => {
    getPhotos(params.tagName);
  }, []);

  return (
    <>
      <Head>
        <meta name="title" content={`PhotoSearch - Search: ${params.tagName}`} />
        <meta name="description" content={`Search photos from tag ${params.tagName}`} />
        <meta name="keywords" content="flickr, photos, search, images" />
        <meta name="language" content="English" />
      </Head>

      <div className="home-container w-50">
        {photos && (
          <Feed
            photos={photos?.data.photos.photo}
            search={decodeURIComponent(params.tagName)}
            searchFunction={getPhotos}
          />
        )}
      </div>
    </>
  );
}
