<template>
  <div class="detail-container">
    <img class="header" :src="detailObj.detail_img" alt>
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
          :src="'/static/images/icon/collection'+(isCollected ? '' : '-anti') + '.png'"
        >
        <img
          @tap="handleShared"
          :src="'/static/images/icon/share'+(isShared ? '' : '-anti') + '.png'"
          alt
        >
      </div>
      <div class="line"></div>
    </div>
    <Button>转发此文章</Button>
    <p class="content-zhu">{{detailObj.detail_content}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      routeQuery: null,
      detailObj: {},
      isCollected: false,
      isShared: false
    };
  },
  computed: {
    ...mapState(["listTmp"])
  },
  beforeMount() {
    this.routeQuery = JSON.parse(JSON.stringify(this.getRoute()));
    this.detailObj = this.listTmp[this.routeQuery.index];
  },
  methods: {
    handleCollected() {
      this.isCollected = !this.isCollected;
      wx.showToast({
        title: this.isCollected?"收藏成功":"取消收藏",
        icon: "success",
        duration: 1000
      });
    },
    handleShared() {
      this.isShared = !this.isShared;
      wx.showToast({
        title: this.isShared?"分享成功":"取消分享",
        icon: "success",
        duration: 2000
      });
    }
  }
};
</script>
<style lang="less" scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 460rpx;
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