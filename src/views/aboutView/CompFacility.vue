<template>
  <div style="padding: 20px">
    <!--    <Carousel loop dots="inside" arrow="always">-->
    <!--      <CarouselItem v-for="(item,index) in dataList">-->
    <!--        <img v-img:group class="comp-intro-banner" :src="item.imgUrl" alt="item.title">-->
    <!--      </CarouselItem>-->
    <!--    </Carousel>-->
    <!--    <md-card-media style="height: 500px">-->
    <!--    swiper1-->
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" v-if="dataList.length > 0">
      <swiper-slide v-for="(item,index) in dataList">
        <img v-img:group class="comp-intro-banner"
             :src="item.imgUrl" alt="item.title">
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs" v-if="dataList.length > 0">
      <swiper-slide v-for="(item,index) in dataList">
        <img class="comp-intro-banner"
             :src="item.imgUrl" alt="item.title">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      isInit: 1,
      dataList: [],
      total: 0,
      pageNumber: 1,
      // swiperOptionTop: {
      //   spaceBetween: 10,
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev'
      //   },
      // },
      // swiperOptionThumbs: {
      //   spaceBetween: 10,
      //   centeredSlides: true,
      //   slidesPerView: 4,
      //   touchRatio: 0.2,
      //   slideToClickedSlide: true,
      // }
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
      }
    }
  },
  methods: {
    /**
     * 获取全部数据
     */
    getDataLsit () {
      var _this = this
      const url = 'website_bsm/website/getAlbumImgs'
      var data = {
        albumId: '23',
        showMethod: '1',
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3',
        pageNumber: this.pageNumber,
        pageSize: '5'
      }
      axios.get(url, {
        params: data
      }).then((res) => {
        this.dataList = res.data.data
        this.total = res.data.total
      })
    }
  },
  updated () {
    if (this.isInit === 1) {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        // console.log(this.$refs)
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
      this.isInit = 0
    }
  },
  created () {
    this.getDataLsit()
  },
  mounted () {
  }
}

</script>

<style scoped>
  .comp-intro-banner {
    width: 100%;
    max-height: 316px;
    min-height: 170px;
    object-fit: cover;
  }

  /* 大于992 */
  @media screen and (min-width: 992px) {
    .comp-intro-banner {
      max-height: 400px;
    }
  }

  @media screen and (min-width: 1600px) {
    .comp-intro-banner {
      max-height: 600px;
    }
  }
</style>
<style scoped>
  swiper-container {
    background-color: #000;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .gallery-top {
    height: 80% !important;
    width: 100%;
  }

  .gallery-thumbs {
    height: 20% !important;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 1;
  }

  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
    border: 3px solid #C81F1F;
  }
</style>
