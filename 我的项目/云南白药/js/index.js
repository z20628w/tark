// 各个鼠标移入事件
$(function(){
			// 给返回顶部设置判定
			// 鼠标滚轮事件
		$(document).mousewheel(function(event){
			// 循环定时器
				setInterval(function(){
					// 判断滚动条是否距离顶部有一定的距离
					if($(document).scrollTop()<=300){
						// 没有就淡出滚动条
					$('div[class=Fixed]>div').eq(2).fadeOut(500)
				}else{
					// 否则淡入滚动条
					$('div[class=Fixed]>div').eq(2).fadeIn(500)
				}
				},1)
		})
		
		// 设置变量存储定时器
		var time;
		// 给返回顶部按钮设置点击事件
		$('div[class=Fixed]>div').eq(2).click(function(){
			time = setInterval(function(){
				if($(document).scrollTop()>0){
				document.documentElement.scrollTop-=20;
				}else{
					clearInterval(time)
				}
			},1)
		})
		
	
		// 导航条设置鼠标移入移出事件
		// 先把第一个导航条按钮的葫芦隐藏
		$('nav>.Navigation>ul>li').eq(0).children('i').css('opacity','0')
		// 绑定鼠标移入移出事件
		$('nav>.Navigation>ul>li').hover(function(){
			// 将所有的字体颜色 花瓣和葫芦还原
			$('nav>.Navigation>ul>li>a').removeClass('gren');
			$('nav>.Navigation>ul>li>i').removeClass('Gourd').css('opacity','.5');
			$('nav>.Navigation>ul>li>span').removeClass('Flowers');
			// 给移入的按钮的葫芦 字体颜色和花瓣设置样式
			$(this).children('i').addClass('Gourd');
			$(this).children('i').css('opacity','0');
			$(this).children('a').addClass('gren');
			$(this).children('span').addClass('Flowers');
		},function(){
			// 把所有的样式还原
			$(this).children('i').removeClass('Gourd');
			$(this).children('i').css('opacity','.5');
			$(this).children('a').removeClass('gren');
			$(this).children('span').removeClass('Flowers');
			// 给第一个按钮设置样式
			$('nav>.Navigation>ul>li').eq(0).children('i').addClass('Gourd').css('opacity','0');
			$('nav>.Navigation>ul>li').eq(0).children('a').addClass('gren');
			$('nav>.Navigation>ul>li').eq(0).children('span').addClass('Flowers');

		})
	
		// 给搜索框设置鼠标事件
		$('div[class=Search]').hover(function(){
			$(this).children('div').css({height:'50px',background:'rgba(0,0,0,.5)'})
		},function(){
			$(this).children('div').css({height:'00px',background:'rgba(0,0,0,0)'})
		})

		// 给字体转换设置鼠标移入移出事件
		$('div[class=Fonts]').hover(function(){
		$(this).children('div').css({height:'60px'})
		},function(){
		$(this).children('div').css({height:'0px'})
		})
		
		// 设置一个全局变量接收被点击的按钮的下标
		var index;
		// 给文字类型绑定点击事件
		$('.Fonts>div>span').click(function(){
			index = $(this).index();
			// 给对应下标的文字变换颜色
			$('nav>.Navigation>div>.Fonts>span').eq(index).addClass('Jane').siblings('span').removeClass('Jane');
			if(index==0){
				$('body').css('font-family','微软雅黑')
			}else{
				$('body').css('font-family','繁体')
			}
		})
			
			//设置一个变量控制点击的次数
			var dj = 0;
		// 给导航按钮设置点击事件
		$('nav>.Navigation>div>.guide').click(function(){
			// 当dj为0时打开右边导航栏
			if(dj==0){
				dj=1;
				// 把透明黑色盒子显示出来
			$(this).children('div[class=guideContent]').css('display','block')
				// 把右侧导航栏打开
			$(this).children('div[class=guideWrap]').css('right','-15px')
			}else{
			//当dj不为0时关闭右边导航栏
				dj=0;
				// 把透明黑色盒子隐藏出来
				$(this).children('div[class=guideContent]').css('display','none');
				// 把右侧导航栏关闭
				$(this).children('div[class=guideWrap]').css('right','-433px');
			}
		})
		// 解决导航按钮的事件冒泡
		$('.guide>div.guideWrap').click(function(event){
			event.stopPropagation();
		})

		// 给导航栏的关闭按钮设置点击事件
		$('div.guideWraptop>span').click(function(){
			// 把透明黑色盒子隐藏出来
			$('nav>.Navigation>div>.guide>div.guideContent').css('display','none');
			// 把右侧导航栏关闭
			$('nav>.Navigation>div>.guide>div.guideWrap').css('right','-433px');
			// 让dj变量变为0
			dj=0;
		})


		// 给新闻导航按钮设置鼠标移入事件
		$('.newRight>li').hover(function(){
			// 先把所有向上还原
			$('.newRight>li').css('color','#666')
			$('.newRight>li>i').removeClass('LeavesL')
			$('.newRight>li>b').removeClass('LeavesR')
			$('.newRight>li>div[class=NewsContent]').css('display','none')
			// 给移入按钮设置单独的样式
			$(this).css('color','#57c282')
			$(this).children('i').addClass('LeavesL');
			$(this).children('b').addClass('LeavesR');
			$(this).children('div[class=NewsContent]').css('display','block')
		})

		
		// 获取一张图片的宽度
		 var width = $('ul.lbt3>li').eq(0).width();
		// 给公司轮播图小圆点设置点击事件
		$('ul[class=lbt3Round]>li').click(function(){
			$('ul[class=lbt3Round]>li').css('background','white')
			$('ul[class=lbt3]').css('left',-($(this).index()*width)+'px')
			$(this).css('background','red')
		})
		
		
	// 给视屏播放按钮设置点击事件
	$('.play2>img').click(function(){
		$('.play2').fadeOut(500)
	})
		
		

})

