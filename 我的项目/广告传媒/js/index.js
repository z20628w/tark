class logo {
    constructor() {
        // 数据数组
        this.datas = [
            {
                name: 'logo设计',
                text: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。',
                img: './img/01.webp',
                bgimg: '#f7f7f7'
            },
            {
                name: 'VI设计',
                text: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。',
                img: './img/02.webp',
                bgimg: 'url(./img/bg.webp) no-repeat center'
            },
            {
                name: '包装设计',
                text: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。',
                img: './img/03.webp',
                bgimg: '#f7f7f7'
            },
            {
                name: '海报设计',
                text: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。',
                img: './img/04.webp',
                bgimg: 'url(./img/bg.webp) no-repeat center'
            },
            {
                name: '画册设计',
                text: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。',
                img: './img/05.webp',
                bgimg: '#f7f7f7'
            },
            {
                name: 'logo设计工作室',
                text: '电话  /  011-555-1234405',
                text1: '邮箱  /  1234@admin.com',
                img: 'url(./img/wb.png) no-repeat 0 0/100% 100%',
                img1: 'url(./img/wx.png) no-repeat 0 0/100% 100%',
                img2: 'url(./img/f.png) no-repeat 0 0/100% 100%',
                bgimg: 'url(./img/bg1.webp) no-repeat center'
            }
        ]
        // 设置变量控制滚动的页码
        this.index = 0;
        // 设置变量控制滚动的频率
        this.frequency = 0;
        // 设置一个页面的高度
        this.height = $(window).height() - 1;
    }
    // 模板函数{下标，位置一，位置二，名称，图片，文字，文字颜色，背景，联系页面图片1、2,联系页面文字1}
    html(num, position1, position2, name, img, text, color, bgimg, img1 = null, img2 = null, text1 = null) {
        // 判断是否为联系页面
        let html;
        if (this.datas[num].name != 'logo设计工作室') {
            html = `<div class="Outer" style="background:${bgimg}">
        <div class="Publics">
            <div class="img cont ${position1}">
                <img src="${img}" alt="">
            </div>
            <div class="text cont ${position2}" style="color:${color}">
                <h1>${name}</h1>
                <p>${text}</p>
                <button class="blacks">查看案例</button>
            </div>
        </div>
    </div>`
        } else {
            html = `<div class="Outer ContactUs">
                    <div class="Publics">
                        <div class="contact">
                            <ul>
                                <div>
                                    <li style="background:${img}"></li>
                                    <li  style="background:${img1}"></li>
                                    <li  style="background:${img2}"></li>
                                </div>
                            </ul>
                            <div class="contacts">
                                <span>${name}</span>
                                <span>${text}</span>
                                <span>${text1}</span>
                            </div>
                        </div>
                    </div>
                </div>`
        }

        return html;
    }

    // 生成标签
    div() {
        let th = this;
        this.datas.forEach(function (val, key) {
            let pos;
            let pos1;
            let color;
            if (key % 2 == 0) {
                pos = 'lefts';
                pos1 = 'rights';
                color = 'black';
            } else {
                pos = 'rights';
                pos1 = 'lefts';
                color = 'white';
            }
            $('div.content').append(th.html(key, pos, pos1, val.name, val.img, val.text, color, val.bgimg, val.img1, val.img2, val.text1))
        })
    }
    // 滚轮事件
    Roller() {
        let th = this
        // 将滚动的值赋值给标签
        $('div.content').animate({'top':-th.height*th.index+'px'},300,function(){
            th.frequency = 0;
            })
            $('li.xyd').removeClass('style');
            $('li.xyd').eq(th.index).addClass('style');
    }
}

let logos = new logo();
// 生成标签
logos.div()
$(function () {
    $('div.Outer').css({ 'height':logos.height + 'px' });
    // 给菜单按钮绑定点击事件
    $('div.menu').on('click', function () {
        if ($(this).attr('name') == 0) {
            $(this).addClass('click').attr('name', '1');
            $(this).fadeToggle(500)
            setTimeout(() => {
                $('div.menus').animate({ 'right': '0px' }, 300, () => {
                    $('div.menu').fadeToggle(500)
                })
            }, 500)
        } else {
            $(this).removeClass('click').attr('name', '0');
            $(this).fadeToggle(1000)
            setTimeout(() => {
                $('div.menus').animate({ 'right': '-400px' }, 300, () => {
                    $('div.menu').fadeToggle(500)
                })
            }, 500)
        }
    })

    // 绑定滚轮事件
    //绑定鼠标滚轮事件 
    $(document).mousewheel(function (event) {
        let th = logos;
        // 判断滚轮是上滑还是下滑
        if (event.deltaY > 0) {
            /* 上滑 */
            // 控制频率
            if(th.frequency == 0){
                // 控制频率
                th.frequency = 1;
                // 滚动一次往上走一页的下标
                th.index--;
                // 小于等于第一页就保持在第一页
                if(th.index<=0){
                    th.index=0
                }
                logos.Roller()
            }
        } else { 
         /* 下滑 */
         // 控制频率
         if(th.frequency == 0){
            // 控制频率
            th.frequency = 1;
            // 滚动一次往上走一页的下标
            th.index++;
            // 小于等于第一页就保持在第一页
            if(th.index>=th.datas.length-1){
                th.index=th.datas.length-1
            }
            // 将滚动的值赋值给标签
            logos.Roller()
        }
        }
        
        
    })
    // 绑定小圆点点击事件
    $('li.xyd').on('click',function(){
        logos.index = $(this).index();
        logos.Roller();
    })

    // 绑定菜单按钮
    $('li.cd').on('click',function(){
        logos.index = $(this).index();
        logos.Roller();
    })
})