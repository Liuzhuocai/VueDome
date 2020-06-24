<template  >
    <span class="ls" >{{msg}}<i style="transform: translateX(3px);background-image:url('../assets/icon_3.png');width: 14px;height: 14px"></i></span>
</template>

<script>
    export default {
        name: "LeftSpan",
        props: {
            msg: String
        }
    }

</script>

<style scoped>
.ls{
    color: rgb(1,129,255);
}
</style>