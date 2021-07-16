<template>

  <div id="app">

    <transition name="fade">
      <Modal 
        @closePopUp="openPopUp = false" 
        :products="products" 
        :productsClick="productsClick" 
        :openPopUp="openPopUp"
      />
    </transition>

    <div class="menu">
      <a v-for="menu in menus" :key="menu">{{menu}}</a> 
    </div> 

    <Discount  />

    <button @click="priceSort">가격순정렬</button>
    <button @click="priceSort2">가격역순정렬</button>
    <button @click="wordSort">가나다순 정렬</button>
    <button @click="sortBack">되돌리기</button>
    
    <Card 
      @openModal="openPopUp = true; productsClick = $event" 
      :products="products[index]"  
      v-for="(room,index) in products" 
      :key="index"
    /> 

  </div>
</template>

<script> 
import data from './assets/data.js'
import Discount from './Discount.vue'
import Modal from './Modal.vue'
import Card from './Card.vue' 
export default {
  name: 'App',
  components:{
    Discount,
    Modal,
    Card,
  },
  data() {
    return{ 
      originalData: [...data],
      productsClick: 0, 
      openPopUp : false,
      declarationCnt : 0,
      menus : ['Home', 'Shop', 'About'],
      products : data
    } 
  },
  methods:{
    declaration(){
      this.declarationCnt +=1
    },
    sortBack(){
      this.products = [...this.originalData]
    },
    priceSort(){
      this.products.sort(function(a, b){
        return a.price - b.price
      })
    },
    priceSort2(){
      this.products.sort(function(a, b){
        return ( b.price < a.price ) ? -1 : ( b.price == a.price ) ? 0 : 1; 
      })
    },
    wordSort(){
      this.products.sort(function(a,b) { 
        return (a.title<b.title)?-1:(a.title==b.title)?0:1
      })
    },
  },  
}
</script>

<style>

/* 시작 스타일 */
.fade-enter-from{
  opacity: 0;
  }

.fade-enter-active{
  transition: all 1s;
  }

/* 끝 스타일 */
.fade-enter-to{
  opacity: 1;
  } 

/* .start{
  opacity: 0;
  transition: all 1s;
}
.end{
  opacity: 1;
} */


body{
  margin: 0;
}

div{
  box-sizing: border-box;

}

.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding:20px;
}

.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img{
  width: 100%;
  margin-top: 40px;
}

.pop-img{
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}

.menu{
  background: darkslateblue;
  padding: 15px; 
}

.menu a{
  color: white;
  padding: 10px;
}
</style>
