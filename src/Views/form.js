export default {
  "list": [
    {
      "type": "grid",
      "name": "栅格布局",
      "icon": "th",
      "columns": [
        {
          "span": 6,
          "list": [
            {
              "type": "input",
              "name": "单行文本",
              "icon": "regular/keyboard",
              "options": {
                "width": "100%",
                "defaultValue": "",
                "required": true,
                "dataType": "email",
                "pattern": "",
                "placeholder": "",
                "remoteFunc": "func_1538480142000_77439"
              },
              "key": "1538480142000_77439",
              "model": "email",
              "rules": [
                {
                  "type": "email",
                  "message": "单行文本格式不正确"
                },
                {
                  "required": true,
                  "message": "单行文本必须填写"
                }
              ]
            }
          ]
        },
        {
          "span": 6,
          "list": [
            {
              "type": "date",
              "name": "日期选择器",
              "icon": "regular/calendar-alt",
              "options": {
                "defaultValue": "",
                "readonly": false,
                "disabled": false,
                "editable": true,
                "clearable": true,
                "placeholder": "",
                "startPlaceholder": "",
                "endPlaceholder": "",
                "type": "date",
                "format": "yyyy-MM-dd",
                "timestamp": false,
                "required": false,
                "width": "90%",
                "remoteFunc": "func_1538480159000_24303"
              },
              "key": "1538480159000_24303",
              "model": "date",
              "rules": []
            }
          ]
        },
        {
          "span": 6,
          "list": [
            {
              "type": "rate",
              "name": "评分",
              "icon": "regular/star",
              "options": {
                "defaultValue": 0,
                "max": 5,
                "disabled": false,
                "allowHalf": false,
                "required": false,
                "remoteFunc": "func_1538480197000_28270"
              },
              "key": "1538480197000_28270",
              "model": "rate",
              "rules": []
            }
          ]
        },
        {
          "span": 6,
          "list": [
            {
              "type": "select",
              "name": "下拉选择框",
              "icon": "regular/caret-square-down",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "",
                "options": [
                  {
                    "value": "下拉框1"
                  },
                  {
                    "value": "下拉框2"
                  },
                  {
                    "value": "下拉框3"
                  }
                ],
                "remote": false,
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "remoteFunc": "func_1538480214000_39366"
              },
              "key": "1538480214000_39366",
              "model": "sex",
              "rules": []
            }
          ]
        }
      ],
      "options": {
        "gutter": 5,
        "justify": "start",
        "align": "top",
        "remoteFunc": "func_1538480105000_93374"
      },
      "key": "1538480105000_93374",
      "model": "grid_1538480105000_93374",
      "rules": []
    },
    {
      "type": "grid",
      "name": "栅格布局",
      "icon": "th",
      "columns": [
        {
          "span": 24,
          "list": [
            {
              "type": "textarea",
              "name": "多行文本",
              "icon": "regular/keyboard",
              "options": {
                "width": "100%",
                "defaultValue": "",
                "required": false,
                "pattern": "",
                "placeholder": "",
                "remoteFunc": "func_1538480235000_36855"
              },
              "key": "1538480235000_36855",
              "model": "memo",
              "rules": []
            }
          ]
        }
      ],
      "options": {
        "gutter": 5,
        "justify": "start",
        "align": "top",
        "remoteFunc": "func_1538480219000_26238"
      },
      "key": "1538480219000_26238",
      "model": "grid_1538480219000_26238",
      "rules": []
    }
  ],
  "config": {
    "labelWidth": 100,
    "labelPosition": "left"
  }
}