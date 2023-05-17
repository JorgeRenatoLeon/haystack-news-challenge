"use client";
import Head from "next/head";
import { getTagFeed } from "@/services/commonServices";
import Feed from "@/components/Feed";
import { useEffect, useState } from "react";

export default function Tag({ params }) {
  const [photos, setPhotos] = useState(null);
  const [search, setSearch] = useState(params.tagName);

  const photosPerPage = 10;

  async function getPhotos(tag = null, page = 1) {
    if (!tag) {
      tag = search;
    }
    setSearch(tag);
    const text = decodeURIComponent(tag);
    const listPhotos = await getTagFeed(text, photosPerPage, page);
    setPhotos(listPhotos);
  }

  useEffect(() => {
    getPhotos(params.tagName);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="title"
          content={`PhotoSearch - Search: ${params.tagName}`}
        />
        <meta
          name="description"
          content={`Search photos from tag ${params.tagName}`}
        />
        <meta name="keywords" content="flickr, photos, search, images" />
        <meta name="language" content="English" />
      </Head>

      <div className="home-container w-50">
        {photos && (
          <Feed
            photos={photos?.data.photos.photo}
            pages={photos?.data.photos.pages}
            search={decodeURIComponent(search)}
            searchFunction={getPhotos}
          />
        )}
      </div>
    </>
  );
}
