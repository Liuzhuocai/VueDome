<template>
    <tbody style="overflow-y:scroll;" id="body">
    <div class="container">
        <h1 class="title">{{msg}}</h1>
        <div class="hor">
            <input type="search" name="city" placeholder="请输入姓名\身份证号" class="search_input"
                   required v-model='value'>
        </div>
        <div class="hor">
            <input type="submit" name="submit" class="submit" @click='search()' value="提交">45das746sed74869

        </div>
        <div class="container_bottom_right">
            <p class="search_btu" @click='manager()'>查询管理</p>
        </div>
    </div>
    <div class="container">
        <div class="container_1">
            <div style="text-align: left">
                <span class="p_left">我单位录入的失范记录</span>
                <span class="p_left_1">(不含已删除的记录)</span>
            </div>
            <span class="add_btu" @click='add()'>新增</span>
        </div>
        <p class="clear_fix"></p>
        <div class="container_hor">
            <div v-for="(i,index) in num" :key="index" class="card">
                <p style="text-align: left">王汪</p>
                <p style="text-align: left">成都市第七中学</p>
                <div style="padding-top: 60px">
                    <p style="color: chocolate;float: left">刑事处罚</p>
                    <p style="float: left;margin-left: 40px">2020-04-25</p>
                </div>
            </div>
            <p class="clear_fix"></p>
        </div>
    </div>

    <div class="container">
        <div class="hor1">
            <p class="p_left">最新操作日志</p>
            <p class="add_btu" @click='addItem()'>新增</p>
            <p class="clear_fix"></p>
            <p style="text-align:left">今天</p>
            <div>
                <p v-for="(i,index) in tr_num" :key="index" class="tr" style="text-align: left">
                    15:23 成都市教育局 <span
                        :style="{color:getColor(index)}">{{getType(index)}}</span> 成都七中-汪汪 的 失范记录
                </p>

                <!--  <div v-for="(i,index) in tr_num" :key="index" class="tr">-->
                <!-- <p style="text-align: left">15:23 成都市教育局 <span
                         style="color: chocolate">新增</span> 成都七中-汪汪 的 失范记录</p>
                 <p style="text-align: left">15:23 成都市教育局 <span
                         style="color: #333fff">修改</span> 成都七中-汪汪 的 失范记录</p>
                 <p style="text-align: left">15:23 成都市教育局 <span
                         style="color: chocolate">新增</span> 成都七中-汪汪 的 失范记录</p>-->

                <!--  </div>-->
                <p class="clear_fix"></p>
            </div>
        </div>
    </div>

    </tbody>

</template>

<script>
    export default {
        data() {
            return {
                value: '',
                num: 1,
                type: '新增',
                color1: "#d269e1",
                tr_num: 1
            }

        },
        name: 'Student',
        props: {
            msg: String
        },
        methods: {
            search() {
                if (this.value.length === 0) {
                    alert("不能输入为空")
                } else {
                    alert("已查询到" + this.value)
                }
            },
            manager() {
                alert("查询中")
            },
            add() {
                this.num++
            }
            ,
            addItem() {
                this.tr_num++
                if (this.tr_num % 2 === 0) {
                    this.type = "新增"
                    this.color1 = "#d269e1";
                } else {
                    this.type = "修改"
                    this.color1 = "#333fff";
                }
            }
            ,
            getType(index) {
                if (index % 2 === 0) {
                    return "新增"
                } else {
                    return "修改"
                }
            },
            getColor(index) {
                if (index % 2 === 0) {
                    return "#d269e1";
                } else {
                    return "#333fff";
                }
            }
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../style/mixin';

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    #body {
        position: fixed;
        top: 50px;
        right: 0;
        left: 0;
        bottom: 0;
        background-image: url("../assets/bg.jpg");
    }

    .container {
        margin-top: 50px;
        background-color: #d1d1d1;
        border: 1px;
        border-radius: 0.5rem;
        margin-left: 15%;
        margin-right: 15%;
    }


    .title {
        padding-top: 90px;
    }

    .hor {
        display: inline-block;
    }

    .container_bottom_right {
        padding-right: 20px;
        padding-top: 50px;
        padding-bottom: 30px;
    }

    .search_btu {
        @include sc(15 sp, #333fff);
        text-align: end;
    }

    .p_left {
        padding-left: 20px;
        padding-top: 15px;
        display: inline-block;
        text-align: start !important;
    }

    .p_left_1 {
        display: inline-block;
        @include sc(10 sp, dimgrey)
    }

    .hor1 {

    }


    .clear_fix {
        height: 0;
        clear: both;
        line-height: 0;
        font-size: 0;
    }

    .add_btu {
        display: inline-block;
        @include sc(15 sp, #333fff);
        padding-right: 20px;
        padding-top: 15px;
        float: right;
    }

    .container_hor {
        margin-top: 50px;
        border: 1px;
        border-radius: 0.5rem;
        margin-left: 5%;
        margin-right: 5%;
        padding-bottom: 80px;
    }

    .card {
        float: left;
        display: inline-block;
        background-color: white;
        border: 1px;
        border-radius: 0.5rem;
        width: 200px;
        height: 200px;
        margin: 20px;
    }

    .container_1 {
        display: flex;
        justify-content: space-between;
    }

    /*.container_1:last-child > div:last-child {
    }*/

    a {
        color: #42b983;
    }
</style>
