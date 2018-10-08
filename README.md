# 概述
项目为开发简单的企业管理系统与实时性要求不高的作业型系统提供了若干需要的基础功能，通过使用这些基础功能，可以使开发人员更多从事特定业务的开发，还可以通过固定的开发模式规范代码，使代码的可读性更高，更易于维护。

# 安装与使用
1. 安装nodejs与Git
1. 打开git shell，并进入待安装项目文件的目录
1. git clone https://github.com/xylxt/cha-risk-vmf.git
1. cd cha-risk-vmf
1. npm install，获取依赖的包
1. npm start，编译
1. npm run dev，启动开发服务
1. 在浏览器中打开 http://127.0.0.1:7120

# 目标
项目需要实现的主要特性如下：
1. 组织机构、人员管理：待实现
1. 用户、角色、权限管理：待实现
1. 功能管理（菜单、按键）：部分实现
1. 表单管理及与流程引擎的集成：待实现
1. 表单内容的定义与展现：部分实现
1. 后端服务访问的规范：部分实现

项目可能实现的特性有：
1. 前端微应用的集成架构
1. 后端数据的O-R转换定义
1. 批处理的定义与执行
1. 操作日志的记录与审计
1. 其它建议...

# 前端实现
前端为使用Vue的SPA应用，目前基于spreadJs、elementUI、https://github.com/noahlam/vue-multi-tab 、https://gitee.com/gavinzhulei/vue-form-making 等商用组件与开源项目。
1. spreadJS为可于浏览器上运行的类Excel商用组件，其实现了Excel的主要功能，通过模板的导入与数据绑定，可以方便的实现大量数据采集与精细化表格的数据录入等。其使用H5中的Canvas技术，前端响应效率优秀，具体见 https://www.grapecity.com.cn/developer/spreadjs 。
1. elementUI是国内开源的基于Vue的前端控件库，为Vue应用提供了方便的各类控件实现，具体见 http://element.eleme.io/ 。
1. vue-form-making是基于elementUI的表单生成功能，其采用拖拽的定义方式。项目为了更高开发效率，增加了简化版的表单定义格式，及与后端的集成。同时修改了数据绑定中的一些BUG。
1. vue-multi-tab是基于elementUI的多页签界面主框架，项目增加了无限层次菜单功能，及与后端的集成。

前端的构建采用webpack，可以通过 https://www.jianshu.com/p/42e11515c10f 学习。

# 后端实现
当前项目后端是基于webpack mock api实现，用于前端功能的验证。生产实现中，后端使用restful接口与前端通讯，开发语言没有限制。

# 目录结构
* ./dist下为编译后的文件
* ./node_modules下为项目的依赖包
* ./src下为源代码，其它为配置文件
* ./src/Components下为公共的Vue组件
* ./src/Frame下为界面主框架实现
* ./src/Images下为图标资料
* ./src/mocker下为webpack mock api的后端接口实现
* ./src/Router下为业务功能模块接口与注册
* ./src/Service下为服务的定义与转发实现
* ./src/Store下为Vuex store的注册
* ./src/Styles下为样式
* ./src/Views下为业务功能组件定义

# 开发规范
进行以下工作实现新功能节点
1. 在菜单定义中增加一个菜单项，目前通过修改./src/mocker/serverData/MainConf.js文件实现，菜单的component属性指向新开发的组件名称。
1. 在./src/Views中定义新功能的前端UI，形式为Vue组件。
1. 在./src/Router/TabRoute.js中注册刚才定义的组件，组件名与菜单中指向的组件名相同。
1. 为使代码组织的更加有序，并易于测试。如组件需调用后台服务，后台服务的定义与使用需遵循以下规范。
   * 在./src/Service目录下增加新文件进行服务接口的定义与转发实现
   * 接口方法的命名以AR、SR、AL、SL结尾，A代表异步、S代表同步、R代表转发后端、L代表前端实现。异步方法必需返回ES6的promise
   * 在./Frame/MainFrame.js中注册服务
      >Vue.factory.register({'userEnvService': UserEnvService})
   * 在组件定义文件中挂接服务
      >providers: ['userEnvService'],
   * 最后可通过this.userEnvService.xxAR()的形式进行服务调用
