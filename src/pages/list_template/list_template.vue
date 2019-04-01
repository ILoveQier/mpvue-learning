<template>
  <div @tap="goDetail" class="tmp-container">
    <div class="avator">
      <img :src="item.detail_img" alt>
      <span>{{item.date}}</span>
    </div>
    <p class="company">{{item.title}}</p>
    <img class="class-img" :src="item.detail_img" alt>
    <p class="content" style="padding:10rpx">{{item.detail_content}}</p>
    <div class="icon-class">
      <img src="../../../static/images/star.png" alt>
      <span>{{item.love_count}}</span>
      <img src="../../../static/images/view.png" alt>
      <span>{{item.attention_count}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'item', 'index'
    ],
    methods: {
      goDetail() {
        wx.navigateTo({
          url: '/pages/details/main?index='+this.index,
        });  
      }
    },
  };
</script>
<style lang="less" scoped>
  .tmp-container {
    margin-top: 50rpx;
    display: flex;
    flex-direction: column;
    border-bottom: 1rpx solid #333;
    .avator {
      display: flex;
      align-items: center;
      img {
        width: 60rpx;
        height: 60rpx;
        border-radius: 50%;
        margin: 0 30rpx;
      }

      span {
        font-size: 28rpx;
        color: #333;
      }
    }

    .company {
      font-weight: bold;
      font-size: 40rpx;
      padding: 20rpx;
    }

    .class-img {
      width: 100%;
      height: 460rpx;
      margin-bottom: 30rpx;
    }

    .content {
      font-size: 30rpx;
      text-indent: 50rpx;
      line-height: 50rpx;
      word-spacing: 5rpx;
      letter-spacing: 5rpx;
    }

    .icon-class {
      display: flex;
      align-items: center;
      padding: 20rpx;

      img {
        width: 42rpx;
        height: 42rpx;
        margin-right: 10rpx;
      }

      span {
        font-size: 20rpx;
        color: #333;
        margin-right: 20rpx;
      }
    }
  }
</style>