// import { defineStore } from 'pinia';
import { store } from '@/store';

// *************pinia*******************s
// 第一个参数是该store的唯一id，第二个是store数据（对象形式）：
// export const testStore = defineStore('user', {
//   state: () => {
//     return {
//       name: 'lihua',
//       area: 'shenzhen',
//       age: 16,
//     };
//   },
//   getters: {
//     // 使用箭头函数，取state中的值时使用this
//     getAge: () => {
//       return this.age;
//     },
//     // 这样写就需要使用state参数：
//     // getAge(state) {
//     //   return state.age;
//     // },
//   },
// });
//
// export function useTestStore() {
//   return testStore(store);
// }
