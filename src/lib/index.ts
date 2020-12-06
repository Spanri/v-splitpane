import _Vue from "vue";
import directive from "./v-splitpane";

const plugin = {
  install(Vue: typeof _Vue) {
    Vue.directive("splitpane", directive);
  },
  directive,
};

export default plugin;
