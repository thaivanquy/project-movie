<template>
  <header class="header__container" :class="{ sticky: isSticky }">
    <div class="header__container-hamburger" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg>
    </div>
    <div class="header__container-logo">
      <router-link :to="{ name: 'HomeView' }">
        Phim<span class="header__container-highlight">Inn</span>
      </router-link>
    </div>
    <div class="header__container-nav">
      <div class="header__container-nav-list">
        <router-link :to="{ name: 'SearchView' }" class="header__container-nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
          Tìm kiếm
        </router-link>
        <router-link :to="{ name: 'TopView' }" class="header__container-nav-item">
          Phim hot
        </router-link>
        <router-link :to="{ name: 'SeriesView' }" class="header__container-nav-item" :class="{ active: $route.name === 'SeriesView' }">
          Phim bộ
        </router-link>
        <router-link :to="{ name: 'SingleView' }" class="header__container-nav-item" :class="{ active: $route.name === 'SingleView' }">
          Phim lẻ
        </router-link>
        <router-link :to="{ name: 'NewView' }" class="header__container-nav-item" :class="{ active: $route.name === 'NewView' }">
          Phim mới
        </router-link>
        <router-link :to="{ name: 'FaqView' }" class="header__container-nav-item" :class="{ active: $route.name === 'FaqView' }">
          FAQs
        </router-link>
      </div>
      <div class="header__container-nav-login">
        <a href="">
          Đăng nhập
        </a>
      </div>
    </div>
    <div class="mobile__menu-overlay" id="mobileMenu" v-if="isMenu" @click="toggleMenu">
      <div class="mobile__menu-container" @click.stop :class="{ 'menu-visible': isMenu }">
        <div class="mobile__menu-login">
          <a href="" @click="toggleMenu">
            Đăng nhập
          </a>
        </div>
        <hr class="mobile__menu-hr">
        <div class="mobile__menu-list">
          <router-link :to="{ name: 'TopView' }" class="mobile__menu-item" @click.native="toggleMenu">
            Phim hot
          </router-link>
          <router-link :to="{ name: 'SeriesView' }" class="mobile__menu-item" @click.native="toggleMenu">
            Phim bộ
          </router-link>
          <router-link :to="{ name: 'SingleView' }" class="mobile__menu-item" @click.native="toggleMenu">
            Phim lẻ
          </router-link>
          <router-link :to="{ name: 'NewView' }" class="mobile__menu-item" @click.native="toggleMenu">
            Phim mới
          </router-link>
          <router-link :to="{ name: 'FaqView' }" class="mobile__menu-item" @click.native="toggleMenu">
            FAQs
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenu: false,
      isSticky: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
    handleScroll() {
      this.isSticky = window.scrollY > 50;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
.header__container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.5s ease;
}

.sticky {
  background-color: #3e1967;
}

.header__container-hamburger {
  display: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  margin: 0 12px;
}

.header__container-hamburger svg {
  fill: #fff;
}

.header__container-logo {
  padding: 8px 12px;
  font-size: 36px;
  font-weight: 400px;
  line-height: 54px;
}

.header__container-logo a {
  font-family: 'Dancing Script', cursive;
  background: linear-gradient(-90deg,#adfbda,#35c3ff 30%,#fda399 50%,#76d880 70%,#ebf38b 90%,#adfbda);
  -webkit-animation: logo-animation 20s linear infinite alternate;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes logo-animation {
  0% {
    background-position: 0 0;
  }

  100% {
      background-position: -500px 0;
  }
}

.header__container-highlight {
  background: linear-gradient(to right, #84fab0, #8fd3f4, #e0c3fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header__container-nav {
  display: flex;
  flex: 2;
  justify-content: space-between;
}

.header__container-nav-list {
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  box-sizing: border-box;
}

.header__container-nav-item {
  padding: 8px 12px;
  color: #fff !important;
}

.header__container-nav-item:hover {
  color: #428bca;
  border-bottom: 1px solid #428bca;
}

.header__container-nav-item svg {
  width: 16px;
  height: 16px;
  fill: #fff;
}

.header__container-nav-login {
  padding: 0 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.header__container-nav-login a {
  display: block;
  color: #fff !important;
  padding: 8px 12px;
  border-radius: 4px !important;
  background-color: #cf2122;
}

.active {
  border-bottom: 1px solid #428bca !important;
}

@media (max-width: 768px) {
  .header__container-hamburger {
    display: block;
  }

  .header__container-nav {
    justify-content: flex-end !important;
    margin-right: 12px;
  }

  .header__container-nav-item:nth-child(2),
  .header__container-nav-item:nth-child(3),
  .header__container-nav-item:nth-child(4),
  .header__container-nav-item:nth-child(5),
  .header__container-nav-item:nth-child(6) {
    display: none;
  }

  .header__container-nav-login {
    display: none;
  }

  .mobile__menu-overlay {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #0009;
    z-index: 9999;
  }

  .mobile__menu-container {
    width: 50%;
    height: 100%;
    background-color: #0b1e30;
    padding: 15px 15px;
    box-sizing: border-box;
    animation: slideIn 0.3s ease-in-out;
  }

  .mobile__menu-login {
    display: block;
    width: 100%;
    max-width: 105px;
    color: #fff;
    padding: 8px 12px;
    border-radius: 4px !important;
    background-color: #cf2122;
  }

  .mobile__menu-hr {
    margin: 30px -15px;
    background-color: #fff !important;
    border: none;
    display: block;
    height: 2px;
    opacity: 1 !important;
  }

  .mobile__menu-list {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    box-sizing: border-box;
    color: #fff;
    gap: 10px;
  }

  .menu-visible {
    animation: slideIn 0.3s ease-in-out;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>