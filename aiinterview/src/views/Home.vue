<template>
  <v-container>
    <v-row justify="center" align="center" style="height: calc(100vh - 64px)">
      <v-card elevation="10" height="65vh" width="1200px" class="d-flex align-center">
        <v-col cols="4">
          <h1 class="logo">HIPLE</h1>
          <h3 style="text-align: center">AI interview</h3>
          <v-form
            ref="form"
            class="px-10 mt-16"
            v-model="valid"
            lazy-validation
            >
            <h5>아이디</h5>
            <v-text-field
              v-model="name"
              label="ID"
              solo
              clearable
            ></v-text-field>
            <h5>비밀번호</h5>
            <v-text-field
              v-model="email"
              label="Password"
              solo
              clearable
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="#1ABC9C"
              class="mr-4"
              width="100%"
              height="50px"
              @click="validate"
            >
              <span style="color: white;">Login</span>
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="8" style="height: 100%">
          <v-card
          width="100%"
          height="100%"
          >
            <v-img
            src="../assets/background2.png"
            height="100%"
            >
            </v-img>
          </v-card>
        </v-col>
        
      </v-card>
    </v-row>

  
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600"
    >
      
      <v-card
      elevation="10" 
      height="60vh" 
      width="600">
        <v-card-title class="headline card-title justify-center">
          정보 활용 동의
        </v-card-title>
 
        <v-card-title class="headline">
          영상녹화 및 음성녹음에 관한 동의  
        </v-card-title>
    <div class="div-text">
        <v-card-text class="card-text">
          1.온라인 AI 검사에서는 응시자의 평가를 위해 뷰응시 데이터를 저장하며, 
          응시자는 이에 동의하지 않을 권리가 있습니다.
        </v-card-text>
        <v-card-text class="card-text">
           2.응시 데이터는 온라인 AI 검사에 필수적인 수집 항목으로 해당 정보를 
          응시자로부터 제공받지 못하면 온라인 AI 검사를 진행할 수 없습니다.
        </v-card-text>
        <v-card-text class="card-text">
           3.온라인 AI 검사 과정에서 수집된 개인 정보는 결과 분석을 위한 목적 이외
          에는 사용되지 않습니다.
        </v-card-text>
        <v-card-text class="card-text">
            4.온라인 AI 검사 과정에서 수집된 응시 데이터는 기업과 서비스 제공 업체
          간 계약된 보관 기관이 지나면 자동으로 삭제됩니다.
        </v-card-text>

   </div>
   

        

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="disagree"
          >
            비동의
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="agree"
          >
            동의
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  </v-container>
</template>


<script>
  export default {
    data(){
      return{
        valid: true,
        name: '',
        email: '',
        dialog : false,
        show : false,
       
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
        this.dialog =true

       
        //this.$router.push('/about')
      },

      agree(){
        this.dialog = true
        this.$router.push('/stepper')
      },
      disagree(){
        this.dialog= false
        alert('동의 해주세요!')
      }

  
    },
  }
</script>

<style scoped>
h5 {
  margin-bottom: 7px;
}
.logo {
  text-align: center;
  font-weight: bold;
  font-size: 4rem;
}
.card-title{
  background-color: #1ABC9C;
  color: white;
  font-size: 30px;
 
}

.card-text{
  font-size: 20px;
  background-color: gray;
  border-width: 10px;
  color : white
  
}

.div-text{
  background-color: gray;
  margin : 10px 25px;
  
  
}

.red--text{
  color : red
}
</style>
