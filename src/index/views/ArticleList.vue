<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>

<template>
    <div class="contentContainer">
        <div class="mainbody content-detail">
            <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item>
                    <img src="../assets/images/bn1.png" >
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/images/bn2.png" >
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/images/bn3.png" >
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/images/bn4.png" >
                </el-carousel-item>
            </el-carousel>
            <el-row style="text-align: center;height: 200px">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <img src="../assets/images/1.jpg" alt="">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light">
                        <img src="../assets/images/2.jpg" alt="">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <img src="../assets/images/3.jpg" alt="">
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>


</template>

<script lang="babel">
</script>

<style lang="scss">
    // .column-wrap {
    //   position: relative;
    //   height: 30px;
    //   line-height: 30px;
    //   font-size: 20px;
    //   color: #303030;
    //   padding-left: 18px;
    //   margin-bottom: 15px;
    // }

    // .column-wrap:before {
    //   content: "";
    //   position: absolute;
    //   width: 4px;
    //   height: 21px;
    //   background: #f63756;
    //   left: 0;
    //   top: 4px;
    // }
</style>