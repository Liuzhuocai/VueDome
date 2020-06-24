<template>
    <div id="content">
    <div  id="u_start">
        <span > <img style="transform: translateY(-2px)" alt="Vue logo" src="./../assets/icon_1.png"></span>
        <span style="vertical-align: top">{{msg}}</span>
    </div>
    <div  id="u_end">
        <span style="vertical-align: top;margin-inline-end: 5px;font-size: 13px;color: #B8B7B5" >成都市教育局</span>
        <span > <img alt="Vue logo" style="transform: translateY(-1px)" src="./../assets/icon_2.png"></span>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    #u_end{
    }

    #u_start{
    }

    #content {
        display: flex;
        justify-content: space-between;
        padding-inline-start: 20px;
        padding-inline-end: 20px;
    }
    li {
        display: inline-block;
        margin: 0 0px;
    }
</style>