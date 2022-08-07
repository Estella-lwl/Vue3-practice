import { reactive, onMounted, onBeforeUnmount } from 'vue';

// 默认暴露可以不用起名，汇依据使用时起的名字。
export default function () {
  const position = reactive({
    x: 0,
    y: 0
  });

  function savePosition(event) {
    position.x = event.pageX;
    position.y = event.pageY;
    console.log('FROM UseHook position: ', position.x, position.y);
  }

  onMounted(() => {
    window.addEventListener('click', savePosition);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePosition);
  });

  // 是函数，所以需要给返回值：
  // 将组件中需要的数据传出去：

  return position;
}
