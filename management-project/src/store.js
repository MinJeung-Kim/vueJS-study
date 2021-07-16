import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
    headers: [
      {
        text: '이름',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '나이', value: 'age' },
      { text: '주소', value: 'addr' },
      { text: '직업', value: 'job' },
      { text: '운동목표', value: 'target' },
      { text: '출몰시간', value: 'inTime' },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        age: 20,
        addr: '인천',
        job: '소방관',
        target: '체력증진',
        inTime: '6:30',
      },
      {
        name: 'Ice cream sandwich',
        age: 23,
        addr: '서울',
        job: '선생님',
        target: '재밌어서',
        inTime: '6:30',
      },
      {
        name: 'Eclair',
        age: 40,
        addr: '서울',
        job: '공무원',
        target: '취미',
        inTime: '6:30',
      },
      {
        name: 'Cupcake',
        age: 34,
        addr: '인천',
        job: '자영업',
        target: '체력증진',
        inTime: '6:30',
      },
      {
        name: 'Gingerbread',
        age: 29,
        addr: '서울',
        job: '개발자',
        target: '바디프로필',
        inTime: '6:30',
      },
      {
        name: 'Jelly bean',
        age: 19,
        addr: '대전',
        job: '개발자',
        target: '체력증진',
        inTime: '6:30',
      },
      {
        name: 'Lollipop',
        age: 43,
        addr: '서울',
        job: '건설업',
        target: '체력증진',
        inTime: '6:30',
      },
      {
        name: 'Honeycomb',
        age: 33,
        addr: '경기도',
        job: '개발자',
        target: '건강',
        inTime: '6:30',
      },
      {
        name: 'Donut',
        age: 35,
        addr: '서울',
        job: '미용사',
        target: '체력증진',
        inTime: '6:30',
      },
      {
        name: 'KitKat',
        age: 26,
        addr: '경기도',
        job: '요리사',
        target: '건강',
        inTime: '6:30',
      },
    ],
  },
  mutations: {},
  actions: {},
});
