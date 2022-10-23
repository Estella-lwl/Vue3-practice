<template>
  <div id="common-page">
    <h2>HOME</h2>
    <button @click="openModal('true')">弹窗</button>
    <div>
      <span>当前时间：</span>
      <transition
        appear
        name="animate__animated animate__swing"
        :duration="1000"
      >
        <h2 v-shake>
          {{ currTime }}
        </h2>
      </transition>

      <span>两倍天数：</span>
      <!-- 这里传入的值将会被该自定义指令处理后渲染： -->
      <h6 v-double="doubleNum"></h6>
    </div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CountUp from '@/components/CountUp.vue';
import FormQuery from '@/components/FormQuery/index.vue';

let start = ref(2022);
let end = ref(0);
console.log('start end', start.value, end.value);

let statusFlag = ref(false);
function openModal(status) {
  console.log('点击状态', status);
  statusFlag.value = status;
}

// 当前日期：
let currTime = new Date().toLocaleDateString();
console.log('currTime:', currTime, typeof currTime);
let doubleNum = ref(currTime.slice(8, 10));
console.log('', doubleNum);
</script>

<style scoped>
.myCounter {
  width: 300px;
  height: 200px;
}
</style>
