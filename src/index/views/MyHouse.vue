<template>
    <div class="contentContainer">
        <div class="mainbody ">
            <el-row style="text-align: center">
                <el-col :span="12">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 30px;">
                        <img src="" class="image">
                        <div style="padding: 14px;">
                            <span>本月电费</span>
                            <div class="bottom clearfix">
                                <h1 style="color: #409EFF;">{{mine.elecFees}}元</h1>
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">查看详情</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="12">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 30px;">
                        <img src="" class="image">
                        <div style="padding: 14px;">
                            <span>欠费</span>
                            <div class="bottom clearfix">
                                <h1 style="color: #E6A23C;">{{mine.arrearage}}元</h1>
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">交电费</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="12">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 30px;">
                        <img src="" class="image">
                        <div style="padding: 14px;">
                            <span>车位费</span>
                            <div class="bottom clearfix">
                                <h1 style="color: #409EFF;">{{mine.carPrice}}元</h1>
                                <time class="time">为您的爱车找个家</time>
                                <el-button type="text" class="button">续租</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="12">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 30px;">
                        <img src="" class="image">
                        <div style="padding: 14px;">
                            <span>房产信息</span>
                            <div class="bottom clearfix" style="text-align: left">
                                <div class="text item">
                                    <el-tag>业主  : {{mine.name}}</el-tag>
                                    <el-tag style="margin-left: 20px;">产权  : 70年</el-tag>
                                </div>



                                <div class="text item" style="margin-top: 20px;">
                                    <el-tag>地址  : 北京朝阳区</el-tag>
                                </div>

                                <el-button type="text" class="button">查看详情</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>


            </el-row>


        </div>
    </div>

</template>


<script>
    import api from "~api";

    export default {

        data() {
            return {
                mine: {
                    name: "张三",
                    email: "fhej@qq.com",
                    elecFees: 150,
                    arrearage: 10,
                    carPrice: 100
                },
                currentDate: new Date()
            }
        },
        computed: {
            getMyHouse() {
                api.get("users/session?apiSource=client")
                    .then(result => {
                        console.log(result)
                        this.name = result;
                        this.$message({
                            message: "获取信息成功！",
                            type: "success"
                        });

                    })
            }
        },
        methods: {}
    };
</script>
<!--http://localhost:8080/api/users/session?apiSource=client-->
<style>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>