import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: new Date().toLocaleDateString(),
    };
  },
});

export default store;

// TODO:
// import { App } from 'vue';
// import { createPinia } from 'pinia';

// const store = createPinia();

// export function setupStore(app) {
//   app.use(store);
// }

// export { store };
