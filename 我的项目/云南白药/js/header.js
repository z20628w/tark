$(function(){
	// 导航条设置鼠标移入移出事件
	// 先把第一个导航条按钮的葫芦隐藏
	$('nav>.Navigation>ul>li').eq(0).children('i').css('opacity','0')
	
	// 设置变量判定给第几个按钮特效
	var tx = 0;
	// 给对应页面的导航栏设置样式
	if($('title').html()=='index2'){
		tx = 1;
	}
	if($('title').html()=='news'){
		tx = 2;
	}
	if($('title').html()=='index3'){
		tx = 3;
	}
	if($('title').html()=='index4'){
		tx = 4;
	}
	if($('title').html()=='index5'){
		tx = 5;
	}
	// 设置默认的特效
	// 把所有的样式还原
	$(this).children('i').removeClass('Gourd');
	$(this).children('i').css('opacity','.5');
	$(this).children('a').removeClass('gren');
	$(this).children('span').removeClass('Flowers');
	// 给第一个按钮设置样式
	$('nav>.Navigation>ul>li').eq(tx).children('i').addClass('Gourd').css('opacity','0');
	$('nav>.Navigation>ul>li').eq(tx).children('a').addClass('gren');
	$('nav>.Navigation>ul>li').eq(tx).children('span').addClass('Flowers');
	
	
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
		$('nav>.Navigation>ul>li').eq(tx).children('i').addClass('Gourd').css('opacity','0');
		$('nav>.Navigation>ul>li').eq(tx).children('a').addClass('gren');
		$('nav>.Navigation>ul>li').eq(tx).children('span').addClass('Flowers');
	
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
})


