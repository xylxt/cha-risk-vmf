<template>
  <div class="wrap">
    <el-row>
      <el-button type="primary" @click="query" round>查询</el-button>
      <el-button type="primary" @click="save" round>保存</el-button>
      <el-button type="primary" @click="swap" round>切换界面</el-button>
    </el-row>
    <gc-generate-spread 
      :spreadId="spreadId"
      :sheetIds="sheetIds"
      :type="type" 
      :value="values1"
      ref="generateSpread" @buttonClicked="spreadClick">
    </gc-generate-spread>
  </div>
</template>
<script>
  import GenerateSpread from '@/Components/GenerateSpread'

  export default {
    data() {
      return {
        type: 'sheet', // spread类型
        spreadId: '1',
        values: {'Sheet1': {'billCode': '01', 'billName': 'test', 'billAttrs':[{'编号':'A', '名称':'A', '类型':'text'}]}},
        sheetIds: [{'Ex1': '1'}, {'Ex2': '2'}],
        values1: {
          'Ex1': [{ email: "Alice", sex: '女', birthday: "1985/08/31", resume: "PM", level: 5 }],
          'Ex2': []}
      }
    },
    components: {
      'gc-generate-spread': GenerateSpread
    },
    methods: {
      save() {
        alert(this.values['Sheet1'].billAttrs[0]['类型'])
      },
      query() {
        this.values['Sheet1'].billCode = 'isurge@139.com'
        this.values1['Ex2'].push({ email: "lixintao", sex: '女', birthday: "1985/08/31", resume: "PM", level: 5 })
      },
      swap() {
        //this.formId = '2'
        this.type = 'book'
      },
      spreadClick(target) {
        alert("Spread button clicked")
      }
    }
  }
</script>
<style scoped>
</style>
