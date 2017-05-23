export default{
  install(Vue,options)
  {
    Vue.prototype.getData = function () {
      console.log('我是插件中的方法');
    }
  }
}                           //外部方法调用方式