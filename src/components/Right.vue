<template>
    <div class="right-con data-v-002">
        <h3 data-v-002>Right组件</h3>
        <hr data-v-002>
        <MyCount :init="6" data-v-002></MyCount>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.right-con{
    padding:0 20px 20px;
    background-color: skyblue;
    min-height: 250px;
    flex: 1;
}
/deep/ h5{
    color: pink;
}
</style>