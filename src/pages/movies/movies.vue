<template>
  <div class="movies-container">
    <div class="movies-item">
      <img src="../../../static/tab/dianying.png" alt>
      <div class="movies-info">
        <span>肖申克救赎</span>
        <span>年份:1994</span>
        <span>导演:斯皮尔伯格</span>
      </div>
      <span class="point">9.6</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.movies-container {
  display: flex;
  flex-direction: column;
  .movies-item {
    display: flex;
    padding: 10rpx;
    border-bottom: 1rpx solid #eee;
    img {
      width: 128rpx;
      height: 128rpx;
    }
    .movies-info {
      display: flex;
      flex-direction: column;
      margin-left: 20rpx;
      width: 70%;
      span {
        font-size: 32rpx;
        color: #333;
        padding: 5rpx;
        &:nth-child(2) {
          font-size: 30rpx;
          color: #999;
        }
        &:nth-child(3) {
          font-size: 26rpx;
          color: #666;
        }
      }
    }
    .point {
      color: red;
      font-weight: bold;
      font-size: 30rpx;
    }
  }
}
</style>
