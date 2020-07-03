<template>
    <div style="overflow: auto;" class="body">
        <div class="container">
            <h1 class="title">师德师风失范查询</h1>
            <div class="hor">
                <input type="search" name="city" placeholder="请输入姓名\身份证号" class="search_input"
                       required v-model='value'>
                <input type="submit" name="submit" class="submit" @click='search()' value="查询">

            </div>
            <div>
                <!--<p class="search_btu" @click='manager()'>查询管理</p>-->
                <div style="text-align: end;padding-bottom: 34px;padding-top: 75px">
                    <LeftSpan style="margin-right: 30px" @click='manager()' msg="查询管理"></LeftSpan>
                </div>

            </div>
        </div>
        <div class="container">
            <div class="container_1">
                <div style="text-align: left;padding-top: 11px">
                    <span class="p_left">我单位录入的失范记录</span>
                    <span class="p_left_1">(不含已删除的记录)</span>
                </div>
                <div class="add_btu" @click='add()'>
                    <span>新增</span>
                </div>
                <!--<LeftSpan  @click='add()' msg="新增"></LeftSpan>-->
            </div>

            <div class="container_hor">
                <div v-for="user in users" :key="user.id" class="card" v-on:click="toDetail(user)">
<!--            <div class="container_hor">
                <div v-for="user in users" :key="user.id" class="card" v-on:click="$router.push(
                {name: 'ItemDetail', query:{str: user.str, school: user.school, id: user.id, time: user.time, userName: user.userName, userEdge: user.userEdge,master:user.master,timeDetail:user.timeDetail}})">-->
                    <p style="font-size: 17px;font-weight: bold">{{user.userName}}</p>
                    <p style="color: #6B6969;transform: translateY(-7px)">{{user.school}}</p>
                    <div style="padding-bottom: 15px;display: flex;justify-content: space-between">
                        <span style="color: chocolate">{{user.str}}</span>
                        <span style="font-size: 11px;color: #B9B9B8;padding-top: 5px">{{user.time}}</span>
                    </div>
                </div>
            </div>
            <div style="text-align: end;transform: translateY(-38px);height: 10px">
                <LeftSpan style="margin-right: 30px" msg="查看所有"></LeftSpan>
            </div>
        </div>

        <div class="container" style="padding-bottom: 10px">
            <div class="container_1">
                <div>
                    <p class="p_left">最新操作日志</p>
                </div>
                <!--<p class="add_btu" @click='addItem()'>新增</p>-->
                <div style="padding-top: 10px" @click='addItem()'>
                    <LeftSpan msg="查看所有"></LeftSpan>
                </div>
            </div>
            <p style="text-align:left;padding-left: 28px">今天</p>
            <div style="padding-left: 28px">
                <p v-for="user in users" :key="user.id" class="tr" style="text-align: left">
                    15:23 成都市教育局 <span
                        :style="{color:getColor(user.id)}">{{getType(user.id)}}</span>
                    成都七中-{{user.userName}} 的 失范记录
                </p>

                <!--  <div v-for="(i,index) in tr_num" :key="index" class="tr">-->
                <!-- <p style="text-align: left">15:23 成都市教育局 <span
                         style="color: chocolate">新增</span> 成都七中-汪汪 的 失范记录</p>
                 <p style="text-align: left">15:23 成都市教育局 <span
                         style="color: #333fff">修改</span> 成都七中-汪汪 的 失范记录</p>
                 <p style="text-align: left">15:23 成都市教育局 <span
                         style="color: chocolate">新增</span> 成都七中-汪汪 的 失范记录</p>-->

                <!--  </div>-->

            </div>
        </div>

    </div>

</template>

