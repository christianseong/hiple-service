<template>
  <div>
      <h2>Login</h2>
      <div class="row">
          <div class="card mx-auto">
             <div class="card-header text-white bg-primary">
                 <h4>로그인</h4>
             </div>
            <div class="card-body">
                <form @submit.prevent="loginUser">
                    <div class="form-group">
                        <label for="username">아이디</label>
                        <input id="username" type="text" placeholder="아이디" name="username" v-model="username" class="form-control">
                    </div>

                     <div class="form-group">
                        <label for="password">비밀번호</label>
                        <input id="password" type="password" placeholder="비밀번호" name="password" v-model="password" class="form-control">
                    </div>

                    <input type="submit" class="btn btn-primary mr-3" value="로그인"/>
                    
                    <router-link to="/register" class="card-link">계정 만들기</router-link>
                </form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
    data(){
        return{
            username : "",
            password : ""
        }
    },

    methods:{
        ...mapActions(['login']),
        loginUser(){
            let user = {
                username : this.username,
                password : this.password
            };
            this.login(user)
            .then(res=>{
                if(res.data.success){
                    this.$router.push('/profile')
                }
            }).catch(err =>{
                console.log(err)
            })
        }
    },
}
</script>

<style>
.card{
    width: 60%;
    border-radius: 0;

}

.btn{
    border-radius: 0;
}

.form-control{
     border-radius: 0;
}
</style>