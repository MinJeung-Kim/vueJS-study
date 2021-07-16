<template>
  <!-- 팝업창  -->
    <div class="black-bg" v-if="openPopUp === true">
      <div class="white-bg">
        <img class="pop-img"  :src="products[productsClick].image"/>
        <h4>{{products[productsClick].title}}</h4>
        <p>{{products[productsClick].content}}</p>
        <!-- 사용자가 입력한 개월수 month변수에 저장 -->
        개월수 선택 : <input v-model.number="month"/> <input type="range" min="1" max="12">
        <p>{{month}}개월 선택함 : {{products[productsClick].price * month}}원</p>
        <Discount/>
        <button @click="closePopUp">닫기</button>
      </div>
    </div>
</template>

<script> 
export default {
    name:'Modal', 
    data(){
        return{
            // 최소 개월수 
            month:1,
        }
    },
    watch : {
        month(val){
            // 사용자가 문자를 입력하면 경고문 출력
            // isNaN() 안에 숫자를 입력하면 false, 글자를 입력하면 true
            if(isNaN(val) === true){ 
                alert('숫자만 입력 가능합니다.') 
                this.month = 1;
            }
        }
    },
    props:{
        products: Array,
        productsClick: Number,
        openPopUp: Boolean
    },
    methods:{
        closePopUp(){
        // 모달창 닫힘 상태
            this.$emit('closePopUp')
        }
    },
    beforeUpdate(){
        if(this.month === 2){
            alert("2개월은 등록되지 않습니다.")
            return this.month = 1
        }
    }

}
</script>

<style>

</style>