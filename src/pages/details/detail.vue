<template>
  <div class="detail-container">
    <img class="header" src="../../../static/images/112.jpg" alt>
    <div class="content">
      <img src="/static/images/3.jpg" alt>
      <span>新华社</span>
      <span>发布于</span>
      <span>2019</span>
    </div>
    <p class="short-content">假的经文简洁</p>
    <div class="imgs-container">
      <div class="imgs">
        <img src="/static/images/save.png" alt>
        <img src="/static/images/share.png" alt>
      </div>
      <div class="line"></div>
    </div>
    <Button>转发此文章</Button>
    <p class="content-zhu">朱茵是我的你是谁规划哦is噶搜IE哦我怪盗基德撒即可冷风机卡拉胶刚结婚就就卡水底纳瓜经电视剧伤筋动骨就看</p>
  </div>
</template>

<script>
export default {};
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