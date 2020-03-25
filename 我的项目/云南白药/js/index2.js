

// 第一轮播图(历史轮播图)
$(function(){

// 第一个轮播图的时间线轮播图
		// 设置一个变量控制点击次数
		 var  c = 0;
		 // 设置一个变量接收贯穿线的长度
		 var c4= $('div.Line>i').width();
		 // 设置一个变量接收每次走的距离
		 var  cd = $('div.HistoricalNode>ul>li').width();
		 // 设置一个变量控制点击频率
		 var pl = 0;
		 //设置一个变量接收小三角的X轴位置
		 var X = 80;
		 // 设置一个变量改变年份的移动距离
		 var w = 0;
		 // 设置变量接收历史轮播图内容轮播图一次的距离
		 var jl = $('ul.EventContent>li').width();
		 
	// 右边圆按钮 绑定点击事件
	$('div.HistoryLine>div.but-Right').click(Right)	
	// 左边圆按钮 绑定点击事件
	$('div.HistoryLine>div.but-Left').click(Left)
	
	//内容轮播图的左按钮
	$('div.but2>div.butLeft').click(Left)
	//内容轮播图的右按钮
	$('div.but2>div.butRight').click(Right)
	
	// 右边按钮打包
	function Right(){
		if(pl==0){
			pl=1
		
		c++;
		// 判断是否为最后一个年份
		if(c>=10){
			c=10
		}
		 
		 // 给贯穿线设置判定 停止增长
		 if(c<=3){
			 //贯穿线的长度加上每次要走的长度
			 c4+=cd;
			   //小三角的
			  X+=cd;
			 // 点击一次走一截距离 年份
			 $('div.HistoricalNode>ul').animate({left:'0px'},500,sty) 
		 }
		 
		 // 给贯穿线设置判定 继续增长
		 if(c>8){
			 //贯穿线的长度加上每次要走的长度
			 c4+=cd;
			  //小三角的位置加上每次要走的长度
			 X+=cd;
		 }
		 // 给贯穿线设置判定 当为最后一年时,直接走完全部
		 if(c>=10){
			 c4 = '1519.2';
		 }
		 // 给小三角设置最大值
		 if(X>=905){
			 X=905;
		 }
			//在赋值给贯穿线
				// 判定是否为最后一年
			if(c<10){
					$('div.Line>i').animate({width:c4+'px'},500)
					$('div.HistoricalEvent>.Triangle').animate({left:X+'px'},500)
			}else{
					$('div.Line>i').animate({width:c4+'px'},500)
					$('div.HistoricalEvent>.Triangle').animate({left:X+'px'},500)
			}
	
		 //年份 当c达到规定次数后开始走
		 if(c>3&&c<=7){
			// 点击一次走一截距离
		$('div.HistoricalNode>ul').animate({left:-cd*(c-3)+'px'},500,sty) 
		 }
		 
		 // 对最后一年的动画显示进行判定
		 if(c>=10){
			 $('div.HistoricalNode>ul').animate({left:-cd*5+'px'},500) 
			 // 判断贯穿线是否到达了最后一年的距离
			 if(c4>=1174){
					sty()
			 }
		 }
		 
		 
		 
		 // 年份 当c达到一定次数后不再行走
		 if(c>=8&&c<10){
		 	$('div.HistoricalNode>ul').animate({left:-cd*5+'px'},500,sty) 
		 	}
		}	
		
		// 让历史轮播图的内容轮播图动
		$('.EventContent').animate({left:-(jl*c)+'px'},500) 
	}
	
	// 左边按钮打包
	function Left(){
		if(pl==0){
			pl=1;
		c--;
		// 给贯穿线设置判定 继续减短
		 if(c>=8){
			 c4-=cd;
			 X-=cd;
			 $('div.Line>i').animate({width:c4+'px'},500,sty)
			 $('div.HistoricalEvent>.Triangle').animate({left:X+'px'},500)
			 $('div.HistoricalNode>ul').animate({left:-cd*5+'px'},500,sty) 
		 }
		 
		 if(c<=3){
			 if(c==3){
				c4+=cd;
				 X+=cd;
			 }
			 c4-=cd;
			 X-=cd;
			 
			 // 判断是否为第一个年份
			 if(c<=0){
			 	c=0
			 	c4=349;
				X = 80
			 } 
			 $('div.Line>i').animate({width:c4+'px'},500,sty)
			 $('div.HistoricalEvent>.Triangle').animate({left:X+'px'},500)
			 $('div.HistoricalNode>ul').animate({left:'0px'},500,sty)
			  
		 }		 
		 if(c>3&&c<8){
			// 点击一次退一截距离
			$('div.HistoricalNode>ul').animate({left:-cd*(c-3)+'px'},500,sty) 
		 }
		 
		 	
		 //在赋值给贯穿线
		 	// 判定是否为第一年
		 if(c<0){
		 	$('div.Line>i').animate({width:'349px'},500,sty)
			$('div.HistoricalEvent>.Triangle').animate({left:'80px'},500)
		 }
		 
		 
			 // 判断贯穿线是否到达了最后一年的距离
			 if(c4>=1174){
				 c4 = 1009;
				 $('div.Line>i').stop(false,true)
				$('div.Line>i').animate({width:'1009px'},500,sty)
			 }
			 
			}
			// 让历史轮播图的内容轮播图动
			$('.EventContent').animate({left:-(jl*c)+'px'},500) 
	}
	
	// 给单独规定的元素(年份 小圆 三层圆)添加样式类名打包
	function sty(){
		// 清除所有控制样式的类名
		$('div.HistoricalNode>ul>li>p').removeClass('Big');
		$('div.HistoricalNode>ul>li>span').removeClass('ThreeLayers');
		$('div.HistoricalNode>ul>li>div').removeClass('Round1');
		//给单独规定的元素(年份 小圆 三层圆)添加样式类名
		$('div.HistoricalNode>ul>li').eq(c).children('p').addClass('Big');
		$('div.HistoricalNode>ul>li').eq(c).children('span').addClass('ThreeLayers');
		$('div.HistoricalNode>ul>li').eq(c).children('div').addClass('Round1');
		pl=0;
	}
	

})


