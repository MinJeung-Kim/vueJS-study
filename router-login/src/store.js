import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: 'roxie', email: 'roxie@gmail.com', password: '1234' },
      { id: 2, name: 'test', email: 'text@gmail.com', password: '1234' },
    ],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    // 로그인이 성공했을 때,
    // payload = selectedUser
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },

    // 로그인이 실패했을 때
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },

    // 로그아웃
    logout(state) {
      state.isLogin = false;
      state.loginError = false;
      state.userInfo = null;
    },
  },
  actions: {
    // 로그인 시도
    // mutations함수를 실행 시키기 위해서는 commit를 실행해야 한다.
    login({ commit, dispatch }, loginObj) {
      // 로그인 => 유효한 멤버인지 확인 후 토큰 반환
      axios
        .post('https://reqres.in/api/login', loginObj) // 파라미터(body)
        .then((response) => {
          // 성공 시 token: value(user id) 리턴
          // 토큰을 헤더에 포함 시켜서 유저 정보를 요청
          let token = response.data.token;

          // 토큰을 로컬스토리지에 저장('key', value)
          localStorage.setItem('access_coken', token);
          dispatch('getMemberInfo');
        })
        .catch(() => {
          commit('loginError');
        });
    },
    logout({ commit }) {
      commit('logout');
      // 로그아웃을 하게되면 home 페이지로 이동.
      router.push({ name: 'home' });
    },
    getMemberInfo({ commit }) {
      //로컬 스토리지에 저장된 토큰을 불러온다.
      let token = localStorage.getItem('access_token');
      let config = {
        headers: {
          'access-token': token,
        },
      };
      // 반환된 토큰으로 멤버 정보(userInfo)를 반환
      // 새로고침을 했을때 토큰만 가지고 멤버 정보를 요청
      axios
        .get('https://reqres.in/api/users/2', config)
        .then((res) => {
          let userInfo = {
            id: res.data.data.id,
            first_name: res.data.data.first_name,
            last_name: res.data.data.last_name,
            avatar: res.data.data.avatar,
          };
          commit('loginSuccess', userInfo);
        })
        .catch(() => {
          commit('loginError');
        });
    },
  },
});
