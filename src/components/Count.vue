<template>
    <div class="left">
        <h5>count组件</h5>
        <p>the value of count is {{count}}</p>
        <button @click=" count += 1">+1</button>
        <!-- just to simplify -->
    </div>
</template>

<script>
export default {
    // props中的数据可以直接在模板结构中使用
    // vue中不建议直接修改props值，组件变更时容易被覆盖（只读）
    // props:['init'],
    props:{
        init:{
            // 如果使用count的时候没有指定init属性
            default: 0,
            type: Number,
            required: true
            
        }
    },


    data(){
        return {
            count: this.init
        }
    },
   
}
</script>


<style lang="less">
// .left{
//     padding: 0 20px 20px;
// background-color: orange;
// min-height: 25px;
// flex: 1;}

    
</style>

