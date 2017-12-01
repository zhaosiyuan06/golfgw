$(function(){
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
})