'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import FeedItem from './FeedItem';
import LoadingSpinner from './LoadingSpinner';

export default function FeedContainer({ photos }) {
  const [showed, setShowed] = useState(4);

  function showMore() {
    setShowed(showed + 4);
  }

  useEffect(() => {
    setShowed(4);
  }, [photos]);

  const feedItems = photos?.slice(0, showed).map(photo => {
    return (
      <Suspense key={photo.id} fallback={<LoadingSpinner />}>
        <FeedItem photo={photo} />
      </Suspense>
    );
  });

  return (
    <>
      {photos.length > 0 && (
        <>
          <div className="feed-container d-flex flex-column gap-5">{feedItems}</div>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-primary" onClick={showMore}>
              Show more
            </button>
          </div>
        </>
      )}
    </>
  );
}
