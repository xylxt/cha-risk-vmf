<template>
  <div>
    <el-form :model="value" :rules="rules" :label-position="template.config.labelPosition" :label-width="template.config.labelWidth + 'px'">
      <template v-for="item in template.list">

        <template v-if="item.type == 'grid'">
          <el-row
            :key="item.key"
            type="flex"
            :gutter="item.options.gutter ? item.options.gutter : 0"
            :justify="item.options.justify"
            :align="item.options.align"
          >
            <el-col v-for="(col, colIndex) in item.columns" :key="colIndex" :span="col.span">
              

              <template v-for="citem in col.list" >
                <el-form-item v-if="citem.type=='blank'" :label="citem.name" :prop="citem.model" :key="citem.key">
                  <slot :name="citem.model" :model="value"></slot>
                </el-form-item>
                <genetate-form-item v-else :key="citem.key" :models.sync="value" :remote="remote" :rules="rules" :widget="citem"></genetate-form-item>
              </template>
            </el-col>
          </el-row>
        </template>

        <template v-else-if="item.type == 'blank'">
          <el-form-item :label="item.name" :prop="item.model" :key="item.key">
            <slot :name="item.model" :model="value"></slot>
          </el-form-item>
        </template>

        <template v-else>
          <genetate-form-item :key="item.key" :models.sync="value" :rules="rules" :widget="item" :remote="remote"></genetate-form-item>
        </template>
        
      </template>
    </el-form>
  </div>
</template>

<script>
import GenetateFormItem from './GenerateFormItem.vue'
import {getFormJson} from './GenFormTemplate'

export default {
  name: 'fm-generate-form',
  components: {
    GenetateFormItem
  },
  props: ['formId', 'remote', 'value'],
  data () {
    return {
      template: {'config': {}},
      rules: {}
    }
  },
  created () {
    this.initTemplate()
  },
  providers: ['billConfigService'],
  methods: {
    initTemplate() {
      let _this = this
      this.billConfigService.getFormConfigAR(this.formId).then(function(res){
        _this.genTemplate(res.data)
        _this.generateModle(_this.template.list)
      })
    },
    genTemplate(data) {
      let template = getFormJson(data)
      this.template = {...this.template, ...template}
    },
    generateModle (genList) {
      for (let i = 0; i < genList.length; i++) {
        if (genList[i].type === 'grid') {
          genList[i].columns.forEach(item => {
            this.generateModle(item.list)
          })
        } else {
          if (Object.keys(this.value).indexOf(genList[i].model) == -1) {
            if (genList[i].type === 'blank') {
              this.value[genList[i].model] = genList[i].options.defaultType === 'String' ? '' : (genList[i].options.defaultType === 'Object' ? {} : [])
            } else {
              this.value[genList[i].model] = genList[i].options.defaultValue
            }
            
          }
          
          if (this.rules[genList[i].model]) {
            this.rules[genList[i].model] = [...this.rules[genList[i].model], ...genList[i].rules]
          } else {
            this.rules[genList[i].model] = [...genList[i].rules]
          }       
        }
      }
    },
    getData () {
      let _this = this
      return new Promise(function(resolve, reject) {
        _this.$children[0].validate(function(valid) {
          if (valid) {
            resolve(_this.value)
          } else {
            reject(new Error('表单数据校验失败').message)
          }
        })
      })
    }
  },
  watch: {
    formId: {
      deep: false,
      handler (val) {
        this.initTemplate()
      }
    }
  }
}
</script>
