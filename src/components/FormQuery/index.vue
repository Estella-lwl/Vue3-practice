<template>
  <form v-show="status" ref="form" class="form" :model="formModel" size="small" layout="inline">
    <div v-if="isRender" style="flex-wrap: wrap" :gutter="10">
      <!-- <template v-for="(item, index) in queryList">
        <a-col v-else-if="" :key="index" v-bind="colProps"></a-col>
        <a-col v-bind="colProps">
          <a-button @click="submit">查询</a-button>
          <a-button @click="reset">重置</a-button>
        </a-col>
      </template> -->
      <button @click="changeNum"> * </button>
      <br />
      <button @click="submit">查询</button>
      <button @click="reset">重置</button>
    </div>
  </form>
</template>

<script setup>
import { watch, defineProps } from 'fs'

const formProps = defineProps({
  value: {
    type: Number,
    default: 0
  },
  status: {
    type: Boolean,
    default: false
  },
  link: {
    type: String,
    default: ''
  }
})

console.log('formProps:', formProps);
// loading: false,
// queryList: [],
// currentNum: this.value,
// isRender: true,
// colProps: {
//   xs: { span: 24 },
//   sm: { span: 12 },
//   md: { span: 8 },
//   lg: { span: 6 },
//   xl: { span: 4 }
// }


watch({
  formQuery: {
    handler(val) {
      console.log(val, val);
    },
    immediate: true,
    deep: true
  },

  schemas: {
    handler(val) {
      console.log('val', val);
      // this.schemasList =
    },
    immediate: true,
    deep: true
  }
})


// function validate() {
//   //
// }

function submit() {
  this.loading = true;
}

function reset() {
  this.$refs.form.resetFields();
}

function changeNum(val) {
  this.currentNum = val * 10;
  this.$emit('input', this.currentNum);
}
</script>

<style scoped>
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 99;
  width: 500px;
  height: 500px;
  box-shadow: 0 #3f3f33 0.5;
}
</style>
