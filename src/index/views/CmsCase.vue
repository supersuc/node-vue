<template>
    <article class="contentContainer">
        <div class="mainbody case-box">
            <el-row :gutter="0">
                <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="5">
                    &nbsp;
                </el-col>
                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="14" >
                    <div class="case-list">

                      <AdsPannel id="BkxSmqcaAZ" />
                      <div style="clear:both"></div>
                    </div>
                </el-col>
                <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="5">
                    &nbsp;
                </el-col>
            </el-row>
        </div>
        
    </article>
</template>
<style lang="scss">

</style>

<script>
import AdsPannel from "../components/AdsPannel.vue";
import axios from "axios";
import metaMixin from "~mixins";
import { mapGetters } from "vuex";
export default {
  name: "case-item",
  mixins: [metaMixin],
  components: {
    AdsPannel
  },
  data() {
    return {
      cmsStar: 1,
      stargazersUrl: "https://github.com/doramart/Estate/stargazers"
    };
  },
  computed: {
    ...mapGetters({
      systemConfig: "global/footerConfigs/getSystemConfig"
    }),
    currentCate() {
      let navs =
        this.$store.getters["global/category/getHeaderNavList"].data || [];
      const obj = navs.find(item => item._id === this.$route.params.typeId);
      return obj || {};
    }
  },
  methods: {
    getToStar() {
      window.open(this.stargazersUrl);
    }
  },
  mounted() {
    axios
      .get("https://api.github.com/repos/doramart/Estate")
      .then(response => {
        this.cmsStar = response.data.stargazers_count;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  metaInfo() {
    const systemData = this.systemConfig.data[0];
    const { siteName, siteDiscription, siteKeywords } = systemData;
    return {
      title: "案例 | " + siteName,
      meta: [
        {
          vmid: "description",
          name: "description",
          content: this.currentCate.comments || siteDiscription
        },
        {
          vmid: "keywords",
          name: "keywords",
          content: this.currentCate.keywords || siteKeywords
        }
      ]
    };
  }
};
</script>