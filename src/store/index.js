<<<<<<< HEAD
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: new Date().toLocaleDateString(),
    };
  },
});

export default store;
=======
import { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

export function setupStore(app) {
  app.use(store);
}

export { store };
>>>>>>> 0922f804f97a4a1367ff581dc6638bdc3e5c92d7
