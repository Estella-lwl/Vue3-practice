<template>
  <CountUp
    ref="countup"
    class="myCounter"
    :start="start"
    :end="end"
    :duration="2.5"
    :options="{
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
      prefix: '',
      suffix: '',
    }"
  ></CountUp>
</template>

<script>
import { ref } from "vue";
// import CountUp from "@/components/CountUp.vue";
import CountUp from "@/components/CountUp.vue";

export default {
  name: "",
  components: { CountUp },
  setup() {
    let start = ref(2022);
    let end = ref(0);
    console.log("start end", start.value, end.value);

    return {
      start,
      end,
    };
  },
};
</script>

<style>
.myCounter {
  width: 300px;
  height: 200px;
}
</style>
