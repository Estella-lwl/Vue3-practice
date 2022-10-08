import Vue from 'vue';

// (指令名, 配置对象/回调函数)
Vue.directives(shake, shake);

const shake = {
  // 指令和元素成功绑定时调用:
  bind(el, binding) {
    console.log(el, binding);
  },

  // 被插入页面时调用：
  inserted() {
    //
  },

  // 在模板中被重新解析时调用：
  update() {
    //
  },
};