// 第二轮播图
$(function(){
	//旋转边框
	var time = 0;
	setInterval(function(){
		time+=36
		$('.QuickEntryImg>li>div').css({'-webkit-transform':'rotate('+time+'deg)',transition:'all .1s ease'})
	},100)

	// 设置一个变量控制点击的频率
	var pl1 = 0;
	// 设置变量接收每次移动的距离
	var yd;
	// 给每个图片设置左定位
	// 设置变量控制移动的次数
	var cs1 = 0;
	yd = $('.QuickEntryImg>li').eq(0).width();
	for(var i=0;i<4;i++){
		$('.QuickEntryImg>li').eq(i).css({left:(yd*i)+'px'})
	}
	
	// 设置定时器让轮播图自动轮播
	var time3 = setInterval(Quick,2000)
	
	// 鼠标移入事件
	$('.QuickEntryLbt').hover(function(){
		clearInterval(time3)
	},function(){
		time3 = setInterval(Quick,2000)
	})
	
	// 给按钮设置点击事件
	$('.QuickEntryLbt>div.but3').click(function(){
		clearInterval(time3)
		if(pl1 == 0){
			pl1 = 1;
		
		if($(this).index()==0){
			// 代表Left
			cs1--
			if(cs1<0){
				cs1=3
			}
			$('.QuickEntryImg>li').eq(cs1).css({left:-yd+'px'})
			for(var i=0;i<4;i++){
				$('.QuickEntryImg>li').eq(i).animate({left:$('.QuickEntryImg>li').eq(i).position().left+yd+'px'},1000,function(){pl1=0})
			}
			$('.QuickEntryLbt>ul.SmallDot>li').removeClass('style2');
			$('.QuickEntryLbt>ul.SmallDot>li').eq(cs1).addClass('style2');
		}else{
			// 代表Right
				Quick()
			
		}
		}
	})

function Quick(){
		cs1++
		if(cs1>3){
			cs1=0
		}
		for(var i=0;i<4;i++){
			$('.QuickEntryImg>li').eq(i).animate({left:$('.QuickEntryImg>li').eq(i).position().left-yd+'px'},1000,function(){
				$('.QuickEntryImg>li').eq(cs1-1).css({left:yd*3+'px'})
				pl1 = 0;
			})
		}
		$('.QuickEntryLbt>ul.SmallDot>li').removeClass('style2');
		$('.QuickEntryLbt>ul.SmallDot>li').eq(cs1).addClass('style2');
	}
	
	
})


