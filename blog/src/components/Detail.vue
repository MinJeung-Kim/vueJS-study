<template>
  <div class="list-group"> 
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <!-- <h5 class="mb-1">{{blogContents[$route.params.id].title}}</h5> -->
      <small class="text-muted">{{blogContents[$route.params.id].date}}</small>
    </div>
    <p class="mb-1">{{blogContents[$route.params.id].title}}</p>
    <small class="text-muted">{{blogContents[$route.params.id].content}}</small>
    <router-view></router-view>
  </a>
</div>
</template>

<script>
export default {
    name:'Detail',
    props:{
        blogContents : Array,
    }
}
</script>

<style>

</style>