<template>
  <div class="list-group" v-for="blogList in blogContents" :key="blogList"> 
    <a href="#" class="list-group-item list-group-item-action" @click="$router.push('/detail/0')">
      <div class="d-flex w-100 justify-content-between">
        <!-- <h5 class="mb-1">{{blogContents[$route.params.id].title}}</h5> -->
        <small class="text-muted">{{blogList.date}}</small>
      </div>
      <p class="mb-1">{{blogList.title}}</p>
      <small class="text-muted">{{blogList.content}}</small>
      <router-view></router-view>
    </a>
  </div>
</template>



<script>
export default {
    name:'List',
    props:{
        blogContents:Array
    }
}
</script>

<style>

</style>