// 第三轮播图
	// 设置变量获取所有的年份
	var cs = document.getElementsByClassName('HeadCarousel2')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');		
$(function(){
	// 自动获取第三轮播图的事件时间
	// 定义变量接收头部时间
	var times;
	// 获取轮播图头部时间,遍历出来
	for(var i =0;i<23;i++){
	times =	$('.HeadCarousel2>ul>li').eq(i).html();
	//放入事件时间
		$('.Below').eq(i).children('div[class=timeContent]').children('div[class=time2]').html(times+'年');
	// 反方向
		$('.Below').eq(i).children('div[class=timeContent2]').children('div[class=time2]').html(times+'年');
	}
	
	// 第三轮播图的头部轮播图
		
		// 定义一个变量接收所有年份的个数
		var g = cs.length;
		// 定义一个变量控制点击的次数
		var frequency = 0;
		// 定义一个变量接收每次要走的距离
		var Distance = $('.HeadCarousel2>ul>li').width();
		// 定义一个变量控制点击的频率
		var pl2 = 0;
		// 定义一个变量接收内容每次移动的距离
		var Distance2 = $('.Below').width();		
		
	// 获取第三轮播图的头部轮播图的右按钮 设置点击事件
		$('.HeadCarouselButRight').click(function(){
			//控制点击频率
			if(pl2==0){
				pl2=1;
				
			frequency++
			// 给次数设置最多的次数
			if(frequency >= g-1){
				frequency = g-1;
			}
			
			// 给轮播图的高度设置成跟随内容变化
			$('.WheelMap').css({height:$('.Below').eq(frequency).height()+'px'})
			
			// 给运动的年份设置样式
			$('.HeadCarousel2>ul>li').removeClass('styels');
			$('.HeadCarousel2>ul>li').eq(frequency).addClass('styels');
			// 点击一次整个头部轮播图走一个年份的距离(一次的距离乘以次数)
			$('.HeadCarousel2>ul').animate({left:-(Distance*frequency)+'px'},500,function(){pl2=0})
			$('.WheelMap2').animate({left:-(Distance2*frequency)+'px'},500)
			}
		})
		
		
	// 获取第三轮播图的头部轮播图的左按钮 设置点击事件
		$('.HeadCarouselButLeft').click(function(){
			//控制点击频率
			if(pl2==0){
				pl2=1;
			frequency--
			// 给次数设置最多的次数
			if(frequency <= 0){
				frequency = 0;
			}
			
			// 给轮播图的高度设置成跟随内容变化
			$('.WheelMap').css({height:$('.Below').eq(frequency).height()+'px'})
			// 给运动的年份设置样式
			$('.HeadCarousel2>ul>li').removeClass('styels');
			$('.HeadCarousel2>ul>li').eq(frequency).addClass('styels');
			// 点击一次整个头部轮播图走一个年份的距离(一次的距离乘以次数)
			$('.HeadCarousel2>ul').animate({left:-(Distance*frequency)+'px'},500,function(){pl2=0})
			$('.WheelMap2').animate({left:-(Distance2*frequency)+'px'},500)
			}
		})
		
		// 设置变量接收被点击的年份的下标
		var index2;
		// 给年份设置点击事件
		$('.HeadCarousel2>ul>li').click(function(){
			if(pl2==0){
				pl2=1;
			index2 = $(this).index();
			// 给轮播图的高度设置成跟随内容变化
			$('.WheelMap').css({height:$('.Below').eq(index2).height()+'px'})
			// 给运动的年份设置样式
			$('.HeadCarousel2>ul>li').removeClass('styels');
			$('.HeadCarousel2>ul>li').eq(index2).addClass('styels');
			// 点击一次整个头部轮播图走一个年份的距离(一次的距离乘以次数)
			$('.HeadCarousel2>ul').animate({left:-(Distance*index2)+'px'},500,function(){pl2=0})
			$('.WheelMap2').animate({left:-(Distance2*index2)+'px'},500)
			
			frequency  = index2
			}
		})
	
})







		
		
			
			