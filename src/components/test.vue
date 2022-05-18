<template>
    <div class="box">
        <h3>这是用户自定义的Test.vue {{username}}</h3>
        <button @click="changeName"></button>
        <hr>
        <h3 id="myh3">there are {{books.length}} books</h3>
        <p id="ppp">message is {{message}}</p>
        <button @click="message += '~'">修改 message的值</button>
    </div>
</template>


<script>
export default {
    // 默认导出固定语法
    // 组件里面的data不能指向对象
    // data:{
    //     username:'zs',
    // }
    props:['info'],
    data(){
        // return出去的对象中可以定义数据
return {
    message:"hello vue",
    username:'zs',
    // 定义books数组，储存所有图书信息，默认为空数组，当ajax请求发送成功之后，拿到结果给data
    books : []
}
    },
    methods: {
        changeName(){
            this.username = 'admin'
        }
    },
    watch:{},
    computed:{},
    filters:{},
    // use ajax to get the data

// use package XMLHttpRequest to created the request object
    initBooks(){
const xhr = new XMLHttpRequest
xhr.addEventListener('load',()=>{
    const result = JSON.parse(xhr.responseText)
    console.log(result)
    this.books = result.data
})
xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks')
xhr.send()
    },


    beforeCreated(){
console.log(this.message)
    },


    created() {
        console.log(this.info)
        console.log(this.initBooks)
        this.initBooks()
        // const dm = document.querySelector('myh3')
    },
    // use the ajax to create

    beforeMount() {
        console.log(object)
        const dm = document.querySelector('#myh3')
        console.log(dm)
    },

    beforeUpdate() {
        const dom = document.querySelector('#ppp')
        console.log(dom.innerHTML)
    },

    updated() {
        const dm = document.querySelector('#ppp')
        console.log(dm.innerHTML)
    },

}
</script>


<style lang='less'>
.box{
    background-color: pink;
    h3{ color:red;}
}
</style>