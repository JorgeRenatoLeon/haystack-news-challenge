"use client";
import { formatDate, formatURLParam } from "@/utils/commonFunctions";
import { getPhotoInfo, getUserInfo } from "@/services/commonServices";

import Link from "next/link";

import "@/styles/feedItem.scss";
import { useEffect, useState } from "react";
import Image from "next/image";

export default async function FeedItem(params) {
  const [userInfo, setUserInfo] = useState(null);
  const [photoInfo, setPhotoInfo] = useState(null);

  const tags = photoInfo?.data.photo.tags?.tag.slice(0, 3).map((tag) => {
    return (
      <Link href={`/tag/${formatURLParam(tag.raw)}`} key={tag.id}>
        <span key={tag.id} className="badge tag-badge py-2">
          {tag.raw}
        </span>
      </Link>
    );
  });

  async function getData() {
    const userInfoData = await getUserInfo(params.photo.owner);
    setUserInfo(userInfoData);
    const photoInfoData = await getPhotoInfo(
      params.photo.id,
      params.photo.secret
    );
    setPhotoInfo(photoInfoData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="feed-item">
      {photoInfo && userInfo && (
        <>
          <Image
            key={params.photo.id}
            width={200}
            height={200}
            quality={100}
            className="feed-item-image"
            src={`https://live.staticflickr.com/${params.photo.server}/${params.photo.id}_${params.photo.secret}_b.jpg}`}
            alt={params.photo.title}
            placeholder="blur"
            blurDataURL="https://live.staticflickr.com/65535/47983077952_73afef2da3_o.jpg"
          />
          <div className="feed-item-info-container d-flex p-2">
            <div className="feed-item-info w-50">
              <div className="feed-item-author">
                by
                <strong>
                  {userInfo.data.profile.first_name
                    ? ` ${userInfo.data.profile.first_name}`
                    : ""}
                  {userInfo.data.profile.last_name
                    ? ` ${userInfo.data.profile.last_name}`
                    : ""}
                  {!userInfo.data.profile.first_name &&
                  !userInfo.data.profile.last_name
                    ? ` User ${params.photo.owner}`
                    : ""}
                </strong>
              </div>
              <div className="feed-item-date">
                Taken{" "}
                {formatDate(
                  new Date(
                    parseInt(photoInfo.data.photo.dates.lastupdate) * 1000
                  )
                )}
              </div>
            </div>
            <div className="feed-item-tags w-50 d-flex flex-wrap gap-2 align-items-center ms-auto">
              {tags}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
