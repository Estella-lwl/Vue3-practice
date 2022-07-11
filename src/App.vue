<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <hr />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Demo v-if="isShowDemo" />
  <Test />

  <hr />
  <Home></Home>
  <!-- <CountUp
    class="myCounter"
    :end="2500"
    :duration="2.5"
    :options="{
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
      prefix: '',
      suffix: '',
    }"
  ></CountUp> -->
</template>

<script>
import { ref, isRef, watch } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Test from "@/components/Test";
import Demo from "@/components/Demo";
import Home from "@/views/Home";
// import CountUp from "@/components/CountUp";

export default {
  name: "App",
  components: {
    HelloWorld,
    Test,
    Demo,
    Home,
    // CountUp,
  },
  setup() {
    let name = ref("lihua");
    let age = ref(18);
    let job = ref();
    let isShowDemo = ref(true);

    console.log("是否为ref对象", isRef(name));

    watch((isShowDemo, newVal) => {
      console.log("点击了");
      if (newVal === true) {
        //
        console.log("显示");
      } else {
        //
        console.log("隐藏");
      }
    });

    return {
      name,
      age,
      job,
      isShowDemo,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
