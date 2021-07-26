<template>
  <v-container>

    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          사용자등록
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          기본면접
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          성향분석
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-row style="text-align: center">
            <v-col cols="12">
              <h2>온라인 AI 면접에서는 키보드와 마우스, 웹캠과 마이크가 필요합니다.</h2>
              <h2>아래 각 기기별 주의사항을 확인해 주세요.</h2>
            </v-col>
            <v-col cols="12">
              <v-card class="px-4 py-2 mx-auto" style="background-color: rgba(0,0,0,.6); width: 30%" rounded="xl">
                <h4 style="color: white;">각 기기별 버튼을 누르시고 설정 상태를 확인해 주세요.</h4>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center" style="text-align: center">
            <v-col cols="2">
              <v-card width="230" height="230" style="background-color: white" class="pa-2 d-flex flex-column justify-center align-center cardBtn" @click="keyboardDialog = !keyboardDialog">
                <h4>키보드</h4>
                <v-card width="160px" height="60px" elevation="0" class="mt-3 mb-3">
                  <v-img
                  src="https://inface.ai/images/game/keyboard.png"
                  width="100%"
                  height="100%"
                  ></v-img>
                </v-card>
                <h5>스페이스 바, 방향 키, 숫자 키에<br>이상이 없는지 확인해 주세요.</h5>
                <v-checkbox
                  :input-value="keyLeft && keyRight"
                  value
                  disabled
                ></v-checkbox>
              </v-card>
            </v-col>
            <v-col cols="2">
              <v-card width="230" height="230" style="background-color: white" class="pa-2 d-flex flex-column justify-center align-center cardBtn" @click="mouseDialog = !mouseDialog">
                <h4>마우스</h4>
                <v-card width="160px" height="60px" elevation="0" class="mt-3 mb-3">
                  <v-img
                  src="https://inface.ai/images/game/mouse.png"
                  width="100%"
                  height="100%"
                  ></v-img>
                </v-card>
                <h5>노트북 터치패드 사용은 지양해 주시고,<br> 마우스 감도를 적절히 조정해 주세요.</h5>
                <v-checkbox
                  :input-value="mouseOn"
                  value
                  disabled
                ></v-checkbox>
              </v-card>
            </v-col>
            <v-col cols="2">
              <v-card width="230" height="230" style="background-color: white" class="pa-2 d-flex flex-column justify-center align-center cardBtn" @click="webcamDialog= !webcamDialog">
                <h4>웹캠</h4>
                <v-card width="160px" height="60px" elevation="0" class="mt-3 mb-3">
                  <v-img
                  src="https://inface.ai/images/game/webcam.png"
                  width="100%"
                  height="100%"
                  ></v-img>
                </v-card>
                <h5>웹캠이 정상적으로 설치, 연결되었는지,<br>확인해 주세요.</h5>
                 <v-checkbox
                  :input-value="webcamOn"
                  value
                  disabled
                ></v-checkbox>
              </v-card>
            </v-col>
            <v-col cols="2">
              <v-card width="230" height="230" style="background-color: white" class="pa-2 d-flex flex-column justify-center align-center cardBtn" @click="micDialog= !micDialog">
                <h4>마이크</h4>
                <v-card width="160px" height="60px" elevation="0" class="mt-3 mb-3">
                  <v-img
                  src="https://inface.ai/images/game/mike.png"
                  width="100%"
                  height="100%"
                  ></v-img>
                </v-card>
                <h5>마이크 상태를 사전에 확인해 주세요.<br>이어폰 마이크 사용가능</h5>
                <v-checkbox
                  :input-value="micOn"
                  value
                  disabled
                ></v-checkbox>
              </v-card>
            </v-col>
          </v-row>

          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="e1 = 1"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <!-- 장치점검 키보드 -->
    <v-dialog
      v-model="keyboardDialog"
      width="500"
    >
      
      <v-card>
        <v-card color="#169c81" elevation="0" rounded="0">
          <h4 class="pa-3" style="color: white">장치점검 - 키보드</h4>
        </v-card>

        <v-card class="text-center my-5" elevation="0">
          <h5>키보드의 왼쪽 방향기(←)와 오른쪽 방향키(→)를 누르세요.</h5>
          <h5>이상이 없으면 '좋아요'가 활성화됩니다.</h5>
        </v-card>

        <v-card class="d-flex flex-column align-center pa-4 mx-4" elevation="0" outlined>
          <v-card width="50" height="50" elevation="0">
            <v-img
            src="https://inface.ai/images/game/keyboard_up_on.png"
            ></v-img>
          </v-card>
          <v-card class="d-flex" elevation="0">
            <v-card width="50" height="50" class="mr-2" elevation="0">
              <v-img
              v-if="!keyLeft"
              src="https://inface.ai/images/game/keyboard_left_off.png"
              ></v-img>
              <v-img
              v-if="keyLeft"
              src="https://inface.ai/images/game/keyboard_left_on.png"
              ></v-img>
            </v-card>
            <v-card width="50" height="50" elevation="0">
              <v-img
              src="https://inface.ai/images/game/keyboard_down_on.png"
              ></v-img>
            </v-card>
            <v-card width="50" height="50" class="ml-2" elevation="0">
              <v-img
              v-if="!keyRight"
              src="https://inface.ai/images/game/keyboard_right_off.png"
              ></v-img>
              <v-img
              v-if="keyRight"
              src="https://inface.ai/images/game/keyboard_right_on.png"
              ></v-img>
            </v-card>
          </v-card>
          
          <!-- 버튼 -->
          <v-card class="d-flex mt-5" elevation="0">
            <v-card rounded="xl" class="d-flex align-center mr-2" color="rgb(210, 210, 210)" elevation="0"  v-if="!(keyLeft && keyRight)">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="rgb(130, 130, 130)" elevation="0">
                <v-icon dark>mdi-thumb-up</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                좋아요!
              </h4>
            </v-card>

            <v-card rounded="xl" class="d-flex align-center mr-2" color="#169c81" elevation="0" v-if="keyLeft && keyRight">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="#166d5c" elevation="0">
                <v-icon dark>mdi-thumb-up</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                좋아요!
              </h4>
            </v-card>

            <v-card rounded="xl" class="d-flex align-center ml-2" color="grey" elevation="0">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="rgb(41, 41, 41)" elevation="0">
                <v-icon dark>mdi-wrench</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                환경설정
              </h4>
            </v-card>
          </v-card>

        </v-card>

        <v-card width="100%" class="d-flex justify-center">
          <v-card width="120" height="40" class="d-flex justify-center align-center mt-5 mb-7 okBtn" elevation="0" rounded="0" @click="keyboardDialog = !keyboardDialog">
            <h4 style="font-weight: lighter; color: white">확인</h4>
          </v-card>
        </v-card>
      </v-card>
    </v-dialog>
    
    <!-- 장치점검 마우스 -->
    <v-dialog
      v-model="mouseDialog"
      width="500"
    >
      
      <v-card>
        <v-card color="#169c81" elevation="0" rounded="0">
          <h4 class="pa-3" style="color: white">장치점검 - 마우스</h4>
        </v-card>

        <v-card class="text-center my-5" elevation="0">
          <h5>아래 마우스 이미지를 클릭해 주세요.</h5>
          <h5>이상이 없으면 '좋아요'가 활성화됩니다.</h5>
        </v-card>

        <v-card class="d-flex flex-column align-center pa-4 mx-4" elevation="0" outlined>
          <v-card width="100" height="100" elevation="0" @click="mouseOn = !mouseOn">
            <v-img
            src="https://inface.ai/images/game/mouse.png"
            contain
            ></v-img>
          </v-card>
          
          <!-- 버튼 -->
          <v-card class="d-flex mt-5" elevation="0">
            <v-card rounded="xl" class="d-flex align-center mr-2" color="rgb(210, 210, 210)" elevation="0"  v-if="!mouseOn">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="rgb(130, 130, 130)" elevation="0">
                <v-icon dark>mdi-thumb-up</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                좋아요!
              </h4>
            </v-card>

            <v-card rounded="xl" class="d-flex align-center mr-2" color="#169c81" elevation="0" v-if="mouseOn">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="#166d5c" elevation="0">
                <v-icon dark>mdi-thumb-up</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                좋아요!
              </h4>
            </v-card>

            <v-card rounded="xl" class="d-flex align-center ml-2" color="grey" elevation="0">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="rgb(41, 41, 41)" elevation="0">
                <v-icon dark>mdi-wrench</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                환경설정
              </h4>
            </v-card>
          </v-card>

        </v-card>

        <v-card width="100%" class="d-flex justify-center">
          <v-card width="120" height="40" class="d-flex justify-center align-center mt-5 mb-7 okBtn" elevation="0" rounded="0" @click="mouseDialog = !mouseDialog">
            <h4 style="font-weight: lighter; color: white">확인</h4>
          </v-card>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- 장치점검 웹캠 -->
    <v-dialog
      v-model="webcamDialog"
      width="1000"
    >
      
      <v-card>
        <v-card color="#169c81" elevation="0" rounded="0">
          <h4 class="pa-3" style="color: white">장치점검 - 웹캠</h4>
        </v-card>

        <v-card class="text-center my-5" elevation="0">
          <h5>웹캠으로 자신의 얼굴 전체가 나오도록 하세요.</h5>
          <h5>이상이 없으면 '좋아요'가 활성화됩니다.</h5>
        </v-card>

        <v-card class="d-flex flex-column align-center pa-4 mx-4" elevation="0" outlined>
          <v-card width="1000" height="1000" elevation="0" @click="webcamOn = !webcamOn">
           <video autoplay ref="player"></video>
           <div class="container-faceDetection" ref="container">
                </div>
                <canvas ref="canvas" width="320px" height="100px"></canvas>
                <div class="result-container">
                    <div id="emotion" ref="emotion">Emotion</div>
                    <div id="gender" ref="gender">Gender</div>
                    <div id="age" ref="age">Age</div>
                </div>

                <v-btn @click="click">생성</v-btn>
               
                <a ref="download">download</a>
                
                 <v-btn   @click="stopRecord">Stop</v-btn>
                 <button id="snap" @click="capture()">Snap Photo</button>

                 <ul>
                    <li v-for="(c, idx) in captures" :key="idx">
                    <img :src="c" height="50" />
                    </li>
                </ul>
           
           
          </v-card>
          
          <!-- 버튼 -->
          <v-card class="d-flex mt-5" elevation="0">
            <v-card rounded="xl" class="d-flex align-center mr-2" color="rgb(210, 210, 210)" elevation="0"  v-if="!mouseOn">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="rgb(130, 130, 130)" elevation="0">
                <v-icon dark>mdi-thumb-up</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                좋아요!
              </h4>
            </v-card>

            <v-card rounded="xl" class="d-flex align-center mr-2" color="#169c81" elevation="0" v-if="mouseOn">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="#166d5c" elevation="0">
                <v-icon dark>mdi-thumb-up</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                좋아요!
              </h4>
            </v-card>

            <v-card rounded="xl" class="d-flex align-center ml-2" color="grey" elevation="0">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="rgb(41, 41, 41)" elevation="0">
                <v-icon dark>mdi-wrench</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                환경설정
              </h4>
            </v-card>
          </v-card>

        </v-card>

        <v-card width="100%" class="d-flex justify-center">
          <v-card width="120" height="40" class="d-flex justify-center align-center mt-5 mb-7 okBtn" elevation="0" rounded="0" @click="mouseDialog = !mouseDialog">
            <h4 style="font-weight: lighter; color: white">확인</h4>
          </v-card>
        </v-card>
      </v-card>
    </v-dialog>

    <!-- 장치점검 마이크 -->
    <v-dialog
      v-model="micDialog"
      width="1000"
      height="700"
    >
      
      <v-card>
        <v-card color="#169c81" elevation="0" rounded="0">
          <h4 class="pa-3" style="color: white">장치점검 -마이크</h4>
        </v-card>

        <v-card class="text-center my-5" elevation="0">
          <h5>마이크 버튼을 누르고 말을 해보세요.</h5>
          <h5>이상이 없으면 '좋아요'가 활성화됩니다.</h5>
        </v-card>

        <v-card class="d-flex flex-column align-center pa-4 mx-4" elevation="0" outlined>
          <v-card width="100" height="100" elevation="0" @click="mouseOn = !mouseOn">
                

            <input type="file" id="thefile" accept="audio/*" ref="thefile" />
            <canvas id="canvas" ref="canvasAudio"></canvas>
            <audio id="audio" controls ref="audio"></audio>
            <v-btn @click="visual">visual</v-btn>
            

            <v-form>
                    <div class="right">
                        <v-btn id="start_button" @click="started()" v-bind:style="{display : display}" v-if="!imageURL">
                            <v-img id="start_img" src="@/assets/mic.gif" alt="Start" >
                            </v-img>

                            
                        </v-btn>
                        <v-btn @click="stop()" v-if="imageURL">
                        <v-img id="change_img" src="@/assets/micanimate.gif" >
                        </v-img>
                        </v-btn>
                    </div>
                    <v-textarea
                    solo
                    name="input-7-4"
                    :value=final_transcript
                    ></v-textarea>

                </v-form>
          </v-card>
          
          <!-- 버튼 -->
          <v-card class="d-flex mt-5" elevation="0">
            <v-card rounded="xl" class="d-flex align-center mr-2" color="rgb(210, 210, 210)" elevation="0"  v-if="!mouseOn">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="rgb(130, 130, 130)" elevation="0">
                <v-icon dark>mdi-thumb-up</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                좋아요!
              </h4>
            </v-card>

            <v-card rounded="xl" class="d-flex align-center mr-2" color="#169c81" elevation="0" v-if="mouseOn">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="#166d5c" elevation="0">
                <v-icon dark>mdi-thumb-up</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                좋아요!
              </h4>
            </v-card>

            <v-card rounded="xl" class="d-flex align-center ml-2" color="grey" elevation="0">
              <v-card rounded="xl" class="pa-2 d-flex align-center justify-center" color="rgb(41, 41, 41)" elevation="0">
                <v-icon dark>mdi-wrench</v-icon>
              </v-card>
              <h4 style="width: 100px; text-align: center; color: white; font-weight: lighter">
                환경설정
              </h4>
            </v-card>
          </v-card>

        </v-card>

        <v-card width="100%" class="d-flex justify-center">
          <v-card width="120" height="40" class="d-flex justify-center align-center mt-5 mb-7 okBtn" elevation="0" rounded="0" @click="mouseDialog = !mouseDialog">
            <h4 style="font-weight: lighter; color: white">확인</h4>
          </v-card>
        </v-card>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>

