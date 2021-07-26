<template>
  <v-container fluid class="back">
    <v-row
    align="center" justify="center" class="mt-16">
         <v-col
            
            align="center">
            <p>
              {{message}}

            </p>
            <video id="player" autoplay ref="player"></video>
                <div class="container-faceDetection" ref="container">
                </div>
                <canvas id="canvas" width="320px" height="100px"></canvas>
                <div class="result-container">
                    <div id="emotion" ref="emotion">Emotion</div>
                    <div id="gender" ref="gender">Gender</div>
                    <div id="age" ref="age">Age</div>
                </div>

                <v-btn @click="click">생성</v-btn>

          
                
         </v-col>
    </v-row>
   

 
  </v-container>
</template>

<script>
import * as faceapi from 'face-api.js'



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
          show : true,
          message : "",
          langs:[['Afrikaans',       ['af-ZA']],
        ['Bahasa Indonesia',['id-ID']],
        ['Bahasa Melayu',   ['ms-MY']],
        ['Català',          ['ca-ES']],
        ['Čeština',         ['cs-CZ']],
        ['Deutsch',         ['de-DE']],
        ['English',         ['en-AU', 'Australia'],
            ['en-CA', 'Canada'],
            ['en-IN', 'India'],
            ['en-NZ', 'New Zealand'],
            ['en-ZA', 'South Africa'],
            ['en-GB', 'United Kingdom'],
            ['en-US', 'United States']],
        ['Español',         ['es-AR', 'Argentina'],
            ['es-BO', 'Bolivia'],
            ['es-CL', 'Chile'],
            ['es-CO', 'Colombia'],
            ['es-CR', 'Costa Rica'],
            ['es-EC', 'Ecuador'],
            ['es-SV', 'El Salvador'],
            ['es-ES', 'España'],
            ['es-US', 'Estados Unidos'],
            ['es-GT', 'Guatemala'],
            ['es-HN', 'Honduras'],
            ['es-MX', 'México'],
            ['es-NI', 'Nicaragua'],
            ['es-PA', 'Panamá'],
            ['es-PY', 'Paraguay'],
            ['es-PE', 'Perú'],
            ['es-PR', 'Puerto Rico'],
            ['es-DO', 'República Dominicana'],
            ['es-UY', 'Uruguay'],
            ['es-VE', 'Venezuela']],
        ['Euskara',         ['eu-ES']],
        ['Français',        ['fr-FR']],
        ['Galego',          ['gl-ES']],
        ['Hrvatski',        ['hr_HR']],
        ['IsiZulu',         ['zu-ZA']],
        ['Íslenska',        ['is-IS']],
        ['Italiano',        ['it-IT', 'Italia'],
            ['it-CH', 'Svizzera']],
        ['Magyar',          ['hu-HU']],
        ['Nederlands',      ['nl-NL']],
        ['Norsk bokmål',    ['nb-NO']],
        ['Polski',          ['pl-PL']],
        ['Português',       ['pt-BR', 'Brasil'],
            ['pt-PT', 'Portugal']],
        ['Română',          ['ro-RO']],
        ['Slovenčina',      ['sk-SK']],
        ['Suomi',           ['fi-FI']],
        ['Svenska',         ['sv-SE']],
        ['Türkçe',          ['tr-TR']],
        ['български',       ['bg-BG']],
        ['Pусский',         ['ru-RU']],
        ['Српски',          ['sr-RS']],
        ['한국어',            ['ko-KR']],
        ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
            ['cmn-Hans-HK', '普通话 (香港)'],
            ['cmn-Hant-TW', '中文 (台灣)'],
            ['yue-Hant-HK', '粵語 (香港)']],
        ['日本語',           ['ja-JP']],
        ['Lingua latīna',   ['la']]]

    
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
    
     this.utterThis.onend = function(event){
        console.log('onend', event);
        //console.log(event.currentTarget.text)    
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

    start(){
      navigator.mediaDevices.getUserMedia({video:true, audio: false}).
      then(stream =>{
         this.$refs.player.srcObject = stream;
         this.$refs.player.style.display = 'block'
         this.$refs.player.setAttribute('autoplay', '');
         this.$refs.player.setAttribute('muted', '');
         this.$refs.player.setAttribute('playsinline', '');

      }).catch(error=>{
        console.log(error);
      });

    
     
    },

    initializeMedia(){
      if (!('mediaDevices' in navigator)) {
        navigator.mediaDevices = {};
    }

    if (!('getUserMedia' in navigator.mediaDevices)) {
        navigator.mediaDevices.getUserMedia = (constraints) => {
            const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented!'));
            }

            return new Promise((resolve, reject) => getUserMedia.call(navigator, constraints, resolve, reject));
        };
    }

    
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/src/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/src/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/src/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/src/models"),
        faceapi.nets.ageGenderNet.loadFromUri("/src/models")
    ]).then(this.start());
    },

    click(){
      
      const isScreenSmall = window.matchMedia("(max-width: 700px)");
      let predictedAges = [];

      const screenResize = (isScreenSmall) => {
  
      if (isScreenSmall.matches) {
        // If media query matches
        this.$refs.player.style.width = "320px";
        
      } else {
        this.$refs.player.style.width = "500px";
        
      }
    };

      screenResize(isScreenSmall); // Call listener function at run time
      isScreenSmall.addListener(screenResize);



      const interpolateAgePredictions = (age) => {
          predictedAges = [age].concat(predictedAges).slice(0, 30);
          const avgPredictedAge =
              predictedAges.reduce((total, a) => total + a) / predictedAges.length;
          return avgPredictedAge;
        };

      
       
        const canvasForFaceDetection = faceapi.createCanvasFromMedia(this.$refs.player);

        //console.log(canvasForFaceDetection)

        let containerForFaceDetection = this.$refs.container
  
        containerForFaceDetection.append(canvasForFaceDetection);

          console.log(containerForFaceDetection)

        const displaySize = { width: 500, height: 500};
        faceapi.matchDimensions(canvasForFaceDetection, displaySize);

        setInterval(async () => {
          const detections = await faceapi
            .detectSingleFace(this.$refs.player, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender();

          if (detections) {
            console.log(detections);
            if(detections.gender==="male"){
              this.message = "당신은 남성이군요!"
            }else{
              this.message = "당신은 여성이군요!"
            }
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvasForFaceDetection.getContext("2d").clearRect(0, 0, 500, 500);

            faceapi.draw.drawDetections(canvasForFaceDetection, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvasForFaceDetection, resizedDetections);
            if (resizedDetections && Object.keys(resizedDetections).length > 0) {
            const age = resizedDetections.age;
            const interpolatedAge = interpolateAgePredictions(age);
             const gender = resizedDetections.gender;
            const expressions = resizedDetections.expressions;
            const maxValue = Math.max(...Object.values(expressions));
            const emotion = Object.keys(expressions).filter(
            item => expressions[item] === maxValue
          );
            
            this.$refs.age.innerText = `Age - ${interpolatedAge}`;
            this.$refs.gender.innerText = `Gender - ${gender}`;
            this.$refs.emotion.innerText = `Emotion - ${emotion[0]}`;
      }
    }

  }, 10);


    },


  },
  created(){
      //this.setVoiceList();
  },

    mounted(){
      this.initializeMedia()
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

.container-faceDetection {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.result-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.result-container > div {
    font-size: 1.3rem;
    padding: 0.5rem;
    margin: 5px 0;
    color: white;
    text-transform: capitalize;
}
#age {
    background: #1e94be;
}
#emotion {
    background: #8a1025;
}
#gender {
    background: #62d8a5;
}



