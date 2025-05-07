<template>
  <div class="publicity">
    <!--    <h2 v-if="this.$store.getters.getShowMethod == 1">豪克国际</h2>-->
    <!--    <h2 v-else>Haoke international</h2>-->
    <div class="container">
      <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
                    :options="playerOptions"></video-player>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      playerOptions: {
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4',
          src: 'https://file.codingswifter.com/wvideo/20190707173929649.mp4' //url地址
        }],
        poster: 'https://file.codingswifter.com/hkgj/show.png', //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    }
  }
}
</script>

<style scoped>
  .container {
    /*margin-top: 50px;*/
  }
  .publicity {
    /*padding: 1rem;*/
  }

  /*大于768*/
  @media screen and (min-width: 768px) {
    .publicity {
      padding: 2rem;
    }
  }
</style>
