<template>
    <div  class="body">
        <div class="container container-detail">
            <div class="container_1">
                <div style="font-size: 22px;font-weight: bold;color: #0280FD">记录详情</div>
                <div class="container_right">
                    <span class="btn btn_first">删除</span>
                    <span class="btn">修改</span>
                    <span class="btn">返回</span>
                </div>
            </div>
            <div class="container_base container_base_left"><span style="color: #313131">{{
                this.user.master}}</span>
                于 <span style="color: #313131">{{this.user.timeDetail}}</span> 更新
            </div>
            <!--<div class="container_base container_base_left"><span style="color: #313131">{{this.$route.query.master}}</span>
                于 <span style="color: #313131">{{this.$route.query.timeDetail}}</span> 更新
            </div>-->
            <div class="container-detail-hor">
                <div class="left">
                    <div class="left-item">
                        <span class="title-detail">行政区划</span>
                        <span class="content-detail">{{this.user.area}}</span>
                    </div>
                    <div class="left-item">
                        <span class="title-detail">学校名称</span>
                        <span class="content-detail">{{this.user.school}}</span>
                    </div>
                    <div class="left-item">
                        <span class="title-detail">姓名</span>
                        <span class="content-detail">{{this.user.userName}}</span>
                    </div>
                    <div class="left-item">
                        <span class="title-detail">性别</span>
                        <span class="content-detail">{{this.user.gender}}</span>
                    </div>
                    <div class="left-item">
                        <span class="title-detail">身份证号码</span>
                        <span class="content-detail">{{this.user.identityCard}}</span>
                    </div>
                    <div class="left-item">
                        <span class="title-detail">政治面貌</span>
                        <span class="content-detail">{{this.user.politicsStatus}}</span>
                    </div>
                    <div class="left-item">
                        <span class="title-detail">职务职称</span>
                        <span class="content-detail">{{this.user.duty}}</span>
                    </div>
                </div>
                <div style="width:1px;flex-shrink:0;background:#ededf0;"></div>
                <div class="right ">
                    <div class="gray-text gray-text-first"> 失范内容</div>
                    <p class="normal-text normal-text-p">{{this.user.contentText}}</p>
                    <div class="gray-text "> 处理单位</div>
                    <div class="normal-text"> {{this.user.dispose}}</div>
                    <div class="gray-text large-line-height dispose-status "> 处理情况</div>
                    <div >
                        <span class=" gray-text title-left">依据</span>
                        <span class="normal-text">{{this.user.according}}</span>
                    </div>
                    <div >
                        <span class=" gray-text title-left">类型</span>
                        <span class="normal-text">{{this.user.accordingType}}</span>
                    </div>
                    <div >
                        <span class=" gray-text title-left">结论</span>
                        <span class="normal-text">{{this.user.accordingResult}}</span>
                    </div>
                    <div class="gray-text large-line-height recorder "> 录入人</div>
                    <div >
                        <span class=" gray-text title-left">姓名</span>
                        <span class="normal-text">{{this.user.recorder}}</span>
                    </div>
                    <div >
                        <span class=" gray-text title-left">依据</span>
                        <span class="normal-text">{{this.user.according}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemDetail",
        data() {
            return {
                user: JSON.parse(this.$route.params.user)

            };
        }
    }
</script>
<style scoped>
    .container_right {
        display: flex;
        justify-content: space-between;
    }

    .btn {
        text-align: center;
        line-height: 32px;
        width: 50px;
        color: #0280FD;
        font-size: 14px;
        background-color: #ECF4FD;
        border-radius: 5px;
        margin-left: 10px;


    }

    .btn_first {
        color: #B06B66;
        background-color: #F7F2F1;

    }


    .container-detail-hor {
        display: flex;
        margin: 48px 30px 0;
        justify-content: space-between;
    }

    .title-detail {
        display: inline-block;
        padding-left: 18px;
        width: 120px;
        color: #7D7D7E;


    }

    .content-detail {
        display: inline-block;
        width: 240px;
        color: #313131;
    }

    .left {
        text-align: left;
        flex-shrink: 0;


    }

    .right {
        flex-grow: 1;
        text-align: start;
        padding: 0 30px 0;
    }

    .left-item {
        font-size: 14px;
        line-height: 50px;
    }

    .gray-text {
        line-height: 30px;
        font-size: 14px;
        color: #7D7D7E;
    }
    .gray-text-first {
        margin-top: 10px;
    }
    .normal-text {
        line-height: 30px;
        font-size: 14px;
        color: #313131;

    }.normal-text-p {
        height : 143px
    }
    .large-line-height {
        line-height : 50px
    }.dispose-status {
        margin-top : 50px
    }
    .title-left {
        padding-left: 2px;
        display: inline-block;
        line-height: 40px;
        width: 67px;
    }
    .recorder{
        margin-top: 52px;
    }
</style>