import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      likes: 0,
      clickState: false,
      more: {},
    };
  },
  mutations: {
    addLike(state) {
      if (state.clickState === false) {
        state.likes += 1;
        state.clickState = true;
      } else {
        state.likes -= 1;
        state.clickState = false;
      }
    },
    setMore(state, data) {
      state.more = data;
    },
  },
  //ajax 또는 오래걸리는 작업들 처리
  actions: {
    getData(context) {
      axios
        .get(`https://codingapple1.github.io/vue/more0.json`)
        .then((result) => {
          // console.log(this.clickBtn);
          console.log(result.data);
          context.commit('setMore', result.data);
        });
    },
  },
});

export default store;
