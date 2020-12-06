import Vue from "vue";
import Index from "./Index.vue";
import splitpane from "../lib/index";

Vue.use(splitpane);

new Vue({
  render: (h) => h(Index),
}).$mount("#app");
