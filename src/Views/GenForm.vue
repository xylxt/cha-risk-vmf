<template>
  <div class="wrap">
    <input type="button" value="查询" @click="query">
    <input type="button" value="保存" @click="save">
    <fm-generate-form 
      :data="jsonData" 
      :remote="remoteFuncs" 
      :value="values"
      ref="generateForm">
    </fm-generate-form>
  </div>
</template>
<script>
  import GenerateForm from '@/Components/GenerateForm'
  import form from './form'

  export default {
    data() {
      return {
        jsonData: form, // 表单配置中生成的json数据
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
          alert(data.rate)
          alert(this.values.email)
        }).catch(e => {
          // 数据校验失败
        })
      },
      query() {
        this.values.email = 'isurge@139.com'
      }
    },
    created() {
      // console.log('路由查询参数',this.$tab.query())
    },
  }
</script>
<style scoped>
</style>
