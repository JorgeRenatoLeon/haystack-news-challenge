'use client';
import FeedItemsContainer from '@/components/FeedItemsContainer';
import SearchInput from './SearchInput';

export default function Feed({ searchFunction, search, photos }) {
  return (
    <>
      <section className="search-section">
        <h5 className="fw-bold">Search by tag</h5>
        <SearchInput search={search} searchFunction={searchFunction} />
      </section>
      <section className="feed-section mt-4">
        <h5 className="fw-bold mb-4">Trending Photos Right Now</h5>
        {photos.length > 0 && <FeedItemsContainer photos={photos} />}
      </section>
    </>
  );
}
