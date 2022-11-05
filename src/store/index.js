import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: new Date().toLocaleDateString(),
    };
  },
});

export default store;
