// 按钮跳转集合
$(function(){
	// 给导航栏设置吸顶判定
		var time = setInterval(gun,1)
	// 给导航栏设置点击事件
		// 设置一个变接收被点击的按钮的下标
		var index;
	$('div.daohang>.ben>ul>li').click(function(){
		index = $(this).index();
		// 判定是否为首页
		if(index!=0){
			clearInterval(time)
			$('.box>.ToTop').addClass('dh');
			$('div.daohang>.ben').css({position:'fixed',left:'0px',top:'0px'})
		}else{
			$('.box>.ToTop').removeClass('dh');
			$('div.daohang>.ben').css({position:'absolute',left:'0px',top:'0px'})
			time = setInterval(gun,1)
			}

			// 给表单验证页面设置点击跳转与按钮样式
		$('.lbt>.dh1').addClass('dh')
		$('.lbt>.dh1').eq(index).removeClass('dh')
		$('div.daohang>.ben>ul>li').removeClass('styles1')
		$(this).addClass('styles1')
		})
		// 判定滚动条的距离
		function gun(){
			if($(document).scrollTop()>=562){
			$('div.daohang>.ben').css({position:'fixed',left:'0px',top:'0px'})
		}else{
			$('div.daohang>.ben').css({position:'absolute',left:'0px',top:'0px'})
		}
		}
	// 判定滚动条的距离2 返回顶部的
		var timeX = setInterval(gun2,1)
		function gun2(){
			if($(document).scrollTop()>=100){
			$('div.gd>div').eq(1).removeClass('dh')
		}else{
			$('div.gd>div').eq(1).addClass('dh')
		}
		}

	//给返回顶部按钮设置点击事件
	$('div.gd>div').eq(1).click(function(){
			time = setInterval(function(){
				if($(document).scrollTop()>0){
				document.documentElement.scrollTop-=20;
				}else{
					clearInterval(time)
				}
			},1)
		})



	// 给报名查询设置点击事件
		// 设置变量接收被点击的按钮下标
		var index1;
	 $('.but2>div.cx').click(function(){
		index1 = $(this).index();
		
		// 给所有按钮添加样式
		$('.but2>div.cx').addClass('bot');
		// 给被点击的按钮清除样式
		$(this).removeClass('bot')
		
		// 给与点击按钮相关的内容显示,其他的隐藏
		$('.yz').addClass('dh')
		$('.yz').eq(index1).removeClass('dh')
	 })
		
	
})

// 活动介绍轮播图
$(function(){
	// 设置变量控制活动介绍轮播图轮播的次数
	 var cs = 0 ;
	 // 设置变量接收活动介绍轮播图的定时器
	 var time1;
	// 给活动介绍轮播图按钮设置点击事件
		// 设置变量接收被点击的按钮下标
		var index2;
		$('div.jieshao>.lbtImgs>span').click(function(){
			index2 = $(this).index();
			if(index2 == 1){
				// 设置说明为左按钮
				cs--
				if(cs<1){cs=5}
			}else{
				// 设置说明为右按钮
				cs++
				if(cs>5){cs=1}
				}
			$('.lbtImgs>div>ul>li').eq(0).css({background:'url(imgs/index6/lbt2-'+cs+'.jpg) no-repeat center/100% 100%'})
			// 同步小轮播图
			$('.lbtMin>ul>li>p').css({border:' 1px solid transparent'})
			$('.lbtMin>ul>li:eq('+(cs-1)+')>p').css({border:' 1px solid #ff7741'})
		})
	
		// 给小轮播图的按钮设置点击事件
		$('.lbtMin>.but').click(function(){
			if($(this).index() == 0){
				// 设置说明为左按钮
				cs--
				if(cs<1){cs=5}
			}else{
				// 设置说明为右按钮
				cs++
				if(cs>5){cs=1}
				}
			$('.lbtImgs>div>ul>li').eq(0).css({background:'url(imgs/index6/lbt2-'+cs+'.jpg) no-repeat center/100% 100%'})
			// 同步小轮播图
			$('.lbtMin>ul>li>p').css({border:' 1px solid transparent'})
			$('.lbtMin>ul>li:eq('+(cs-1)+')>p').css({border:' 1px solid #ff7741'})
		})
	
	
		// 给小轮播图的图片设置点击事件
		$('.lbtMin>ul>li').click(function(){
		$('.lbtImgs>div>ul>li').eq(0).css({background:'url(imgs/index6/lbt2-'+($(this).index()+1)+'.jpg) no-repeat center/100% 100%'})
		cs = $(this).index()+1
		// 同步小轮播图
		$('.lbtMin>ul>li>p').css({border:' 1px solid transparent'})
		$(this).children('p').css({border:' 1px solid #ff7741'})
		})
	
				// 活动介绍轮播图
		function lbt2(){
					cs++
					if(cs>5){
						cs=1
					}
				$('.lbtImgs>div>ul>li').eq(0).css({background:'url(imgs/index6/lbt2-'+cs+'.jpg) no-repeat center/100% 100%'})
				// 同步小轮播图
				$('.lbtMin>ul>li>p').css({border:' 1px solid transparent'})
				$('.lbtMin>ul>li:eq('+cs-1+')>p').css({border:' 1px solid #ff7741'})
				}
})



