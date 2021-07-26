<template>
  <v-container fluid class="back">
    <v-row
    align="center" justify="center" class="mt-16">
         <v-col
            cols="3"
            align="center">
            <p></p>
         </v-col>
    </v-row>
    <v-row
    align="center" justify="center" class="mt-16">
         <v-col
            cols="3"
            align="center">
            <p v-bind=change>{{change}}</p>
         </v-col>
    </v-row>
    <v-row 
    align="center" justify="center" class="mt-5">
      
      <v-col
      cols="2"
      align="center">
        <v-card
          width="250"
          height="400"
          elevation="10"
          >
            <v-img
            src="../assets/background2.png"
            height="100%"
            >
            </v-img>
          </v-card>
             
           
      </v-col>
      <v-col
      cols="2"
      align="center">
        <v-card
          width="250"
          height="400"
            elevation="10"
          >
            <v-img
            src="../assets/background2.png"
            height="100%"
            >
            </v-img>
          </v-card>
             
           
      </v-col>
      <v-col
      cols="2"
      align="center">
        <v-card
           width="250"
          height="400"
           elevation="10"
          >
            <v-img
            src="../assets/background2.png"
            height="100%"
            >
            </v-img>
          </v-card>
             
           
      </v-col>
      <v-col
      cols="2"
      align="center">
        <v-card
           width="250"
          height="400"
           elevation="10"
          >
            <v-img
            src="../assets/background2.png"
            height="100%"
            >
            </v-img>
          </v-card>
             
           
      </v-col>
    </v-row>

     <v-row
    align="center" justify="center" class="mt-16">
         <v-col
            cols="3"
            align="center">
            <v-btn>확인완료</v-btn>
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
            "온라인 ,ai 면접에서는 ,키보드와 마우스, 웹캠과 마이크가 필요합니다. 아래 각 기기별, 주의사항을 확인해 주세요 ",
            
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
        this.$router.push('/check')  
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
        this.utterThis.pitch = 10;
        this.utterThis.rate = 10; //속도
        window.speechSynthesis.speak(this.utterThis);
      },
   
    tts(){
      for(var i=0; i< this.text.length; i++){   
        
          this.speech(this.text[i]);
          console.log(this.number)
      }
      
    },

  },
  created(){
      this.setVoiceList();
  },

    mounted(){


      this.tts();
     
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