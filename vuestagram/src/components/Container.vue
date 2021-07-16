<template>
  <div>
    <div v-if="step === 0">
      <Post
        :pickFliter="pickFliter"
        :feed="feed[index]"
        v-for="(list, index) in feed"
        :key="index"
      />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div
        class="upload-image"
        :class="`${pickFliter}`"
        :style="{ backgroundImage: `url(${imageUrl})` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="filter in filterData"
          :key="filter"
          :imageUrl="imageUrl"
          :filter="filter"
        >
          {{ filter }}
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div
        class="upload-image"
        :class="`${pickFliter}`"
        :style="{ backgroundImage: `url(${imageUrl})` }"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('setText', $event.target.value)"
          class="write-box"
        >
          write!
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import filterData from "../assets/filterData";

export default {
  name: "Container",
  data() {
    return {
      filterData: filterData,
    };
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    feed: Array,
    step: Number,
    imageUrl: String,
    pickFliter: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>