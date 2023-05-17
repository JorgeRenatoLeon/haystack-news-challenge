"use client";
import Feed from "@/components/Feed";
import { getFeed, getTagFeed } from "@/services/commonServices";
import { useEffect, useState } from "react";

export default function Home() {
  const [photos, setPhotos] = useState(null);
  const [search, setSearch] = useState("");

  const photosPerPage = 10;

  async function getPhotos(tag = null, page = 1) {
    let listPhotos = null;
    if (!tag) {
      listPhotos = await getFeed(photosPerPage, page);
    } else {
      setSearch(tag);
      listPhotos = await getTagFeed(tag, photosPerPage, page);
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
        {photos && (
          <Feed
            photos={photos?.data.photos.photo}
            pages={photos?.data.photos.pages}
            search={search}
            searchFunction={getPhotos}
          />
        )}
      </div>
    </>
  );
}
