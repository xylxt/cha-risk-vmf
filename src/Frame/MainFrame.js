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
import VueFactory from 'vue-factory'
import {UserEnvService} from '@/service/UserEnvService'
import {BillConfigService} from '@/service/BillConfigService'

GC.Spread.Common.CultureManager.culture("zh-cn");

Vue.use(TabRoute)
Vue.use(RouterMethods)
Vue.use(ElementUI, {size: 'small'})
Vue.use(VueFactory)

Vue.factory.register({
  'userEnvService': UserEnvService,
  'billConfigService': BillConfigService
})

new Vue({
    el: '#app',
    store,
    render: v => v(index)
})