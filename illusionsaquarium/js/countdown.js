$(function(){
	cnt = 3;
	$('#countdown').text(cnt);
	setInterval(function(){
		cnt--;
		if(cnt <= 0){
			window.location.href = 'index.html';
		}
		$('#countdown').text(cnt);
	},1000);
});