// 首页轮播图
$(function(){
	// 设置变量接收每次图片移动的距离
		var juli = $('.lbtBen>.lbtL>ul>li').eq(0).width();
	// 设置变量接收每次文字移动的距离
		var juli2 = $('div.lbt>.lbtBen>.lbtR>div>ul>li').eq(0).width();
		
		// 设置每张图片的初始位置
		for(var i=0;i<6;i++){
			$('.lbtBen>.lbtL>ul>li').eq(i).css({left:-juli*i+'px'})
			$('div.lbt>.lbtBen>.lbtR>div>ul>li').eq(i).css({left:-juli2*i+'px'})
		}
		//设置变量控制移动的次数
		var cs1 = 0;
		// 设置一个变量控制点击的频率
		var e = 0;
	// 获取按钮设置点击事件
	$('.lbtBen>div.but').click(function(){
		if(e==0){
			e=1;
		
		cs1++
		if(cs1>5){
			cs1=0
		}
		// 图片
		$('.lbtBen>.lbtL>ul>li').eq(cs1-1).animate({left:juli+'px'},500,function(){
			e=0;
		})
		$('.lbtBen>.lbtL>ul>li').eq(cs1).css({left:-juli+'px'}).animate({left:'0px'},500,function(){
			e=0;
		})
		// 文字
		$('div.lbt>.lbtBen>.lbtR>div>ul>li').eq(cs1-1).animate({left:juli2+'px'},500,function(){
			e=0;
		})
		$('div.lbt>.lbtBen>.lbtR>div>ul>li').eq(cs1).css({left:-juli2+'px'}).animate({left:'0px'},500,function(){
			e=0;
		})
		// 小圆点
		$('div.lbt>.lbtBen>ul.yuan>li').removeClass('X')
		$('div.lbt>.lbtBen>ul.yuan>li').eq(-cs1).addClass('X')
		}
	})
	
})



//设置变量接收验证码定时器
var time2;

