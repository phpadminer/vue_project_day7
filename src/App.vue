<template>
    <div>
        {{msg}}
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        // name: "app",
        data:function(){
           return {msg:"hello"}
        }
    }
</script>

<style scoped>

</style>