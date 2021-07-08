<template>
    <div>
        <h1>{{userInfo.first_name}} {{userInfo.last_name}} Well Com !!</h1>
    </div>
</template>

<script> 
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(['userInfo'])
    }
}
</script>
