<template>
  <div class="detail-container">
    <div class="img-box">
      <img class="my-img" :src="isPlay?detailObj.music.coverImgUrl:detailObj.detail_img" alt>
      <img
        @tap="handleMusic"
        class="play"
        :src="'cloud://test-c9f00f.7465-test-c9f00f/static/images/music/music-'+(isPlay?'stop':'start')+'.png'"
        alt
      >
    </div>
    <div class="content">
      <img :src="detailObj.avatar" alt>
      <span>{{detailObj.author}}</span>
      <span>发布于</span>
      <span>{{detailObj.date}}</span>
    </div>
    <p class="short-content">{{detailObj.title}}</p>
    <div class="imgs-container">
      <div class="imgs">
        <img
          @tap="handleCollected"
          :src="'cloud://test-c9f00f.7465-test-c9f00f/static/images/icon/collection'+(isCollected ? '' : '-anti') + '.png'"
        >
        <img
          @tap="handleShared"
          :src="'cloud://test-c9f00f.7465-test-c9f00f/static/images/icon/share'+(isShared ? '' : '-anti') + '.png'"
          alt
        >
      </div>
      <div class="line"></div>
    </div>
    <Button open-type="share">转发此文章</Button>
    <p class="content-zhu">{{detailObj.detail_content}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import isPlayObj from "../../datas/isPlay.js";
export default {
  data() {
    return {
      routeQuery: null,
      detailObj: {},
      isCollected: false,
      isShared: false,
      index: 0,
      isPlay: false,
      music: {}
    };
  },
  computed: {
    ...mapState(["listTmp"])
  },
  beforeMount() {
    this.routeQuery = JSON.parse(JSON.stringify(this.getRoute()));
    this.index = this.routeQuery.index;
    this.detailObj = this.listTmp[this.index];

    let oldStorage = wx.getStorageSync("isCollected");
    if (!oldStorage) {
      wx.setStorageSync("isCollected", {});
    } else {
      this.isCollected = !!oldStorage[this.index];
    }

    parseInt(isPlayObj.pageIndex, 10) === this.index && isPlayObj.isPlay
      ? (this.isPlay = true)
      : (this.isPlay = false);
    this.music = wx.getBackgroundAudioManager();
    this.music.title = this.detailObj.music.title;
    this.music.onPlay(() => {
      isPlayObj.pageIndex = this.index;
      isPlayObj.isPlay = true;
      this.isPlay = true;
    });
    this.music.onPause(() => {
      isPlayObj.isPlay = false;
      this.isPlay = false;
    });
  },
  methods: {
    handleCollected() {
      this.isCollected = !this.isCollected;
      wx.showToast({
        title: this.isCollected ? "收藏成功" : "取消收藏",
        icon: "success",
        duration: 1000
      });
      let oldStorage = wx.getStorageSync("isCollected");
      oldStorage[this.index] = this.isCollected;
      wx.setStorageSync("isCollected", oldStorage);
    },
    handleShared() {
      wx.showActionSheet({
        itemList: ["分享到朋友圈","分享到微博"],
        success(res) {
          console.log(res.tapIndex);
        },
        fail(res) {
          console.log(res.errMsg);
        }
      });
      this.isShared = !this.isShared;
      wx.showToast({
        title: this.isShared ? "分享成功" : "取消分享",
        icon: "success",
        duration: 2000
      });
    },
    handleMusic() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.music.src = this.detailObj.music.dataUrl;
      } else {
        this.music.pause();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  .img-box {
    position: relative;
    .play {
      width: 60rpx;
      height: 60rpx;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .my-img {
      width: 100%;
      height: 460rpx;
    }
  }
  .content {
    margin: 10rpx;
    display: flex;
    align-items: center;
    span {
      margin-left: 16rpx;
      font-size: 20rpx;
    }
    img {
      width: 64rpx;
      height: 64rpx;
      border-radius: 50%;
    }
  }
  .short-content {
    font-weight: bold;
    margin-left: 10rpx;
  }
  .imgs-container {
    position: relative;
    .imgs {
      display: flex;
      justify-content: flex-end;
      img {
        width: 90rpx;
        height: 90rpx;
        margin-right: 20rpx;
      }
    }
    .line {
      width: 90%;
      height: 1rpx;
      background-color: #eee;
      position: absolute;
      top: 45rpx;
      left: 5%;
      z-index: -1;
    }
  }
  .content-zhu {
    padding: 10rpx;
    margin-top: 32rpx;
    font-size: 32rpx;
    line-height: 32rpx;
    text-indent: 32rpx;
    word-spacing: 32rpx;
  }
}
</style>