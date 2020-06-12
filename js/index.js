var index=0;
$(function(){
	setInterval(ChangeImg,2000);
	scrollTop();
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
