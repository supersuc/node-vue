<template>
    <footer class="footer">
        <div class="container text-left" v-once>
            <ul>
                <li>
                    小区物业信息平台
                </li>
                <li class="sitemap">
                    <router-link to="/sitemap.html" class=""></router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
let packageJson = require("../../../package.json");

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Footer",
  async asyncData({ store, route }, config = {}) {
    const { params: path } = route;
    const base = {
      ...config,
      path
    };
    await store.dispatch("global/footerConfigs/getSystemConfig");
  },
  serverCacheKey: props => "footer",
  computed: {
    ...mapGetters({
      systemConfig: "global/footerConfigs/getSystemConfig"
    }),
    codeVersion() {
      return "Estate " + packageJson.version;
    }
  }
};
</script>
<style lang="scss">

</style>
