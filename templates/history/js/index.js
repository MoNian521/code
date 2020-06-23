var index=0;
$(function(){
	// setInterval(ChangeImg,2000);
	scrollTop();
    activeMenu();
});	
//轮播图进行图片切换方法 
function ChangeImg() {
    index++;
    var a=document.getElementsByClassName("img-slide");
    if(index>=a.length) index=0;
    for(var i=0;i<a.length;i++){
        a[i].style.display='none';
    }
    a[index].style.display='block';
}

//滚动监听显示回顶部
function scrollTop(){
    $(window).scroll(function(){
		// 滚动条距离顶部的距离 大于300px时
        if($(window).scrollTop() >= 300){
            $(".fixContent").fadeIn(1000); // 开始淡入
        } else{
            $(".fixContent").fadeOut(1000); // 如果小于等于 300 淡出
        }
    });
}

function activeMenu(){
    $('.fixMenu ul li').each(function(){
        var _this = $(this);
        _this.on('click',function(){
            _this.find('img').attr('src','./imgs/icon/'+_this.find('img').attr("data-active"));
            _this.find('span').css('color','#000');
            var lists=_this.siblings();
            for (var i = 0; i < lists.length; i++) {
                $(lists[i]).find('img').attr('src','./imgs/icon/'+$(lists[i]).find('img').attr("data-common"));
                $(lists[i]).find('span').css('color','gray');
            }

        })
    })
}
//点击登录方法
function signIn(item){
    console.log($(item).text());
    $('.login').show(); 
    $('.layer').show(); 
    $('.btns').text($(item).text());   
}
//点击注册方法
function signUp(item){
    $('.login').show();
    $('.layer').show(); 
    $('.btns').text($(item).text());    
}
//关闭注册界面
function closeFun(){
    $('.login').hide();
    $('.layer').hide(); 
}