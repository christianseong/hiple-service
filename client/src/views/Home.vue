<template>
  <div class="home">
   <div class="jumbotron jumbotron-fluid">
     <div class="container">
       <h1 class="display-4">
         AllDayFootball 입니다
       </h1>
       <p class="lead">
         Simple Authentication application built with MEVN stack using Express , Nodejs , Vue js
       </p>
     </div>
   </div>

   <div class="row">
     <div class="col-md-3 col-sm-6 col-xs-12">
       <div class="card bg-dark text-white">
         <div class="card-body">
           <h5 class="card-title">
             몽고디비
           </h5>
           <p class="card-text">
             몽고디비는 크로스 사이트 플랫폼이며 nosql 로 분류 되어있다
           </p>
           <a href="http://mongodb.com" target="_blank" class="btn bg-white">
             더 알아보기
           </a>
         </div>
       </div>
     </div>

     <div class="col-md-3 col-sm-6 col-xs-12">
       <div class="card bg-primary text-white">
         <div class="card-body">
           <h5 class="card-title">
             몽고디비
           </h5>
           <p class="card-text">
             몽고디비는 크로스 사이트 플랫폼이며 nosql 로 분류 되어있다
           </p>
           <a href="http://mongodb.com" target="_blank" class="btn bg-white">
             더 알아보기
           </a>
         </div>
       </div>
     </div>

     <div class="col-md-3 col-sm-6 col-xs-12">
       <div class="card bg-danger text-white">
         <div class="card-body">
           <h5 class="card-title">
             몽고디비
           </h5>
           <p class="card-text">
             몽고디비는 크로스 사이트 플랫폼이며 nosql 로 분류 되어있다
           </p>
           <a href="http://mongodb.com" target="_blank" class="btn bg-white">
             더 알아보기
           </a>
         </div>
       </div>
     </div>

     <div class="col-md-3 col-sm-6 col-xs-12">
       <div class="card bg-warning text-white">
         <div class="card-body">
           <h5 class="card-title">
             몽고디비
           </h5>
           <p class="card-text">
             몽고디비는 크로스 사이트 플랫폼이며 nosql 로 분류 되어있다
           </p>
           <a href="http://mongodb.com" target="_blank" class="btn bg-white">
             더 알아보기
           </a>
         </div>
       </div>
     </div>

     
   </div>
  <br>    

  <div class="row ">
    <Player/>
    <Player/>

  </div>
  
  
  


  </div>
</template>

<script>
import Player from '../components/Player'



export default {
  name: 'Home',
  components: {
    Player
    
  }
}
</script>
