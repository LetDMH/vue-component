import Vue from "vue";
import Toast from "./v-toast.vue";

const toast = Vue.extend(Toast);

export default function({ type, msg }) {
  const vm = new toast({
    el: document.createElement("div"),
    data() {
      return {
        type,
        msg,
        show: true,
        model: true,
      };
    },
  });
  document.body.appendChild(vm.$el);
  setTimeout(() => {
    vm.model = false;
  }, 3000);
  setTimeout(() => {
    vm.show = false;
  }, 4000);
}
