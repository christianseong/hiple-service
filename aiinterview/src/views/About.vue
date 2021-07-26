<template>
  <v-container fluid class="back">
    <v-row
    align="center" justify="center" class="mr-8 mt-8">
      
      <v-col
      align="end">

             <p>환경설정</p>
      </v-col>
    </v-row>
    <v-row
    align="center" justify="center">
      
      <v-col
      align="center">

             <p></p>
      </v-col>
    </v-row>
    <v-row 
    align="center" justify="center" class="mt-16">
      
      <v-col
      align="center">

             <p v-bind=change>{{change}}</p>
           
            <v-btn @click="tts" v-if="!voiceFound">온라인 면접시작하기</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
    name: 'About',
    data(){
      return{
          voices:[],
          text :[
            //",온라인, ai 면접을 진행하기 위해, 응시환경 체크를 시작하겠습니다",
            "응시중 발생하는 , 예상치 못한 문제에, 대처하기 위해, 응시전, 반드시 화면 우측 상단에 위치한, 문제해결가이드를, 확인해주세요.",
            //"온라인 ,ai 면접에서는 ,키보드와 마우스, 웹캠과 마이크가 필요합니다. 아래 각 기기별, 주의사항을 확인해 주세요 "
          ],
          change: "",
          voiceFound: false,
          utterThis : {},
          show : true
    
      }
    },
    components: {
    
    },

  

    methods:{
      setVoiceList() {
      this.voices = window.speechSynthesis.getVoices();
      console.log(this.voices)

      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = this.setVoiceList;
      }

      if(this.voices){
        this.tts()
      }
    },

    speech(text){
      if(!window.speechSynthesis) {
        alert("음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요");
        return;
      }

      var lang= 'ko-KR'
     
      this.utterThis= new SpeechSynthesisUtterance(text);
      this.utterThis.onstart = (event) =>{
        console.log('onstart', event);
        //console.log(this.$store.state.number)
        console.log(window)
        this.change = event.currentTarget.text
      }
    
     this.utterThis.onend = (event) =>{
        console.log('onend', event);
        //console.log(event.currentTarget.text) 
        if(event.currentTarget.text==="응시중 발생하는 , 예상치 못한 문제에, 대처하기 위해, 응시전, 반드시 화면 우측 상단에 위치한, 문제해결가이드를, 확인해주세요.") {
          this.$router.push('/about2')
        }  
      }

      this.utterThis.onerror = function(event) {
        console.log('error', event);
      }


      this.voiceFound=false
      for(var i = 0; i < this.voices.length ; i++) {
        if(this.voices[i].lang.indexOf(lang) >= 0 || this.voices[i].lang.indexOf(lang.replace('-', '_')) >= 0) {
        this.utterThis.voice = this.voices[i];
        
        this.voiceFound = true;
        }
      }
        if(!this.voiceFound) {
          alert('voice not found');
        return;
        }
        this.utterThis.lang = lang;
        this.utterThis.pitch = 0.01;
        this.utterThis.rate = 0.01; //속도
        window.speechSynthesis.speak(this.utterThis);
      },
   
    tts(){
      for(var i=0; i< this.text.length; i++){   
        
          this.speech(this.text[i]);


          console.log(this.number)
          
      }
      
    },

  },

    mounted(){
      this.setVoiceList();
     
    },
}
  



</script>

<style scoped>
.back{
  background: url("../assets/aibackground.png");
  height: 100vh
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>