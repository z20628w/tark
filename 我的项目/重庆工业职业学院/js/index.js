var ban = document.getElementById('ban');
var banl = document.getElementById('banl');
var banr = document.getElementById('banr');
console.log(ban);
var i=1;
	setInterval(function(){
	if(0<i&&i<5){
	 ban.style = 'background:url(img/banner'+i+'.jpg) no-repeat 0 0/100% 100%;'
       i++;
	}else if(i>=5&&i<=10){
		ban.style = 'background:url(img/banner'+i+'.png) no-repeat 0 0/100% 100%;'
		  i++;
	}else{
		i=1;
	}
},3000)

