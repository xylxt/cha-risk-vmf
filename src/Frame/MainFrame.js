import  "babel-polyfill";   // 兼容IE

import Vue from 'vue'
import store from '@/Store/index'
import index from './MainFrame.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import TabRoute from '@/Router/TabRoute'
import RouterMethods from '@/Router/RouterMethods'

import GC from '@grapecity/spread-sheets'
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
//import GenerateForm from '@/Components/GenerateForm'

GC.Spread.Common.CultureManager.culture("zh-cn");

Vue.use(TabRoute)
Vue.use(RouterMethods)
Vue.use(ElementUI, {size: 'small'})

//Vue.component(GenerateForm.name, GenerateForm)

new Vue({
    el: '#app',
    store,
    render: v => v(index)
})