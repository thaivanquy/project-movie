export function getYouTubeThumbnail(url) {
  const videoId = url.split("v=")[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function getTrailerURL(url) {
  const videoId = url.split("v=")[1];
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&muted=1`;
}

export function getPosterURL(url) {
  if (url.startsWith("http")) {
    return url;
  }
  return `https://phimimg.com/${url}`;
}

export function getThumbnailURL(url) {
  if (url.startsWith("http")) {
    return url;
  }
  return `https://phimimg.com/${url}`;
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}