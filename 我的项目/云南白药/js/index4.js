$(function(){
	
	//设置变量控制移动的次数
	var cs = 0;
	// 设置变量接收每次移动的位置
	var wz = $('.lbt>div.lbtCont>ul>li').width()
	// 设置图片初始位置
	for(var i=0;i<2;i++){
		$('.lbt>div.lbtCont>ul>li').eq(i).css({left:wz*i+'px'})
	}
	// 设置变量控制点击频率
	var pl = 0;
	

	
	// 设置按钮点击事件
	$('.fangtan>div.lbt>div.but').click(function(){
			if(pl==0){
				pl=1
			
		if($(this).index()==0){
			// 代表左按钮
			// 让图片每次动一次
			$('.lbt>div.lbtCont>ul>li').eq(cs-1).css({left:-wz+'px'}).animate({left:'0px'},1000,function(){
			pl=0
		})
			$('.lbt>div.lbtCont>ul>li').eq(cs).animate({left:wz+'px'},1000,function(){
				pl=0
			})
			cs--
			if(cs<0){
			cs = 1
			}
			
		}else{
			// 代表右按钮
			cs++
			if(cs>1){
				cs = 0
			}
			// 让图片每次动一次
			$('.lbt>div.lbtCont>ul>li').eq(cs-1).animate({left:-wz+'px'},1000,function(){
				pl=0
			})
			$('.lbt>div.lbtCont>ul>li').eq(cs).css({left:wz+'px'}).animate({left:'0px'},1000,function(){
				pl=0
			})
		}
		}
	})
	
	
})