//最大轮播图设置自走与点击事件
$(function(){

	// 获取一张图片的宽度
	var width2 = $('banner>ul>li').eq(0).width();
	
	// 设置一个变量控制走动的次数
	var num = 0;
	
	// 设置一个变量解决定时器时间差
	var time3 = 0;
	var time4 = 3000;
	
	// 设置图片初始化位置
	for(var i=0;i<$('banner>ul>li').length;i++){
		$('banner>ul>li').eq(i).css({left:width2*i+'px'})
	}
	
	// 设置变量控制点击的频率
	var p = 0;
	
	// 轮播图自走
	var time2 = setInterval(diyi,5000)
	
	// 设置鼠标移入事件
	$('banner').hover(function(){
		clearInterval(time2)
	},function(){
		time2 = setInterval(diyi,5000)
	})
	
	// 设置按钮点击事件
	$('banner>div').click(function(){
		clearInterval(time2)
		if(p==0){
			p=1
		
		if($(this).index()==1){
			// 左按钮
			
			// 让图片每次动一次
			$('banner>ul>li').eq(num-1).css({left:-width2+'px'}).animate({left:'0px'},1000,function(){
				p=0
			})
			$('banner>ul>li').eq(num).animate({left:width2+'px'},1000,function(){
				p=0
			})
			num--
			if(num<0){num=5}
			
		}else{
			// 右按钮
			num++
			if(num>=6){num=0}
			// 让图片每次动一次
			$('banner>ul>li').eq(num-1).animate({left:-width2+'px'},1000,function(){
					p=0
				})
			$('banner>ul>li').eq(num).css({left:width2+'px'}).animate({left:'0px'},1000,function(){
					p=0
				})
		}
		}
	})
	
	
	function diyi(){
		time3 = 1;
		if(time3==1){time4=5000}
		num++
		if(num>=6){num=0}
		// 让图片每次动一次
		$('banner>ul>li').eq(num-1).animate({left:-width2+'px'},1000,function(){
				p=0
			})
		$('banner>ul>li').eq(num).css({left:width2+'px'}).animate({left:'0px'},1000,function(){
				p=0
			})
	}
		
	
	
})



//第二轮播图设置自走与点击事件
$(function(){

	// 获取一张图片的宽度
	var width3 = $('.newsLbt>ul>li').eq(0).width();
	
	// 设置一个变量控制走动的次数
	var num1 = 0;
	
	// 设置一个变量解决定时器时间差
	var time5 = 0;
	var time6 = 2000;
	
	// 设置图片初始化位置
	for(var i=0;i<$('.newsLbt>ul>li').length;i++){
		$('.newsLbt>ul>li').eq(i).css({left:width3*i+'px'})
	}
	
	// 设置变量控制点击的频率
	var p1 = 0;
	
	// 轮播图自走
	var time7 = setInterval(dier,time6)
	
	// 设置鼠标移入事件
	$('div.newss>.newsLbt').hover(function(){
		clearInterval(time7)
	},function(){
		time7 = setInterval(dier,time6)
	})
	
	// 设置按钮点击事件
	$('.newsLbt>span>ul.round>i').click(function(){
		clearInterval(time7)
		if(p1==0){
			p1=1
		
		if($(this).index()==0){
			// 左按钮
			// 让图片每次动一次
			$('.newsLbt>ul>li').eq(num1-1).css({left:-width3+'px'}).animate({left:'0px'},1000,function(){
				p1=0
			})
			$('.newsLbt>ul>li').eq(num1).animate({left:width3+'px'},1000,function(){
				p1=0
			})
			num1--
			if(num1<0){num1=4}
			// 同步小圆点
			$('.newsLbt>span>ul.round>li').removeClass('sty')
			$('.newsLbt>span>ul.round>li').eq(num1).addClass('sty')
			
			// 同步文字
			$('.newsLbt>span>h5').html($('.newsLbt>ul>li').eq(num1).children('span').html())
			

		}
		
		
		
		if($(this).index()==6){
			// 右按钮
			dier()
		}
		}
	})
	
	
	function dier(){
		time5 = 1;
		if(time5==1){time6=3000}
		num1++
		if(num1>4){num1=0}
		// 让图片每次动一次
		$('.newsLbt>ul>li').eq(num1-1).animate({left:-width3+'px'},1000,function(){
				p1=0
			})
		$('.newsLbt>ul>li').eq(num1).css({left:width3+'px'}).animate({left:'0px'},1000,function(){
				p1=0
			})
			// 同步小圆点
			$('.newsLbt>span>ul.round>li').removeClass('sty')
			$('.newsLbt>span>ul.round>li').eq(num1).addClass('sty')
			
			// 同步文字
			$('.newsLbt>span>h5').html($('.newsLbt>ul>li').eq(num1).children('span').html())
	}
	
})


/* // 导航栏跳转
$(function(){
	
	// 获取导航栏按钮
	$('nav>.Navigation>ul>li').click(function(){
		switch($(this).index()){
			case 0 :
			window.location.href="index.html";
			break;
			case 1 :
			window.location.href='html/index2.html';
			break;
			case 2 : window.location.href='html/news.html';
			break;
			case 3 : window.location.href='html/index3.html';
			break;
			case 4 : window.location.href='html/index4.html';
			break;
			case 5 : window.location.href='html/index5.html';
			break;
			case 6 : window.location.href='html/index6.html';
			break;
		}
	})
})
 */


