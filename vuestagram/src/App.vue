<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- 게시물 content -->
  <Container
    :feed="feed"
    :step="step"
    :imageUrl="imageUrl"
    @setText="myContent = $event"
    :pickFliter="pickFliter"
  />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        type="file"
        accept="image/*"
        multiple
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import data from "./assets/data.js";
import Container from "./components/Container.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      feed: data, // 게시물
      clickBtn: 0, // 더보기 클릭 수
      step: 0,
      imageUrl: "",
      myContent: "",
      pickFliter: "",
    };
  },
  mounted() {
    // FilterBox.vue 자손 컴포넌트에서 보낸 이벤트 수신.
    this.emitter.on("selectFilter", (data) => {
      this.pickFliter = data;
    });
  },
  components: { Container },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.clickBtn}.json`)
        .then((result) => {
          // console.log(this.clickBtn);
          this.feed.push(result.data);
          this.clickBtn++;
        });
    },
    // 파일 업로드
    upload(event) {
      let img = event.target.files;
      console.log(img);
      this.imageUrl = URL.createObjectURL(img[0]);
      this.step = 1;
    },
    publish() {
      let myFeed = {
        name: "gongJu",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imageUrl,
        likes: 1000,
        date: "May 15",
        liked: false,
        content: this.myContent,
        filter: this.pickFliter,
      };
      this.feed.unshift(myFeed);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
