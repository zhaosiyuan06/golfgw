$(function(){
    //视屏播放
    $(".backgroundImage").on("click",function(){
        var imgSrc=$(this).attr("src-data")
        $(".video_zhezhao .videoplay_Box video").attr("src",imgSrc);
        $(".video_zhezhao .videoplay_Box video")[0].play();
        $(".video_zhezhao").css("display","block")
    })
    $(".video_zhezhao img").on("click",function(){
        $(".video_zhezhao .videoplay_Box video")[0].pause();
        $(".video_zhezhao").css("display","none")
    })
    //相关资讯鼠标经过样式
    $(".golf_news .col-md-2  .news_box").on("mouseenter",function(){
        $(this).css("margin-top","-20px")
    })
    $(".golf_news .col-md-2  .news_box").on("mouseleave",function(){
        $(this).css("margin-top","0px")
    })
    //注册
    $("#loginin").on("click",function(){
        $(".register").css("display","block")
        $(".register .form-horizontal").addClass("down")
    })
    $(".register .cancel").on("click",function(){
        $(".register").css("display","none")
        $(".register .form-horizontal").removeClass("down")
    })
   //登录
    $(".login_register").on("click",function(){
        $(".register").css("display","none")
        $(".login").css("display","block")
        $(".register .form-horizontal").removeClass("down")
        $(".login .form-horizontal").addClass("down")
    })
    $(".login .cancel").on("click",function(){
        $(".login").css("display","none")
        $(".login .form-horizontal").removeClass("down")
    })
//    点赞
    $(".content .container .new").on("click",function(){
       if($(this).hasClass("news")){
           $(this).removeClass("news")
       }else{
           $(this).addClass("news")
       }
    })

//   产品数量加减
    $(".num1").on("click",function(){
        var sum = $(".num").attr("value")
        sum = sum-1;
        $(".num").attr("value",sum)
    })
    $(".num2").on("click",function(){
        var sum1 = $(".num").attr("value")
        sum1 = sum1+1;
        $(".num").attr("value",sum1)
    })
})