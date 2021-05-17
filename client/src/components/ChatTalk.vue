<template>
  <div class="chat-talk">
						<div class="scroll-area">
							<ul>
		<li class=" you ">
			<span>
				안녕 내이름은 ibeabuch john chibuike야			</span>
			<small class="date">2021-03-13 07:44:56</small>
		</li>
				<li class=" me ">
			<span>
				안녕~			</span>
			<small class="date">2021-03-14 02:29:38</small>
		</li>
				<li class=" you ">
			<span>
				당신과 당신의 가족은 잘 지내십니까?			</span>
			<small class="date">2021-03-19 06:51:15</small>
		</li>
				<li class=" me ">
			<span>
				안녕			</span>
			<small class="date">2021-04-29 10:23:33</small>
		</li>
				<li class=" me ">
			<span>
				어떻게 지내니?			</span>
			<small class="date">2021-04-29 10:23:40</small>
		</li>
		</ul>
						</div>
						<form id="frm-chat" class="">
							<input type="hidden" name="chat_idx" value="24">
							<div class="input-group full">
								<textarea name="content" class="form-control" placeholder="메시지를 입력해주세요"></textarea>
							</div>
							<div class="chat-foot clearfix">
								<div class="left clearfix">
									<a href="javascript:toggleChatStar()" class="btn-star"><span class="fas fa-star"></span> 중요</a>
									<a href="javascript:toggleChatDeny()" class="btn-deny"><span class="fas fa-ban"></span> <span class="text">차단</span></a>
									<a class="player-name-text"></a>
								</div>
								<div class="right">
									<a href="javascript:sendChat()" class="btn btn-primary">전송</a>
								</div>
							</div>
						</form>
					</div>
</template>

<script>
export default {

}
</script>

<style scoped>
div.chat-talk {
    background-color: #fff;
    display: table-cell;
    vertical-align: top;
    
}

.scroll-area{
    padding-top: 30px;
    height: 600px;
    overflow-y: scroll;
  
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.me{
    
}

.you{
    text-align: left;
    padding-left: 40px;
    padding-right: 15px;
}

.chat-talk ul>li.you>span {
    background-color: #f5f6fa;
}

.chat-talk ul>li>span {
    display: inline-block;
    position: relative;
    font-size: 1em;
    padding: 12px 10px;
    border-radius: 10px;
    text-align: left;
    word-break: break-all;
}
.chat-talk ul>li small.date {
    display: block;
    font-size: 0.75em;
    margin-top: 5px;
    color: #aaa;
}

.chat-talk ul>li.me {
    text-align: right;
    padding-right: 40px;
    padding-left: 15px;
}

.chat-talk ul>li {
    position: relative;
    margin-bottom: 30px;
}

#frm-chat .chat-foot {
    border: 1px solid #ddd;
    border-top: 0;
}

#frm-chat .chat-foot>.left {
    float: left;
}

.fa, .fas {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
}

#frm-chat .chat-foot>.left a {
    display: block;
    float: left;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    color: #aaa;
    font-size: 0.85em;
}

a{
    text-decoration: none;
}

#frm-chat .chat-foot>.right {
    float: right;
}

#frm-chat .chat-foot .btn {
    padding: 0 25px;
    font-size: 1.2em;
    height: 40px;
    line-height: 40px;
    border-radius: 0;
}

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:focus {
    background-color: #058f45;
    border-color: #057a3d;
}

</style>