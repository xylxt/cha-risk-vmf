<template>
  <div>
 
    <label v-for="(item, index) in menuList">
      <el-menu-item v-if="item.sub==null" :key="index" @click="openTab(item)" :index="item.menuId">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
 
      <el-submenu v-if="item.sub" :key="index" :index="item.menuId">
        <template slot="title">
          <i :class="item.icon"></i>
          <span> {{item.title}}</span>
        </template>
        <NavMenu :menuList="item.sub" @init_menu="initMenuEx"></NavMenu>
      </el-submenu>
    </label>
 
  </div>
</template>
 
<script>
  export default {
    name: 'NavMenu',
    props: ['menuList'],
    data() {
      return {}
    },
    methods: {
      openTab (item) {
        this.$tab.open(item)
        this.$emit('init_menu')
      },
      initMenuEx () {
        this.$emit('init_menu')
      }
    }
  }
</script>
 
<style scoped>
 
</style>
