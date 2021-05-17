<template>
  <div class= "side">
      <ul>
          <li>
              <div class="title">내 활동</div>
          </li>
          <ul>
              <li>
                  <a href="/profile/note">
                  알림
                  <span class="badge">0</span>
                  </a>
              </li>
              <li>
                  <a href="/profile/note">
                  메시지
                  <span class="badge">0</span>
                  </a>
              </li>
              <li>
                  <a href="/profile/note">
                  내 선수
                  <span class="badge">1</span>
                  </a>
              </li>
          </ul>
      </ul>

    <br>
      <ul>
          <li>
              <div class="title">구단정보</div>
          </li>
          <ul>
              <li>
                  <a href="/profile/note">
                  내 구인정보
                  <span class="badge">0</span>
                  </a>
              </li>
              
          </ul>
      </ul>
      <br>
       <ul>
          <li>
              <div class="title">회원정보</div>
          </li>
          <ul>
              <li>
                  <a href="/profile/note">
                  회원 정보수정
                  <span class="badge">0</span>
                  </a>
              </li>
              
          </ul>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.side{
    width:300px;
    border : 1px solid #e1e1e1;
    border-top: 3px solid #058f45 ;
    background-color: #fff;
    padding : 15px;
    display: table-cell;
    vertical-align: top;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li{
    margin-bottom: 30px;
    margin: 5px 0;
}

.title{
    font-weight: 700;
    font-size: 1.2em;
    margin-bottom: 15px;
}

.badge{
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    background-color: #777;
    border-radius: 10px;
}
a .badge {
    background-color: #058f45;
    padding: 3px 7px 1px 7px;
}

a{
    text-decoration: none;
    display: block;
    color: #6c6c6c;
}

</style>