<script>
    import LeftSpan from "./LeftSpan";

    export default {
        components: {LeftSpan},
        data() {
            return {
                value: '',
                num: 3,
                type: '新增',
                color1: "#d269e1",
                tr_num: 3,
                users: [{
                    userName: "张三",
                    userEdge: 12,
                    id: 1,
                    school: "成都市第七中学",
                    str: "刑事处罚",
                    time: "2020-04-25",
                    master: "成都市教育局",
                    timeDetail: "2020-04-25 15:32",
                    area:"四川省-成都市",
                    gender:"男",
                    identityCard:"511152154799541125",
                    politicsStatus:"中共党员",
                    duty:"政教处主任",
                    contentText:"乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生",
                    dispose:"成都市人民法院",
                    according:"《刑法》第123条",
                    accordingType:"刑事处罚",
                    accordingResult:"剥夺政治权利终身",
                    recorder:"张强",
                    recorderPhone:"18748454687",
                },
                    {
                        userName: "李四",
                        userEdge: 13,
                        id: 2,
                        school: "成都市第四中学",
                        str: "刑事处罚",
                        time: "2020-05-25",
                        master: "成都市教育局",
                        timeDetail: "2020-04-25 15:32",
                        area:"四川省-成都市",
                        gender:"男",
                        identityCard:"511152154799541125",
                        politicsStatus:"中共党员",
                        duty:"政教处主任",
                        contentText:"乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生",
                        dispose:"成都市人民法院",
                        according:"《刑法》第123条",
                        accordingType:"刑事处罚",
                        accordingResult:"剥夺政治权利终身",
                        recorder:"张强",
                        recorderPhone:"18748454687",
                    }
                ]
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
                this.$router.push(
                    {name: 'ItemWrite'})
                /*this.users.push({
                    userName: "王五",
                    userEdge: 12,
                    id: this.num++,
                    school: "成都市第七中学",
                    str: "刑事处罚",
                    time: "2020-04-25",
                    master: "成都市教育局",
                    timeDetail: "2020-04-25 15:32",
                    area:"四川省-成都市",
                    gender:"男",
                    identityCard:"511152154799541125",
                    politicsStatus:"中共党员",
                    duty:"政教处主任",
                    contentText:"乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生乱处罚学生",
                    dispose:"成都市人民法院",
                    according:"《刑法》第123条",
                    accordingType:"刑事处罚",
                    accordingResult:"剥夺政治权利终身",
                    recorder:"张强",
                    recorderPhone:"18748454687",
                })*/
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
            },
            toDetail(user){
                let value = JSON.stringify(user)
                this.$router.push(
                    {name: 'ItemDetail', params:{user: value}})

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


    .title {
        font-size: 40px;
        color: rgb(75, 87, 116);
        padding-top: 86px;
    }

    .hor {
        margin-top: 80px;
        display: flex;
        justify-content: center;
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
        @include sc(17px, #4B5774);
        font-weight: bold;
        text-align: start !important;
    }

    .p_left_1 {
        display: inline-block;
        @include sc(12px, dimgrey)
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
        vertical-align: center;
        line-height: 40px;
        @include sc(15 sp, #ffffff);
        font-weight: bold;
        width: 82px;
        height: 40px;
        background-color: #F46501;
        border-radius: 5px;
    }

    .container_hor {
        text-align: start;
        margin-top: 0px;
        margin-left: 10px;
        margin-right: 10px;
        border: 1px;
        border-radius: 0.5rem;
        padding-bottom: 0px;
    }

    .card {
        display: inline-block;
        text-align: start;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 15px;
        box-sizing: border-box;
        background-color: white;
        border: 1px;
        border-radius: 0.5rem;
        width: 250px;
        height: 122px;
        margin: 20px;
        box-shadow: 3px 2px 10px 5px rgba(0, 0, 0, .1)
    }


    .search_input {
        outline: none;
        padding-left: 30px;
        height: 60px;
        background-color: rgb(237, 237, 241);
        width: 482px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        border: 0;
    }

    .submit {
        text-align: center;
        font-weight: bold;
        font-size: 15px;
        color: #ffffff;
        height: 60px;
        background-color: rgb(1, 129, 255);
        width: 87px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border: 0;

    }


    /*.container_1:last-child > div:last-child {
    }*/

    a {
        color: #42b983;
    }
</style>
