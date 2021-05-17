<template>
  <div class = "mypage-wrap" v-if="user">
   
      <SideNav/>

      <Chat/>
      
    
      
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import SideNav from '../components/SideNav'
import Chat from '../components/Chat'


export default {
    components:{
        SideNav,
        Chat
    },
    computed:mapGetters(['user']),
    methods:{
        ...mapActions(['getProfile'])
    },
    created(){
        this.getProfile();
        console.log(this.$state.user)
    }
}
</script>

<style scoped>
.mypage-wrap{
    display: table;
}

</style>