<template>
  <div class="wrap">
    <el-row>
      <el-button type="primary" @click="query" round>查询</el-button>
      <el-button type="primary" @click="save" round>保存</el-button>
      <el-button type="primary" @click="swap" round>切换界面</el-button>
    </el-row>
    <fm-generate-form 
      :formId="formId" 
      :remote="remoteFuncs" 
      :value="values"
      ref="generateForm">
    </fm-generate-form>
  </div>
</template>
<script>
  import GenerateForm from '@/Components/GenerateForm'

  export default {
    data() {
      return {
        formId: '1', // 单据编号
        values: {'email':'lixintao@chamc.com.cn'}, // 表单需要显示的表单数据
        remoteFuncs: {
          // 组件配置时配置的远端方法,保持和配置时输入的名称一致
          func_test (resolve) {
            // 模拟接口请求
            setTimeout(() => {
              const options = [
                {id: '1', name: '1111'},
                {id: '2', name: '2222'},
                {id: '3', name: '3333'}
              ]
                    
              // 获取到的值和标签可以通过配置页远端配置
              // 值:id  标签：name
        
              resolve(options) // 将后端获取的数据放入回调函数中
            }, 2000)
          }
        }
      }
    },
    components: {
      'fm-generate-form': GenerateForm
    },
    methods: {
      save() {
        // 调用此方法验证表单数据和获取表单数据
        this.$refs.generateForm.getData().then(data => {
          // 数据校验成功
          // data 为获取的表单数据
          alert(data.level)
          alert(data.email)
        }).catch(e => {
          alert(e)
        })
      },
      query() {
        this.values.email = 'isurge@139.com'
      },
      swap() {
        this.formId = '2'
      }
    }
  }
</script>
<style scoped>
</style>
