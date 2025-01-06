<template>
  <footer class="footer__container">
    <div class="footer__container-wrapper">
      <h3 class="footer__container-title">
        Phim chất lượng cao online của <a href="/" class="footer__container-link">PhimInn</a> khác gì so với các trang phim khác?
      </h3>
      <div class="footer__container-des">
        <ul class="footer__container-list">
          <li class="footer__container-item">Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân giải HD (720p) là cao nhất</li>
          <li class="footer__container-item">Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần phim online thông thường - đây là yếu tố quyết định độ nét của phim (thậm chí còn quan trọng hơn độ phân giải)</li>
          <li class="footer__container-item">Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang phim khác (kể cả Youtube)</li>
          <li class="footer__container-item">Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải cao</li>
          <li class="footer__container-item">Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề của riêng mình để xem online</li>
          <li class="footer__container-item">Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh & tiếng Việt), phù hợp với những người muốn học tiếng Anh qua phụ đề phim</li>
        </ul>
      </div>
    </div> 
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
.footer__container {
  background: url('../assets/imgs/bg-footer.jpg');
  min-height: 418px;
  padding: 48px 24px 96px 24px;
}

.footer__container-wrapper {
  margin: 0 65px;
  font-size: 16px;
  line-height: 18px;  
}

.footer__container-title {
  font-size: 16px !important;
  color: rgb(255, 255, 255);
  font-weight: 600;
  margin-bottom: 24px;
}

.footer__container-link {
  color: rgb(66, 139, 202);
}

.footer__container-list {
  list-style: none;
  list-style-type: circle;
}

.footer__container-item {
  color: rgb(181, 181, 181);
  line-height: 24px !important;
  font-weight: 400;
}

@media (max-width: 1024px) {
  .footer__container-wrapper {
    margin: 0;
  }
}
</style>