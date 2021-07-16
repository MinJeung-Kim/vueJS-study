<template> 
    <div>
      <img class="room-img" :src="products.image"/>
      <h4 @click="openModel">{{products.title}}</h4>
      <p>{{products.price}}원</p>
      <!-- <button @click="declaration">허위매물신고</button><span>신고수 : {{declarationCnt}}</span> -->
    </div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        products: Object, 
    },
    methods:{
        openModel(){
            this.$emit('openModal', this.products.id)
        }
    }
}
</script>

<style>

</style>