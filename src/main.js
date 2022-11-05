import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// TODO:
// import setupStore from './store';

import directives from './directives'; //导入自定义指令
// import '@/assets/less/index.less';
import 'animate.css';

const app = createApp(App, () => {
  // 实例创建完成后被立即调用rem换算方法,解决内容闪现问题
  // if (
  //   navigator.userAgent.match(
  //     /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  //   )
  // ) {
  //   setRem();
  //   window.addEventListener('resize', setRem); //浏览器窗口大小改变时调用rem换算方法
  // } else {
  //   setRemPC();
  //   window.addEventListener('resize', setRemPC); //浏览器窗口大小改变时调用rem换算方法
  // }
});
app.use(router).use(store).mount('#app');
directives(app);

// TODO:
// const app = createApp(App);

app.use(router).mount('#app');
directives(app); // 注册全局自定义指令

// TODO:
// setupStore(app);

// rem适配：
if (
  navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
) {
  setRem();
  window.addEventListener('resize', setRem); //浏览器窗口大小改变时调用rem换算方法
} else {
  setRemPC();
  window.addEventListener('resize', setRemPC); //浏览器窗口大小改变时调用rem换算方法
}
// 手机端
function setRem() {
  var whdef = 100 / 750; // 表示750的设计图,使用100PX的默认值
  var bodyWidth = document.body.clientWidth; // 当前窗口的宽度
  var rem = bodyWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
}
//pc端
function setRemPC() {
  var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
  var bodyWidth = document.body.clientWidth; // 当前窗口的宽度
  var rem = bodyWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
}
