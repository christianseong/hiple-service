<template>
  <v-container fluid class="back">
    <v-row
    align="center" justify="center" class="mt-16">
         <v-col
            
            align="center">
             <p>
              {{message}}

            </p>

               <v-form>
                    <div class="right">
                        <v-btn id="start_button" @click="started()" ref="start" v-bind:style="{display : display}" v-if="!imageURL">
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


                
         </v-col>
    </v-row>
   

 
  </v-container>
</template>

<script>



export default {
    name: 'About',
    data(){
      return{
          message : "Hello",
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
        ['Lingua latīna',   ['la']]],

        final_transcript : '',
        recognizing : false ,
        ignore_onend : '',
        start_timestamp : {},
        recognition : {},
        display : 'block',
        two_line : /\n\n/g,
        one_line : /\n/g,
        imageURL : false,
        interim_transcript :''


    
      }
    },
    components: {
    
    },

  

    methods:{
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

        upgrade(){
            
        },

        showInfo(){
           
        },

       
        

    },

    mounted(){
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
            }else{
                this.upgrade()
            }
    
    }
}
  



</script>

<style scoped>
.back{
  background: url("../assets/aibackground.png");
  height: 100vh
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