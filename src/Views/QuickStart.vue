<template>
  <div>
    <h3>快速入门指南</h3>
    <div>
      按照以下步骤快速将 Spread Sheets 应用到 Vue 的应用程序中：
      <div>
        <p>1. 添加 Spread Sheets 产品引用到 Vue 的应用程序中。</p>
        <p>2. 添加一个组件来提供数据和业务实现。</p>
        <p>3. 绑定数据，并设置其他 Spread Sheets 属性。</p>
        <p>4. 添加一些 css 属性来定制外观。</p>
      </div>
    </div>
    <div class="spreadContainer" >
      <gc-spread-sheets :hostClass='"spreadHost"' ref="spread" 
        @workbookInitialized="init" @buttonClicked="click">
      </gc-spread-sheets>
    </div>
  </div>
</template>
<script>
  import GC from '@grapecity/spread-sheets'
  import '@grapecity/spread-sheets-vue'
  import temp from './temp'

  GC.Spread.Common.CultureManager.culture("zh-cn");

  export default {
//    name: 'sample-header'
    data: function(){
      return {dataSrc: {'billCode': '01', 'billName': 'test', 'billAttrs':[{'编号':'A', '名称':'A', '类型':'text'}]}}          // 全局配置
    },
    methods: {
      click(event, target) {
        alert(this.dataSrc.billCode)
        this.dataSrc.billCode = '03'
        alert(this.dataSrc.billCode)
        //this.dataSrc.billAttrs = [{'编号':'B', '名称':'B', '类型':'text'}, {'编号':'C', '名称':'C', '类型':'text'}]
      },
      init(spread) {
        spread.fromJSON(temp)
        let sheet = spread.getActiveSheet();
        sheet.setDataSource(new GC.Spread.Sheets.Bindings.CellBindingSource(this.dataSrc))
      }
    }
  }
</script>
<style scoped>
  .componentContainer {
    position: absolute;
    padding: 10px;
    left: 242px;
    top: 0;
    bottom: 20px;
    right: 0;
  }
  .spreadContainer {
    padding: 10px;
    box-shadow: 0 0 20px grey;
  }
  .spreadContainer{
    position: absolute;
    left: 0px;
    right: 30px;
    top: 260px;
    bottom: 10px;
  }
  .spreadHost{
    width: 100%;
    height: 100%;
  }


</style>
