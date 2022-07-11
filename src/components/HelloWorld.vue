<template>
  <div class="hello">
    <h1 ref="title">{{ msg }}</h1>
    <h2>{{ counter }}</h2>
    <h3>{{ counter2 }}</h3>
    <button @click="onClick">click</button>
  </div>
  <br />
  <br />
  <modalDialog></modalDialog>
</template>

<script>
import { computed, ref, watch } from "vue";
import modalDialog from "./modalDialog.vue";

export default {
  name: "HelloWorld",
  components: { modalDialog },
  props: {
    msg: String,
  },
  // 最先执行
  setup(props) {
    console.log(props);

    // ref实现响应式，模板中直接使用
    let counter = ref(0);
    // ***********这里发现一个问题：当想让counter2在每次counter变化时都+1，但是数据却停留在最开始，后续点击无效。
    let counter2 = ref(counter.value + 1);
    // 通过打印可以看到ref返回的是一个对象，接收的参数就是对象的value值。
    console.log(counter); // { value: 0 }
    console.log("最开始", counter.value, counter2.value); // 0

    function onClick() {
      counter.value++;
      // counter2.value++;
      console.log(counter.value, counter2.value);
      let double = computed(() => {
        return counter.value * 2;
      });
      console.log("double: ", double);
    }

    watch([counter], (newVal, oldVal) => {
      // let counter2 = ref(counter.value + 1);
      // console.log(counter.value, counter2.value);
      console.log("外层", newVal, oldVal);
      // console.log(counter, counter2);
      if (counter.value === 3) {
        console.log(newVal, oldVal);
      }
    });

    // return里的内容要和上面的使用保持一致：
    return {
      counter,
      counter2,
      onClick,
    };

    // 除了返回对象，也可以返回渲染函数。（需要先import）
    // return () => h("h1", counter2);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
