<template>
  <div class="video_container">
    <div class="video__wrapper">
      <iframe
        ref="videoPlayer"
        class="video-js vjs-default-skin"
        :src="videoPlaying"
        frameborder="0"
        allow="accelerometer; autoplay; muted; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";

export default {
  name: "VideoComponent",
  props: {
    videoPlaying: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
.video_container {
  display: flex;
  justify-content: space-between;
}

.video__wrapper {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
}

.video__wrapper iframe {
  width: 100%;
  min-height: 650px;
}

@media (max-width: 768px) {
  .video__wrapper iframe {
    width: 100%;
    min-height: 280px;
  }
}
</style>
