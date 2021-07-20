<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input @input="doThis" placeholder="🔍" />
    <div class="post-header" v-for="follower in followers" :key="follower">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${follower.image})` }"
      ></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  setup() {
    let followers = ref([]);
    console.log(followers.value);

    onMounted(() => {
      axios.get("/follower.json").then((result) => {
        followers.value = result.data;
      });
    });

    // 검색기능
    function doThis(event) {
      console.log(event.target.value);
      console.log(followers);
    }

    return { followers, doThis };
  },
};
</script>

<style>
</style>