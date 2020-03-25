var banli = document.getElementById('banli');
var tp = [1,2,3,1,2,3];

for(var i=0;i<tp.length;i++){
		var img = document.createElement('img');
			img.src = 'img/banner'+tp[i]+'.jpg';
			banli.appendChild(img);
	}
	var x = 1;
	banli.style='width:'+img.offsetWidth*tp.length+'px';
	console.log(banli.style.width)
    setInterval(function(){
		if(x>=tp.length){
			x=0;
			banli.style.left = '-'+img.offsetWidth*x+'px';
		}	
		
		
		if(x<=tp.length){
			banli.style.left = '-'+img.offsetWidth*x+'px';
			console.log(banli.offsetWidth)
			x++;
		}
	},2000)