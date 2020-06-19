<template>
    <div id="content">
    <div id="u_start">
        <li rel="noopener"> <img alt="Vue logo" src="./../assets/icon_1.png"></li>
        <li rel="noopener">{{msg}}</li>
    </div>
    <div  id="u_end">
        <li >成都市教育局</li>
        <li rel="noopener"> <img alt="Vue logo" src="./../assets/icon_2.png"></li>
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
        display: block;
        position: absolute;
        right: 0px;
        top: 0px;

    }

    #u_start{
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    #content {

    display: block;
    }
    li {
        display: inline-block;
        margin: 0 0px;
    }
</style>