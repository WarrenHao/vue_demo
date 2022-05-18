<template>
    <div class="left-con data-v-001">
        <h3 data-v-001>left组件</h3>
        <hr data-v-001>

        <MyCount :init="9" data-v-001></MyCount>
        <!-- 使用组件的时候就可以认为是一个创建对象的过程 -->
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="less">
.left-con{
    padding: 0 20px 20px;
    background-color: orange;
    min-height: 250px;
    flex:1;
    
}
h3[data-v-001]{
    color:wheat;
}
</style>