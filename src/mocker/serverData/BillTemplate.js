var spreadTemp = {"version":"11.2.2","sheetCount":2,"sheets":{"Sheet1":{"name":"Sheet1","rowCount":202,"columnCount":19,"activeRow":11,"activeCol":2,"theme":"Office","data":{"dataTable":{"1":{"1":{"value":"单据编码"},"2":{"bindingPath":"billCode"},"3":{"value":"单据名称"},"4":{"bindingPath":"billName"},"5":{"style":{"hAlign":1,"vAlign":0,"font":"14.6667px Calibri","themeFont":"Body","locked":true,"cellType":{"typeName":"6","marginTop":0,"marginRight":0,"marginBottom":0,"marginLeft":0,"text":"查询"},"imeMode":1},"bindingPath":"bQuery"},"6":{"style":{"hAlign":1,"vAlign":0,"font":"14.6667px Calibri","themeFont":"Body","locked":true,"cellType":{"typeName":"6","marginTop":0,"marginRight":0,"marginBottom":0,"marginLeft":0,"text":"保存"},"imeMode":1},"bindingPath":"bSave"}},"4":{"3":{"value":"a","style":{"cellType":{"typeName":"7","items":[{"text":"a","value":"a"},{"text":"b","value":"b"}]}}}}},"defaultDataNode":{"style":{"themeFont":"Body"}}},"rowHeaderData":{"defaultDataNode":{"style":{"themeFont":"Body"}}},"colHeaderData":{"defaultDataNode":{"style":{"themeFont":"Body"}}},"selections":{"0":{"row":11,"rowCount":1,"col":2,"colCount":1},"length":1},"rowOutlines":{"direction":0},"tables":[{"name":"gcTable0","row":3,"col":1,"rowCount":2,"colCount":3,"style":{"buildInName":"Medium2"},"autoGenerateColumns":false,"bindingPath":"billAttrs","rowFilter":{"range":{"row":4,"rowCount":2,"col":1,"colCount":3},"typeName":"HideRowFilter","dialogVisibleInfo":{},"filterButtonVisibleInfo":{"0":true,"1":true,"2":true},"showFilterButton":true},"columns":[{"id":1,"name":"编号","dataField":"编号"},{"id":2,"name":"名称","dataField":"名称"},{"id":3,"name":"类型","dataField":"类型"}]}],"sheetAreaOffset":{"left":0,"top":0,"_left":0,"_top":0},"index":0},"Sheet2":{"name":"Sheet2","theme":"Office","data":{"dataTable":{}},"rowHeaderData":{},"colHeaderData":{},"selections":{"0":{"row":0,"rowCount":1,"col":0,"colCount":1},"length":1},"sheetAreaOffset":{"left":0,"top":0,"_left":0,"_top":0},"index":1}},"designerBindingPathSchema":{"$schema":"http://json-schema.org/draft-04/schema#","properties":{"billCode":{"dataFieldType":"text","type":"string"},"billName":{"dataFieldType":"text","type":"string"},"billAttrs":{"dataFieldType":"table","type":"array","items":{"type":"object","properties":{"编号":{"type":"string"},"名称":{"type":"string"},"类型":{"type":"string"}}}},"bQuery":{"dataFieldType":"button","type":"string"},"bSave":{"dataFieldType":"button","type":"string"}},"type":"object"}};

var formTemp1 = {
  'flag' : 'compact',
  'cols' : 4,
  'lists': [
    {
    	'type' : 'input',
    	'name' : '电子邮件',
    	'model' : 'email',
    	'dataType' : 'email',
    	'required' : true
    },
    {
    	'type' : 'date',
    	'name' : '生日',
    	'model' : 'birthday',
    	'defaultValue' : '2018-10-04'
    },
    {
    	'type' : 'rate',
    	'name' : '自我评级',
    	'model' : 'level'
    },
    {
    	'type' : 'select',
    	'name' : '性别',
    	'model' : 'sex',
    	'options' : '0:男;1:女'
    },
    {
    	'type' : 'textarea',
    	'name' : '个人简历',
    	'model' : 'resume',
    	'newLine' : true,
    	'span' : 4
    }
  ]
}

var formTemp2 = {
  'flag' : 'compact',
  'cols' : 3,
  'lists': [
    {
        'type' : 'input',
        'name' : '电子邮件',
        'model' : 'email',
        'dataType' : 'email',
        'required' : true
    },
    {
        'type' : 'date',
        'name' : '生日',
        'model' : 'birthday',
        'defaultValue' : '2018-10-04'
    },
    {
        'type' : 'rate',
        'name' : '自我评级',
        'model' : 'level'
    },
    {
        'type' : 'select',
        'name' : '性别',
        'model' : 'sex',
        'options' : '0:男;1:女'
    },
    {
        'type' : 'textarea',
        'name' : '个人简历',
        'model' : 'resume',
        'newLine' : true,
    }
  ]
}


module.exports = {spreadTemp, formTemp1, formTemp2}