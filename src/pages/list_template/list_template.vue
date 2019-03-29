<template>
  <div class="tmp-container">
    <div class="avator">
      <img src="../../../static/images/7.jpg" alt>
      <span>2019-03-29</span>
    </div>
    <p class="company">学习堂</p>
    <img class="class-img" src="../../../static/images/0.jpg" alt>
    <p class="content">emit 圣诞快乐翻记录司空见惯克鲁赛德机构咚咚咚咚咚咚uugUGGuasdfklalsdg挂电视剧赶快回去健康的说法就就是读后感</p>
    <div class="icon-class">
      <img src="../../../static/images/star.png" alt>
      <span>66</span>
      <img src="../../../static/images/view.png" alt>
      <span>88</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
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
      color:#333;
      margin-right: 20rpx;
    }
  }
}
</style>