import * as faceapi from 'face-api.js'
export default {
  data () {
    return {
      e1: 1,
      keyboardDialog: false,
      mouseDialog: false,
      webcamDialog: false,
      micDialog: false,

      mouseOn: false,
      keyLeft: false,
      keyRight: false,
      webcamOn : false,
      micOn : false,

      

      shouldStop : false,
      mediaRecorder : null,
      captures : [],

      audioStream : {},


     recognition : {},
     recognizing : false ,
     imageURL : false,
     interim_transcript :'',
     final_transcript : '',
     display : 'block',

     micVisualBoolean : false

      
    }
  },
  methods:{
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


    async start(){
        
        //console.log(this.$refs.player)
      await navigator.mediaDevices.getUserMedia({video:true, audio: true}).
      then((stream) =>{
         this.audioStream = stream
         this.$refs.player.srcObject = stream;
         this.$refs.player.style.display = 'block'
         this.$refs.player.muted= true
         this.$refs.player.setAttribute('autoplay', '');
         this.$refs.player.setAttribute('muted', '');
         this.$refs.player.setAttribute('playsinline', '');

         //const mimeType = 'video/webm';
         //this.handleRecord({stream, mimeType})

      }).catch(error=>{
        console.log(error);
      });

    
     
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
    async videoRecord(){
        alert('비디오 녹화')
        const mimeType = 'video/webm';
        
        const constraints = {
            audio: {
                "echoCancellation": true
            },
            
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        this.$refs.player.srcObject = stream;
        this.handleRecord({stream, mimeType})
    },

    handleRecord({stream, mimeType}){
       
        let recordedChunks = []
        
        this.mediaRecorder = new MediaRecorder(stream);

        

        this.mediaRecorder.ondataavailable = (e)=> {
            if (e.data.size > 0) {
                
                recordedChunks.push(e.data);
                //console.log(recordedChunks)
                
            }


           
        };

        this.mediaRecorder.onstop = ()=> {
            //alert('멈췄다')
            
            const blob = new Blob(recordedChunks, {
                type: mimeType
            });

            //console.log(blob)
            
            recordedChunks = []
            //const filename = window.prompt('Enter file name');

            let aElm = this.$refs.download;
           
            var agent = navigator.userAgent.toLowerCase();

            if (agent.indexOf("chrome") != -1) {
                aElm.href=URL.createObjectURL(blob);
                aElm.download='video.webm';
                aElm.click();
                this.$refs.player.srcObject = null;
            }
            else if (agent.indexOf("safari") != -1) {
                 aElm.href=URL.createObjectURL(blob);
                aElm.download='video.mp4';
                aElm.click();
                this.$refs.player.srcObject = null;
            }

            
            //this.downURL= URL.createObjectURL(blob);
            //console.log(this.downURL)
            //this.download =  `${filename || 'recording'}.mp4`;
            
            
        };

        this.mediaRecorder.start(200);
    },

    stopRecord(){
        alert('멈춤')
        this.mediaRecorder.stop();
    },
     capture() {
      this.canvas = this.$refs.canvas;
      let context = this.canvas
        .getContext("2d")
        .drawImage(this.$refs.player, 0, 0, 100, 100);
      this.captures.push(context.toDataURL("image/png"));
    },

    started(){
            alert("시작")
           this.recognition.start();
            
            //showInfo('info_upgrade');
        },
        stop(){
            this.recognition.stop();
            this.imageURL = false
            alert("끝냄")
        },


        visual(){
            var thefile = this.$refs.thefile
            var audio = this.$refs.audio
            thefile.onchange = function() {
                var files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = this.$refs.canvasAudio
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    audio.play();
    renderFrame();
  };
        }

  },
  mounted(){
        document.addEventListener("keydown", (e) => {

          if (e.keyCode == 37) {
              this.keyLeft=true
          }
          else if (e.keyCode == 39) {
              this.keyRight=true
          }

    });



          if ('webkitSpeechRecognition' in window) {
                this.display= 'inline-block'
                this.recognition = new window.webkitSpeechRecognition();
                this.recognition.continuous= true
                this.recognition.interimResults = true
                this.recognition.lang= 'ko-KR';


                this.recognition.onstart = () =>{
                    this.recognizing = true
                    console.log(this.recognition)
                    this.imageURL = true

                }
                //weconsole.log(this.recognition)
                this.recognition.onresult = (event) => {
                   
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                        this.final_transcript += event.results[i][0].transcript;
                    } else {
                        this.interim_transcript += event.results[i][0].transcript;
                    }
                }
                    console.log("this is result")
                    console.log(this.final_transcript)

                };


                this.recognition.onend= () =>{
                    console.log("this is end")
                }
            }
      
        

      
    },

    updated(){
        this.initializeMedia() 
    },

    created(){
       
    }
}
</script>

<style scoped>
  .cardBtn {
    cursor: pointer;
  }
  .okBtn {
    background-color: #008b8b;
  }
  .okBtn:hover {
    background-color: #026464;
  }
  #thefile {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
}

#canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

audio {
  position: fixed;
  left: 10px;
  bottom: 10px;
  width: calc(100% - 20px);
}
</style>