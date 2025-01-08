export function getYouTubeThumbnail(url) {
  const videoId = url.split("v=")[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function getTrailerURL(url) {
  const videoId = url.split("v=")[1];
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&muted=1`;
}
