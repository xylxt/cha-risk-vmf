import {basicComponents, layoutComponents} from './formConfig'

let template = {
  "config": {
    "labelWidth": 100,
    "labelPosition": "left"
  },
  "column": {
    "span": 6,
    "list": []
  },
  "rules": {
    "input-string": {"type": "email", "message": "请输入文字"},
    "input-number": {"type": "email", "message": "请输入数字"},
    "input-email": {"type": "email", "message": "请输入正确的电子邮件地址"},
    "input-url": {"type": "email", "message": "请输入正确的URL"},
    "*-required": {"required": true, "message": "请输入必填项"}
  }
}

let generateUUID = function() {
  let d = new Date().getTime()
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = (d + Math.random()*16)%16 | 0
    d = Math.floor(d/16);return (c=='x' ? r : (r&0x3|0x8)).toString(16)
  })
  return uuid
}

let getFormJson = function(src) {
  if (src.flag == 'compact')
    return genFormJson(src)
  else
    return src
}

let getItemRules = function(item) {
  let rules = []

  if (item.required) 
    rules.push(JSON.parse(JSON.stringify(template.rules['*-required'])))
  if (item.type == 'input')
    rules.push(JSON.parse(JSON.stringify(template.rules['input-'+item.dataType])))

  return rules
}

let getFormItemJson = function(item) {
  let options = item
  let newItem = {}
  let prototype = basicComponents.filter((component)=> component.type==item.type)[0]

  newItem.type = item.type?item.type:prototype.type
  newItem.name = item.name?item.name:prototype.name
  newItem.icon = item.icon?item.icon:prototype.icon
  newItem.key = "key"+generateUUID()
  newItem.model = item.model
  newItem.rules = getItemRules(item)

  delete item.type
  delete item.name
  delete item.model

  newItem.options = JSON.parse(JSON.stringify(prototype.options))

  if (['radio', 'checkbox', 'select'].filter((i)=>i==newItem.type).length > 0){
    newItem.options.options.length = 0
    if (item.options) {
      item.options.split(";").forEach((option)=>{
      	let eIndex = option.indexOf(':')
	      let qvalue = option.substr(0,eIndex)
	      let qlabel = option.substr(eIndex + 1)
	      let optionObj = {"value": qvalue, "label": qlabel}
        newItem.options.options.push(optionObj)
      })
      delete item.options
    }
  }

  Object.assign(newItem.options, item)

  return newItem
}

let getSheetItemJson = function(item, size) {
  let newItem = {}

  newItem.displayName = item.name
  newItem.name = item.model
  newItem.size = (item.span?item.span:1)*size

  if (['radio', 'checkbox', 'select'].filter((i)=>i==newItem.type).length > 0){
    newItem.options.options.length = 0
    if (item.options) {
      options = []
      item.options.split(";").forEach((option)=>{
        let eIndex = option.indexOf(':')
        let qvalue = option.substr(0,eIndex)
        let qlabel = option.substr(eIndex + 1)
        let optionObj = {"value": qvalue, "text": qlabel}
        options.push(optionObj)
      })
      let combo = new GC.Spread.Sheets.CellTypes.ComboBox()
      combo.items(options)
      newItem.cellType = combo
    }
  }

  return newItem
}

let genFormJson = function(src) {
  let target = {"config": null, "list": []}
  let curRow = null
  let colSize = 24/src.cols
  let rowUsed = 24

  target.config = JSON.parse(JSON.stringify(template.config))

  for (let item of src.lists){
    if (rowUsed == 24 || item.newLine) {
    	curRow = JSON.parse(JSON.stringify(layoutComponents[0]))
    	curRow.columns.length = 0
    	target.list.push(curRow)
    	rowUsed = 0
    }
    let curCol = JSON.parse(JSON.stringify(template.column))
    curCol.span = colSize*(item.span?item.span:1)
    curRow.columns.push(curCol)
    curCol.list.push(getFormItemJson(item))
    rowUsed += curCol.span
  }

  return target
}

export {getFormJson, getSheetItemJson}