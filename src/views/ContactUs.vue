<template>
  <div class="sub-top-div" style="background-color: black">
    <div style="margin: 0 auto;position: relative;">
      <img class="banner" src="../assets/banner-3.png"/>
      <!--      <div class="banner-title">Contact Us</div>-->
      <div
        style="max-width: 1200px;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;display: flex;align-items: center;justify-content: flex-end;">
        <!--        <img class="banner-img-float" src="../assets/banner_2_h1.jpg">-->
<!--        <div class="banner-title">Contact Us</div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style scoped>
  .banner-title {
    display: none;
  }

  .banner {
    width: 100%;
    max-height: 324px !important;
    min-height: 200px !important;
    object-fit: cover;
  }

  /* 屏幕大于768 */
  @media screen and (min-width: 768px) {
    .banner-title {
      display: inline;
      font-size: 68px;
      font-weight: normal;
      color: rgba(153, 153, 153, 1);
      position: absolute;
      right: 100px;
      bottom: 50px;
    }
  }
</style>
