<template>
  <div>
      <h2>Register</h2>
      <div class="row">
          <div class="card mx-auto">
             <div class="card-header text-white bg-primary">
                 <h4>회원가입</h4>
             </div>
            <div class="card-body">
                <form @submit.prevent="registerUser">
                    <div class="form-group">
                        <label for="username">아이디</label>
                        <input id="username" type="text" placeholder="아이디" name="username" v-model="username" class="form-control">
                    </div>
                     <div class="form-group">
                        <label for="name">이름</label>
                        <input id="name" type="text" placeholder="이름" name="name" v-model="name" class="form-control">
                    </div>
                     <div class="form-group">
                        <label for="email">이메일</label>
                        <input id="email" type="text" placeholder="이메일" name="email" v-model="email" class="form-control">
                    </div>

                     <div class="form-group">
                        <label for="password">비밀번호</label>
                        <input id="password" type="password" placeholder="비밀번호" name="password" v-model="password" class="form-control">
                    </div>

                     <div class="form-group">
                        <label for="confirm_password">비밀번호 확인</label>
                        <input id="confirm_password" type="password" placeholder="비밀번호 확인" name="confirm_password" v-model="confirm_password" class="form-control">
                    </div>

                    <button class="btn btn-primary mr-3">등록</button>
                    
                    <router-link to="/login" class="card-link">계정 이미 있습니까?</router-link>
                </form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    data(){
        return{
            username : "",
            password : "",
            confirm_password : "",
            name : "",
            email : ""
        }
    },

    methods:{
        ...mapActions(['register']),
        registerUser(){
            let user ={
                username : this.username,
                password : this.password,
                confirm_password : this.confirm_password,
                name : this.name,
                email : this.email
            };

            

            this.register(user).then(res =>{
                if(res.data.success){
                    this.$router.push('/login')
                }
            });
        }
    }
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