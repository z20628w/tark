	// jQuery入口文件
$(function(){
	// 设置一个变量控制滑动到那一个版块
	var s=0;
	// 设置一个变量与小圆点交接,充当下标
	var u =0;
	// 设置一个变量让动画在一定时间内只执行一次
	var r = 0;
	// 设置一个变量控制版权的显示隐藏
	var a = 0;
	//绑定鼠标滚轮事件 
	$(document).mousewheel(function(event){
		// 判断滚轮是上滑还是下滑
		if(event.deltaY>0){
			/* 上滑 */
			
			//判断只有r等于0的时候才能执行以下代码以达到连续多次滑动滚轮动画不会重复执行
			if(r==0){
			// 滑动一次滚轮r就不等于0了,以后的滚轮滑动就不在执行以下代码
			r=1;
			// 滑动一次滚轮就让版块上下变化
			s++;
			// 滑动一次滚轮就让下标跟着变化,以达到小圆点跟着版块走
			u--
			// 设置版块的上限
			if(s>=0){s=0}
			// 设置小圆点的下限
			if(u<=0){u=0}
			// 延时定时器
			setTimeout(function(){
			// 当版块不为最后版块时就隐藏版权显示
			if(u<6){
			$('.box1>p').css({display:'none'})
			}
			},500)
			//设置版块每次滑动多少距离 一个板块的高度*滑动的次数
			$('div[class=box1]').animate({top:($('header[class=head1]').height())*s+'px'},500,
			// 当动画运行完后让r等于0,这样就达到了动画运行完之前不会运行其他动画
			function(){
				r=0
			})
			// 给对应的小圆点设置样式
			$('ul[class=nav]>li').eq(u).css({background:'blue'}).siblings().css({background:'#ccc'})
			}
		}else{
			/* 下滑 */
			
			//判断只有r等于0的时候才能执行以下代码以达到连续多次滑动滚轮动画不会重复执行
			if(r==0){
				// 滑动一次滚轮r就不等于0了,以后的滚轮滑动就不在执行以下代码
				r=1;
				// 滑动一次滚轮就让版块上下变化
				s--;
				// 滑动一次滚轮就让下标跟着变化,以达到小圆点跟着版块走
				u++
			// 设置版块的下限	
			if(s<=-6){s=-6}
			// 设置小圆点的上限
			if(u>=6){
				u=6
				// 延时定时器
				setTimeout(function(){
				// 当版块为最后版块时就显示版权
				$('.box1>p').css({display:'block'})
				},500)
			}
			//设置版块每次滑动多少距离 一个板块的高度*滑动的次数
			$('div[class=box1]').animate({top:($('header[class=head1]').height())*s+'px'},500,
			// 当动画运行完后让r等于0,这样就达到了动画运行完之前不会运行其他动画
			function(){
				r=0
			})
			// 给对应的小圆点设置样式
			$('ul[class=nav]>li').eq(u).css({background:'blue'}).siblings().css({background:'#ccc'})
			}
		}
	})
	// 给小圆点设置点击事件
	$('ul[class=nav]>li').click(function(){
		// 将点击的小圆点的下标穿给充当小圆点下标的变量,以达到对接上
		 u = $(this).index()
		 // 给被点击的小圆点设置样式
		 $('ul[class=nav]>li').eq(u).css({background:'blue'}).siblings().css({background:'#ccc'})
		 // 让版块移动到与小圆点相应的版块
		 $('div[class=box1]').animate({top:($('header[class=head1]').height())*-u+'px'},500)
		 // 将点击的小圆点的下标穿给控制滑动到那一个版块的变量,以达到对接上
		 s = -u
		 // 设置延时定时器
		 setTimeout(function(){
			 // 为最后一个板块时才显示版权
			 if(u>=6){
			 	$('.box1>p').css({display:'block'})
				// 否则就隐藏
			 }else{
			 	$('.box1>p').css({display:'none'})
			 }
		 },500)
	})
	
	// 获取所有按钮特效并遍历出来
	for(var i = 0;i<7;i++){
		// 给每个按钮特效设置宽高,他们的宽高为他们父级按钮的宽高,并写上X轴缩放特效
		$('div[class=but]').eq(i).css({width:$('button').eq(i).width()+'px',height:$('button').eq(i).height()+'px',transform:' scaleX(0)'})
	}
	// 循环定时器
	setInterval(function(){
		// 当a等于0时,将a变为1,让按钮特效进行放大
		if(a==0){
			a=1;
			$('div[class=but]').css({transition:'all 1s ease',transform:' scaleX(1)'})
		}else{
			// 当a不等于0时,将a变为0,让按钮特效进行缩小
			a=0;
			$('div[class=but]').css({transition:'all 0s ease',transform:' scaleX(0)'})
		}
	},1000)
})
/* 
$(document).ready(function(){
	$('.box1').css({top:'0px'})
	console.log($('.box1').offset().top)
	$(document).scrollTop(0)
}) 
*/
