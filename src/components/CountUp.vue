<template>
  <div id="countBox" ref="countupRef">
    <span class="countSpan"></span>
  </div>
</template>

<script>
import { CountUp } from "countup.js";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  name: "CountUp",
  props: {
    start: {
      type: Number,
      default: 0,
    },
    end: {
      type: Number,
      default: 100,
    },
    duration: {
      type: Number,
      default: 0,
    },
    options: {
      type: Object,
    },
  },

  // 子页面拿到父组件传递进来的值：在setup中写参数可以打印到。
  setup(props) {
    console.log("props: ", props);
    let numAnim = null;
    // console.log(start, end);
    const countupRef = ref(null);
    console.log("ref", countupRef);

    function initCountup() {
      // DONE: 改为ref
      // 只能使用id，类名也不行。
      numAnim = new CountUp("countBox", props.start, props.end);
      numAnim.start();
    }
    onMounted(() => {
      initCountup();
      console.log(countupRef);
    });

    return {
      numAnim,
      initCountup,
      countupRef,
    };
  },
};
</script>

<style>
#countBox {
  /* position: fix;
  left: 50%;
  bottom: 0;
  z-index: 99999999 !important;
  width: 100px;
  height: 100px; */
  background-color: cornflowerblue;
}

.countSpan {
  display: inline-block;
  width: 200px;
  height: 200px;
}
</style>
