new Vue({
  el: '#app',
  data: {
    myChoice: null,
    comChoice: null,
    count: 3,
    winner: null,
    lifeOfMe: 3,
    lifeOfCom: 3,
    // 기다리는 중 or 선택완료
    isSelectable: true,
    logs: [],
    selects: [
      { name: '가위', value: 'scissor' },
      { name: '바위', value: 'rock' },
      { name: '보', value: 'paper' },
    ],
  },
  // computed : 어떤 조건에 따라서 다른 값을 출력 할때 사용
  computed: {
    myChoiceImg: function () {
      // 사용자 선택에 따른 이미지 변경, 아무것도 선택하지 않았을때 기본이미지 출력
      return this.myChoice !== null
        ? `images/${this.myChoice}.jpg`
        : 'images/question.jpg';
    },
    comChoiceImg: function () {
      // 컴퓨터의 선택에 따른 이미지 변경
      return this.comChoice !== null
        ? `images/${this.comChoice}.jpg`
        : 'images/question.jpg';
    },
    leftLifeOfMe: function () {
      return 3 - this.lifeOfMe;
    },
    leftLifeOfCom: function () {
      return 3 - this.lifeOfCom;
    },
  },
  //   감시자(watch)를 통해서 count를 감시하고 있다가 count가 0이 되면 기능 수행
  watch: {
    count: function (newVal) {
      if (newVal === 0) {
        //컴퓨터가 가위바위보 선택
        this.selectCom();

        //가위바위보 승패 결정 & 하트 차감
        this.whoIsWin();

        // 게임 리셋
        this.count = 3;

        //기다리는 중 버튼 활성화
        this.isSelectable = true;

        // 로그 업데이트
        this.updateLogs();
      }
    },
    lifeOfMe: function (newVal) {
      if (newVal === 0) {
        // 게임종료
        this.endGame('안타깝네요. 당신이 패배하였습니다.');
      }
    },
    lifeOfCom: function (newVal) {
      if (newVal === 0) {
        // 게임종료
        this.endGame('축하합니다. 당신이 승리하였습니다.');
      }
    },
  },
  methods: {
    // 선택완료 버튼 클릭 시 startGame함수 호출
    startGame: function () {
      if (this.myChoice === null) {
        alert('가위 바위 보 중 하나를 선택해주에요.');
      } else {
        // 기다리는 중 버튼 비활성화
        this.isSelectable = false;
        let countDown = setInterval(() => {
          //   1초마다 count 감소
          this.count--;
          if (this.count === 0) {
            // count가 0이되면 중단
            clearInterval(countDown);
          }
        }, 1000);
      }
    },
    selectCom: function () {
      //컴퓨터가 가위바위보 선택
      let number = Math.random();
      if (number < 0.33) {
        this.comChoice = 'scissor';
      } else if (number < 0.66) {
        this.comChoice = 'rock';
      } else {
        this.comChoice = 'paper';
      }
    },
    whoIsWin: function () {
      if (this.myChoice === this.comChoice) this.winner = 'no one';
      else if (this.myChoice === 'rock' && this.comChoice === 'scissor')
        this.winner = 'me';
      else if (this.myChoice === 'scissor' && this.comChoice === 'paper')
        this.winner = 'me';
      else if (this.myChoice === 'paper' && this.comChoice === 'rock')
        this.winner = 'me';
      else if (this.myChoice === 'scissor' && this.comChoice === 'rock')
        this.winner = 'com';
      else if (this.myChoice === 'paper' && this.comChoice === 'scissor')
        this.winner = 'com';
      else if (this.myChoice === 'rock' && this.comChoice === 'paper')
        this.winner = 'com';
      else this.winner = 'error';

      // 하트 차감
      if (this.winner === 'me') {
        this.lifeOfCom--;
      } else if (this.winner === 'com') {
        this.lifeOfMe--;
      }
    },
    updateLogs: function () {
      let log = {
        message: `You ${this.myChoice}, Computer: ${this.comChoice}`,
        winner: this.winner,
      };
      // unshift : 가장최근 log가 제일 위에 보여짐
      this.logs.unshift(log);
    },
    endGame: function (msg) {
      setTimeout(() => {
        confirm(msg);
        this.lifeOfMe = 3;
        this.lifeOfCom = 3;
        this.myChoice = null;
        this.comChoice = null;
        this.winner = null;
        this.logs = [];
      }, 500);
    },
  },
});
