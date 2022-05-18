import Vue from 'vue'
// 导入vue包
import App from './App.vue'
import Count from '@/components/Count.vue'

// 导入根组件
// import Test from './test.vue'
Vue.config.productionTip = false


Vue.component('MyCount', Count)
new Vue({
    // el: '#app',
    //
    // 把render指定的组件渲染到html页面中
    render: h => h(App),
}).$mount('#app')