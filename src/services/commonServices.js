import axios from "axios";
const URL_BASE = "https://www.flickr.com/services/rest/";

async function axiosRequest(method = "", data = {}) {
  return axios.get(URL_BASE, {
    params: {
      api_key: process.env.NEXT_PUBLIC_FLICKR_API_KEY,
      format: "json",
      nojsoncallback: 1,
      method,
      ...data,
    },
  });
}

export async function getFeed(perPage, page) {
  return axiosRequest(`flickr.interestingness.getList`, {
    per_page: perPage,
    page: page,
  });
}

export async function getTagFeed(tag, perPage, page) {
  return axiosRequest(`flickr.photos.search`, {
    tags: tag,
    sort: "interestingness-desc",
    safe_search: 1,
    per_page: perPage,
    page: page,
  });
}

export async function getPhotoInfo(photoId, secret) {
  return axiosRequest(`flickr.photos.getInfo`, {
    photo_id: photoId,
    secret,
  });
}

export async function getUserInfo(userId) {
  return axiosRequest(`flickr.profile.getProfile`, {
    user_id: userId,
  });
}
