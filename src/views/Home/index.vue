<template>
  <div id="common-page">
    <h2>HOME</h2>
    <button @click="openModal('true')">弹窗</button>
    <!-- <FormQuery
    v-show="statusFlag === true"
    link="/Home"
    :status="statusFlag"
  ></FormQuery> -->

    <!-- <CountUp
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
  ></CountUp> -->
    <!-- <Test></Test> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CountUp from '@/components/CountUp.vue';
import Test from '@/views/Test/index.vue';
import FormQuery from '@/components/FormQuery/index.vue';

// components: { CountUp, Test, FormQuery };

let start = ref(2022);
let end = ref(0);
console.log('start end', start.value, end.value);

let statusFlag = ref(false);
function openModal(status) {
  console.log('点击状态', status);
  statusFlag.value = status;
}
</script>

<style scoped>
.myCounter {
  width: 300px;
  height: 200px;
}
</style>