// 四位数的随机数
$(function(){
	// 定义装有数字的数组
	var num = [0,1,2,3,4,5,6,7,8,9]
	
	// 定义装有大写字母的数组
	var A = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	''
	// 定义装有小写字母的数组
	var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','s','y','z']
	
	// 设变量判断点击的是谁
	var s=0;
	// 先出一个验证码
	time2 = setTimeout(function(){
		s=1
		sjs()
	})
		
	$('.yzm').click(function(){
		s=1
		sjs();
	})
/* 	$('.tj1').click(function(){
		s=1
		sjs();
	}) */
	$('.dianji').click(function(){
		s=2
		sjs();
	})
/* 	$('.tj2').click(function(){
		s=2
		sjs();
	}) */

	function sjs(){
	// 定义一个变量获取随机的一个数
	var num1 = num[Math.floor(Math.random()*10)];
	var num2 = num[Math.floor(Math.random()*10)];
	var num3 = num[Math.floor(Math.random()*10)];
	var num4 = num[Math.floor(Math.random()*10)];
	var num5 = num[Math.floor(Math.random()*10)];
	// 定义一个变量获取随机的一个大写字母
	var A1 = A[Math.floor(Math.random()*26)];
	var A2 = A[Math.floor(Math.random()*26)];
	var A3 = A[Math.floor(Math.random()*26)];
	var A4 = A[Math.floor(Math.random()*26)];
	var A5 = A[Math.floor(Math.random()*26)];
	
	// 定义一个变量获取随机的一个小写字母
	var a1 = a[Math.floor(Math.random()*26)];
	var a2 = a[Math.floor(Math.random()*26)];
	var a3 = a[Math.floor(Math.random()*26)];
	var a4 = a[Math.floor(Math.random()*26)];
	var a5 = a[Math.floor(Math.random()*26)];
	
	// 定义一个数组装获取到的随机数
	var sj = [num1,num2,num3,num4,num5,A1,A2,A3,A4,A5,a1,a2,a3,a4,a5]
	// 获取随机的数或字母赋值给盒子
	var a5 = sj[Math.floor(Math.random()*sj.length)];
	var a2 = sj[Math.floor(Math.random()*sj.length)];
	var a3 = sj[Math.floor(Math.random()*sj.length)];
	var a4 = sj[Math.floor(Math.random()*sj.length)];
	if(s==1){
		$('.yzm').html(String(a2)+String(a3)+String(a4)+String(a5))
	}
	if(s==2){
		$('.dianji').css({background:'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')'})
		$('.dianji').html(String(a4)+String(a2)+String(a5)+String(a3))
	}
	

	}
})



// 表单验证  报名查询
$(function(){
	// 设置变量接收证件号的值
		var zj;
	// 设置变量接收证件号的值
		var sj;
	
	
	// 获取提交按钮
	$('.yz1>form').submit(function(){
		
		// 设置变量判断是否全部为true
		  var T = 0;
		  var S = 0;
		  var Y = 0;
		  
		  // 判断验证码是否正确
		  if($('.sjyzm').val()!=$('.yzm').html()){
			  $('span.ts').html('验证码错误')
			  $('span.ts').fadeIn(1000,function(){
			  setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
			  })	
		  }else{Y=2}
		  // 判断手机号是否符合条件
		  	// 1.先获取手机号的值
		  		sj = $('.sj').val();
		  		
		  		if(sj.split('').length!=11){
		  			$('span.ts').html('对不起,手机号必须为11位')
		  			$('span.ts').fadeIn(1000,function(){
		  			setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
		  			})
		  		}else{S+=1}
		  		
		  		if(sj==''){
		  			$('span.ts').html('对不起,手机号为必填项')
		  			$('span.ts').fadeIn(1000,function(){
		  			setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
		  			})
		  		}else{S+=1}
		  
		  
		// 判断证件号是否符合条件
			// 1.先获取证件号的值
			zj = $('.zj').val();			
				if(zj.split('').length!=18){
					$('span.ts').html('对不起,证件号必须为18位')
					$('span.ts').fadeIn(1000,function(){
					setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
					})
				}else{T+=1}
				
				if(zj==''){
					$('span.ts').html('对不起,证件号为必填项')
					$('span.ts').fadeIn(1000,function(){
					setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
					})
				}else{T+=1}
				
				
				
				if(T==2&&S==2&&Y==2){
					$('span.ts').html('恭喜你,报名成功')
					$('span.ts').fadeIn(1000,function(){
					setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
					})
				}
		  return false;
	})
})

// 表单验证  报名取消

$(function(){
	// 获取提交按钮
	$('.yz2>form').submit(function(){ 
		
		var X=0;
		var J1=0;
		var s1=0;
		var y=0;
		
		// 判断验证码是否正确
		if($('.dxyzm').val()!=$('.dianji').html()){
					$('span.ts').css({background:'greenyellow'})
					  $('span.ts').html('验证码错误')
					  $('span.ts').fadeIn(1000,function(){
					  setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
					  })	
		}else{y=2}
		
		// 判定手机号
		// 1.先获取手机号的值
			var sj = $('.sj1').val();
			
			if(sj.split('').length!=11){
				$('span.ts').css({background:'greenyellow'})
				$('span.ts').html('对不起,手机号必须为11位')
				$('span.ts').fadeIn(1000,function(){
				setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
				})
			}else{s1+=1}
			
			if(sj==''){
				$('span.ts').css({background:'greenyellow'})
				$('span.ts').html('对不起,手机号为必填项')
				$('span.ts').fadeIn(1000,function(){
				setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
				})
			}else{s1+=1}
		
			// 判定证件号
				var z = $('.zj1').val();
				if(z.split('').length!=18){
					$('span.ts').css({background:'greenyellow'})
					$('span.ts').html('对不起,证件号必须为18位')
					$('span.ts').fadeIn(1000,function(){
					setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
					})
				}else{J1+=1}
				
				if(z==''){
					$('span.ts').css({background:'greenyellow'})
					$('span.ts').html('对不起,证件号为必填项')
					$('span.ts').fadeIn(1000,function(){
					setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
					})
				}else{J1+=1}
			

		// 判定姓名
		if($('.xm').val()==''){
			$('span.ts').css({background:'greenyellow'})
			$('span.ts').html('名字不能为空')
			$('span.ts').fadeIn(1000,function(){
			setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
			})
		}else{X=1}
		
		
		if(X==1&&J1==2&&s1==2&&y==2){
			$('span.ts').css({background:'greenyellow'})
			  $('span.ts').html('已经取消报名,祝您好运')
			  $('span.ts').fadeIn(1000,function(){
			  setTimeout(function(){$('span.ts').fadeOut(1000)},2000)
			  })	
		}
		
		return false;
		})
	
	
})

// 空格判断
$(function(){
	// 去星号
		$('.xin').keyup(function(){
		if($(this).val()!=''){
		$(this).parent().children('span').css({display:'none'})
		}else{
		$(this).parent().children('span').css({display:'block'})
		}
		})
		
})