* {
    font-family: Verdana, Arial, sans-serif;
}
a:link {
    color:#000;
    text-decoration: none;
}
a:visited {
    color:#000;
}
a:hover {
    color:#33F;
}
.button {
    background: -webkit-linear-gradient(top,#008dfd 0,#0370ea 100%);
    border: 1px solid #076bd2;
    border-radius: 3px;
    color: #fff;
    display: none;
    font-size: 13px;
    font-weight: bold;
    line-height: 1.3;
    padding: 8px 25px;
    text-align: center;
    text-shadow: 1px 1px 1px #076bd2;
    letter-spacing: normal;
}
.center {
    padding: 10px;
    text-align: center;
}
.final {
    color: black;
    padding-right: 3px;
}
.interim {
    color: gray;
}
.info {
    font-size: 14px;
    text-align: center;
    color: #777;
    display: none;
}
.right {
    float: right;
}

.div_speech_to_text {
    border-style: solid;
}

#headline {
    font-size: 40px;
    font-weight: 300;
}
#info {
    font-size: 20px;
    text-align: center;
    color: #777;
    visibility: hidden;
}
#results {
    font-size: 14px;
    font-weight: bold;
    border: 1px solid #ddd;
    padding: 15px;
    text-align: left;
    min-height: 50px;
}
#start_button {
    border: 0;
    background-color:transparent;
    padding: 0;
}


</style>