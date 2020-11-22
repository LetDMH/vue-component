<template>
  <div class="wrapper">
    <div class="toast">
      <h2>Toast提示框</h2>
      <button @click="toggle('success', '正确提示框')">正确提示框</button>
      <button @click="toggle('fail', '错误提示框')">错误提示框</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle(type, msg) {
      this.$Toast({ type, msg });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .toast {
    button {
      width: 100px;
      height: 30px;
      outline: none;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      background-color: royalblue;
      color: #fff;
      margin-right: 10px;
    }
  }
}
</style>
