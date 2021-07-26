<template>
  <div>
      <audio ref="player" controls />
      <av-media :media="media" />
  </div>
</template>

<script>

export default {
  data(){
    return{
      media: null
    }
  },

  methods:{/*
    soundNotAllowed(error){
      this.$refs.h.innerHTML = "You must allow your microphone.";
        console.log(error);
    
    },
    soundAllowed(stream) {
        
        window.persistAudioStream = stream;
        this.$refs.h.innerHTML = "Thanks";
        this.$refs.h.setAttribute('style', 'opacity: 0;');
        var audioContent = new AudioContext();
        var audioStream = audioContent.createMediaStreamSource( stream );
        var analyser = audioContent.createAnalyser();
        audioStream.connect(analyser);
        //var visualizer =this.$refs.visualizer
        
    }
    */


  },

  mounted(){
     //navigator.getUserMedia({audio:true}, this.soundAllowed, this.soundNotAllowed);
     const constraints = { audio: true, video: false }
      navigator.mediaDevices.getUserMedia(constraints).
        then(media => {
          this.media = media
          this.$refs.player.srcObject = media
        })
  }


}
</script>

<style scoped>
html, body{
width: 100%;
height: 100%;
padding: 0;
margin: 0;
background-color:#222;
font-size: 0;
}

svg{
display: block;
width: 100%;
height: 100%;
padding: 0;
margin: 0;
position:absolute;

}

h1{
width: 100%;
font-family: sans-serif;
position:absolute;
text-align:center;
color:white;
font-size: 18px;
top: 40%;
opacity: 1;
transition: opacity 1s ease-in-out;
-moz-transition: opacity 1s ease-in-out;
-webkit-transition: opacity 1s ease-in-out;
}

h1 a{
  color: #48b1f4;
  text-decoration:none;
}

path{
stroke-linecap: square;
stroke: white;
stroke-width: 0.5px;
}

</style>