$(function(){

	// 设置一个变量接收被点击按钮的下标,默认为公司新闻
	var index = 1;
	// 给新闻导航栏绑定点击事件
		$('div.wrap>ul>li').click(function(){
			// 获取下标
			index = $(this).index()
			// 清除所有样式
			$('div.main').removeClass('main2');
			$('div.wrap>ul>li').removeClass('sty');
			
			// 给被点击的按钮及相应的内容设置样式
			$('div.main').eq(index).addClass('main2');
			$(this).addClass('sty');
			
			
			// 每次点击都把所有的页码显示为第一页
			
			// 将所有按钮的样式去掉
			$('div.main').children('div[class=buts]').children('button').removeClass('stys');
			// 给被点击的按钮设置样式
			$('div.main').eq(index).children('div[class=buts]').children('button[class=but]').eq(0).addClass('stys');
			
			// 将所有的页面都去掉显示类名
			$('div.main').children('div.content').removeClass('Block');
			// 给与点击按钮的下标相对应的页面添加显示类名
			$('div.main').eq(index).children('div.content').eq(0).addClass('Block');
			
		})
		

	// 定义一个变量接收改变按钮的下标值
		var index2 = 0;
		// 定义一个变量接收按钮的下标
		var index1 = 0;
	// 给下方按钮设置点击事件
	$('div.main').children('div[class=buts]').children('button').click(function(){
		index1 = $(this).index();
		// 判断点击的是哪一种按钮
			// 如果下标小于等于一或者大于等于6,就是两边的上一个/下一个按钮
		if(index1<=1||index1>=6){
			// 判断是哪一个按钮
				// 直接到第一页
					if(index1==0){
						index2 = 0;
					}
				// 退一页
					if(index1==1){
						index2--
						if(index2<=0){
							index2=0
						}
						console.log(index2)
					}
				// 直接到最后一页
					if(index1==7){
						index2 = 3;
					}
				// 前进一页
					if(index1==6){
					index2++
					if(index2>=3){
						index2=3
					}
					}
					
		// 将所有按钮的样式去掉
		$('div.main').eq(index).children('div[class=buts]').children('button').removeClass('stys');
		// 给被点击的按钮设置样式
		$('div.main').eq(index).children('div[class=buts]').children('button[class=but]').eq(index2).addClass('stys');
		
		// 将所有的页面都去掉显示类名
		$('div.main').eq(index).children('div.content').removeClass('Block');
		// 给与点击按钮的下标相对应的页面添加显示类名
		$('div.main').eq(index).children('div.content').eq(index2).addClass('Block');
					
			
		}
		// 如果不是就是页码按钮
		if(index1>=2&&index1<=5){
			// 页码按钮下标
			index2 =index1-2;
			
			// 将所有按钮的样式去掉
			$('div.main').eq(index).children('div[class=buts]').children('button').removeClass('stys');
			// 给被点击的按钮设置样式
			$(this).addClass('stys');
			
			// 将所有的页面都去掉显示类名
			$('div.main').eq(index).children('div.content').removeClass('Block');
			// 给与点击按钮的下标相对应的页面添加显示类名
			$('div.main').eq(index).children('div.content').eq(index2).addClass('Block');
		}
		
		// 点击返回首页
		document.documentElement.scrollTop=0;
	})	
		
		
		
	// 给视屏设置鼠标移入事件
	$('div.shiping>div').hover(function(){
		$(this).children('span').children('div').slideDown()
		
	},function(){
		$(this).children('span').children('div').slideUp()
	})
		
		
		
})