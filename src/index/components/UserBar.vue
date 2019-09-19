<template>
    <div class="user-bar">
        <div class="bar-items">
            <ul>
                <li :class="{active : $route.fullPath == '/users/contents'}">
                    <router-link to="/users/contents"><i aria-hidden="true" class="fa fa-soccer-ball-o"></i>&nbsp;活动角落</router-link>
                </li>
                <li :class="{active : $route.fullPath == '/users/messages'}">
                    <router-link to="/users/messages"><i aria-hidden="true" class="fa  fa-television"></i>&nbsp;公告板</router-link>
                </li>
                <li :class="{active : $route.fullPath == '/users/replies'}">
                    <router-link to="/users/replies"><i aria-hidden="true" class="fa el-icon-date"></i>&nbsp;参与活动</router-link>
                </li>
                <li :class="{active : $route.fullPath == '/users/addContent'}">
                    <router-link to="/users/addContent"><i class="fa fa-edit" aria-hidden="true"></i>&nbsp;沟通反馈</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "UserBar"
};
</script>

<style lang="scss">

</style>
