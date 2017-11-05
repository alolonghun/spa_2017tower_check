<template>
    <div id="app">
    	<transition :leave-active-class="transitionName">
        <router-view class="animated"></router-view>
      </transition>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        transitionName: "slideInRight"
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.length;
        const fromDepth = from.path.length;
        this.transitionName = toDepth > fromDepth ? 'slideOutLeft' : 'slideOutRight';
      }
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './styles/reset.css';
@import './styles/_reset.less';


html, body, #app {
  font-family: 'Microsoft Yahei UI Light';
  font-size: .28rem;
  color: #333;
}
.animated {
  animation-duration: .3s;
}
</style>
