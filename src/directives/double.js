export default function (app) {
  app.directive('double', (el, binding) => {
    // mounted相当于vue2中的insert：
    // mounted(el, binding) {
    //   console.log('el:', el, binding);
    //   el.innerHtml = binding.value * 2;
    // },

    // 当只需mounted和updated中逻辑一致时，可以简写为：
    el.innerHTML = binding.value * 2;
  });
}
