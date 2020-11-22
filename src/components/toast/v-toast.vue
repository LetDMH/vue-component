<template>
  <div class="v-msg" v-if="show" :class="[animation, type]">
    <div class="content">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    animation() {
      return this.model ? "fade-in" : "fade-out";
    },
  },
};
</script>

<style lang="scss" scoped>
.v-msg {
  width: 200px;
  height: 30px;
  line-height: 30px;
  box-shadow: 0px 3px 15px -3px rgba(0, 0, 0, 0.8);
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  border-radius: 5px;
  border: none;
  margin-top: 25px;
  .content {
    color: #fff;
    font-weight: bold;
  }
}
.success {
  background-color: rgba(82, 196, 26, 0.8);
}
.fail {
  background-color: rgba(245, 34, 45, 0.8);
}
.fade-in {
  animation: fadeIn 0.2s linear forwards;
}
.fade-out {
  animation: fadeOut 0.5s linear forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    top: -100px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    top: 0;
  }
  30% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    top: -100px;
  }
}
</style>
