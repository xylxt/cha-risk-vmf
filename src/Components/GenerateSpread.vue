<template>
  <gc-spread-sheets :hostClass='"spreadHost spreadContainer"' ref="spread" 
    @workbookInitialized="init" @buttonClicked="click">
  </gc-spread-sheets>
</template>
<script>
import GC from '@grapecity/spread-sheets'
import '@grapecity/spread-sheets-vue'
import {getSheetItemJson} from './GenFormTemplate'

GC.Spread.Common.CultureManager.culture("zh-cn");

export default {
  name: 'gc-generate-spread',
  props: ['type', 'spreadId', 'sheetIds', 'value','colSize'],
  data() {
    return {
      env: {}
    }
  },
  computed: {
    colSizeEx() {
      if (!this.colSize) 
        return 100
      else
        this.colSize
    }
  },
  providers: ['billConfigService'],
  methods: {
    click(event, target) {
      this.$emit('buttonClicked', target)
    },
    init(spread) {
      this.initSpread(spread)
    },
    initSpread(spread) {
      this.env.spread = spread
      if (this.type == 'sheet' && this.sheetIds && this.sheetIds.length > 0 && Base64.encode(JSON.stringify(this.sheetIds)) != this.env.sheetCode) {
        this.initSheet(spread)
        this.env.sheetCode = Base64.encode(JSON.stringify(this.sheetIds))
      }
      else if (this.type == 'book' && this.spreadId && this.spreadId != this.env.spreadId) {
        this.initBook(spread)
        this.env.spreadId = this.spreadId
      }
    },
    initSheet(spread){
      let _this = this
      spread.setSheetCount(this.sheetIds.length)
      for (let idx in this.sheetIds) {
        let sheetId = this.sheetIds[idx]
        this.billConfigService.getFormConfigAR(Object.values(sheetId)[0]).then(function(res){
          let colInfos = _this.getColInfo(res.data)
          let sheet = spread.getSheet(idx)
          let key = Object.keys(sheetId)[0]
          sheet.name(key)
          sheet.autoGenerateColumns = true
          sheet.setDataSource(_this.value[key])
          for(let i in colInfos) {
            sheet.bindColumn(i, colInfos[i])
          }
        })
      }        
    },
    getColInfo(config) {
      let colInfos = []
      for (let i of config.lists){
        let item = getSheetItemJson(i, this.colSizeEx)
        colInfos.push(item)
      }
      return colInfos
    },
    initBook(spread){
      let _this = this
      this.billConfigService.getSpreadConfigAR(this.spreadId).then(function(res){
        spread.fromJSON(res.data)
        for (let key in _this.value) {
          let sheet = spread.getSheetFromName(key)
          if (! sheet) console.log('无法得到名为['+key+']的sheet')
          sheet.setDataSource(new GC.Spread.Sheets.Bindings.CellBindingSource(_this.value[key]))  
        }
      })
    }    
  },
  watch: {
    type: {
      deep: false,
      handler (val) {
        this.init(this.env.spread)
      }
    },
    spreadId: {
      deep: false,
      handler (val) {
        this.init(this.env.spread)
      }
    },
    tables: {
      deep: true,
      handler (val) {
        this.init(this.env.spread)
      }
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
  .spreadContainer{
    position: relative;
    left: 0px;
    right: 30px;
    top: 5px;
    bottom: 10px;
  }
  .spreadHost{
    width: 100%;
    height: 100%;
  }


</style>
