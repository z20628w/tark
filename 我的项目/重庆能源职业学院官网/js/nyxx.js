var lbt = document.getElementsByClassName('lbt1')[0];
var lbt2 = document.getElementsByClassName('lbt2')[0];
var lbt3 = document.getElementsByClassName('lbt3')[0];
var time = 0;
  setInterval(function(){
	  if(time==0){
     lbt.style="transform: translateX(-1519.2px);"
	 lbt2.style="transform: translateX(-1519.2px);"
	 lbt3.style="transform: translateX(-1519.2px);"	
		   time=1;
	  }else if(time==1){
		  lbt.style="transform: translateX(-3038.4px);"
		  lbt2.style="transform: translateX(-3038.4px);"
		  lbt3.style="transform: translateX(-3038.4px);"
		  time=2;
	  }else if(time==2){
		  lbt.style="transform: translateX(0px);"
		  lbt2.style="transform: translateX(0px);"
		  lbt3.style="transform: translateX(0px);"
		  time=0;
	  }
  },3000)