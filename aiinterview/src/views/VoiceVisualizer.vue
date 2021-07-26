<template>
  <div id="content">
  <input type="file" id="thefile" accept="audio/*" ref="thefile" />
  <canvas id="canvas" ref="canvas"></canvas>
  <audio id="audio" controls ref="audio"></audio>

 
  

  <a ref="download">download</a>


  <vue-record-video mode="press"  ref="test"  @result="onResult" @stream="onStream"/>

  <v-btn @click="stop">stop</v-btn>
  
</div>
</template>

<script>
export default {
    data(){
        return{
            mediaRecorder:{},
            recordedChunks:[]

        }
    },

    methods:{
        click(){
            
            var recognition = new window.webkitSpeechRecognition();
        
            console.log(recognition);

            recognition.onsound = true
            recognition.continuous = true;
            recognition.interimResults = true;


            recognition.start()
            recognition.onresult = (event) => {
               console.log(event)
               var audio = this.$refs.audio
               audio.src= URL.createObjectURL(event.results[0])
               audio.load();
               audio.play();
               var context = new AudioContext();
               var src = context.createMediaElementSource(audio);
               var analyser = context.createAnalyser();

               var canvas = this.$refs.canvas;
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
            }   
        
            
        },
        onResult(data){
            console.log('The blob data:', data);
            console.log('Downloadable audio', window.URL.createObjectURL(data));

            let aElm = this.$refs.download;
           
            aElm.href=URL.createObjectURL(data);
            aElm.download='video.webm';
            aElm.click();
            var audio = this.$refs.audio
            audio.src= URL.createObjectURL(data)
            audio.load();
            audio.play();
            
            
            var context = new AudioContext();
            var src = context.createMediaElementSource(audio);
            var analyser = context.createAnalyser();

            var canvas = this.$refs.canvas;
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
            
        },

        stop(){
            this.$refs.test.stop()
        },
        onStream(stream){
            console.log(stream)
        }



       
    },
    mounted(){

      //this.$refs.test.start()
      setTimeout(() => {
           this.stop()
      }, 10000);
       
    },


}
</script>

<style>
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