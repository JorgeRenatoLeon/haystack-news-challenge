"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import FeedItem from "./FeedItem";
import LoadingSpinner from "./LoadingSpinner";

export default function FeedContainer({
  photos,
  search,
  searchFunction,
  pages,
}) {
  const [pageSelected, setPageSelected] = useState(1);

  useEffect(() => {
    setPageSelected(1);
  }, [search]);

  const loadPage = (page) => {
    console.log("loadPage", page, search);
    setPageSelected(page);
    searchFunction(search, page);
  };

  const feedItems = photos.map((photo) => {
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
          <div className="feed-container d-flex flex-column gap-5">
            {feedItems}
          </div>
          <nav aria-label="Page navigation" style={{ marginTop: "25px" }}>
            <ul
              className="pagination d-flex flex-wrap justify-content-center"
              style={{ rowGap: "10px" }}
            >
              <li
                className={
                  "page-item" + (pageSelected === 1 ? " disabled" : "")
                }
                onClick={() => loadPage(pageSelected - 1)}
              >
                <div className="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </div>
              </li>
              <>
                {pageSelected !== 1 && pageSelected - 2 > 0 && (
                  <>
                    <li className="page-item" onClick={() => loadPage(1)}>
                      <div className="page-link">1</div>
                    </li>
                    {pageSelected - 2 > 1 && (
                      <li className={"page-item disabled"}>
                        <div className="page-link">...</div>
                      </li>
                    )}
                  </>
                )}
                {pageSelected - 1 > 0 && (
                  <li
                    className="page-item"
                    onClick={() => loadPage(pageSelected - 1)}
                  >
                    <div className="page-link"> {pageSelected - 1}</div>
                  </li>
                )}
                <li className="page-item active">
                  <div className="page-link">{pageSelected}</div>
                </li>
                {pageSelected + 1 <= pages && (
                  <li
                    className="page-item"
                    onClick={() => loadPage(pageSelected + 1)}
                  >
                    <div className="page-link">{pageSelected + 1}</div>
                  </li>
                )}
                {pageSelected !== pages && pageSelected + 1 < pages && (
                  <>
                    {pageSelected + 2 < pages && (
                      <li className={"page-item disabled"}>
                        <div className="page-link">...</div>
                      </li>
                    )}
                    <li className="page-item" onClick={() => loadPage(pages)}>
                      <div className="page-link">{pages}</div>
                    </li>
                  </>
                )}
              </>
              <li
                className={
                  "page-item" + (pageSelected === pages ? " disabled" : "")
                }
                onClick={() => loadPage(pageSelected + 1)}
              >
                <div className="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </div>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
