<template> 
    <div class="discounts">
        <h4>지금 결제하면 {{percent}}% 할인</h4>
    </div>
</template>

<script>
export default {
    name: 'Discount',
    data() {
        return{
            percent : 30,
        }
    },
    mounted(){ 
        let interval = setInterval(()=>{
            if(this.percent <= 0){ 
                clearInterval(interval)
            }else {
                this.percent--
            } 
        },1000)  
    },
}
</script>

<style> 
.discounts{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>