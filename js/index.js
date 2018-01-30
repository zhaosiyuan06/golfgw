$(function () {
    //视屏播放
    $(".backgroundImage").on("click", function () {
        var imgSrc = $(this).attr("src-data")
        $(".video_zhezhao .videoplay_Box video").attr("src", imgSrc);
        $(".video_zhezhao .videoplay_Box video")[0].play();
        $(".video_zhezhao").css("display", "block")
        // screen.orientation.lock("portrait-primary");
    })
    $(".video_zhezhao img").on("click", function () {
        $(".video_zhezhao .videoplay_Box video")[0].pause();
        $(".video_zhezhao").css("display", "none")
    })
    // $(".swiper-container").mouseenter(function(){
    //     mySwiper.autoplay.stop();
    // }).mouseleave(function(){
    //     mySwiper.autoplay.start();
    // })
    //相关资讯鼠标经过样式
    $(".golf_news .col-md-2  .news_box").on("mouseenter", function () {
        $(this).addClass("mar")
    })
    $(".golf_news .col-md-2  .news_box").on("mouseleave", function () {
        $(this).removeClass("mar")
    })
    //登录
    $("#loginin").on("click", function () {
        $(".login").css("display", "block")
        $(".login .form-horizontal").addClass("down")
    })
    $(".login .cancel").on("click", function () {
        $(".login").css("display", "none")
        $(".login .form-horizontal").removeClass("down")
    })
    //登录
    $(".login_register").on("click", function () {
        $(".login").css("display", "none")
        $(".register").css("display", "block")
        $(".login .form-horizontal").removeClass("down")
        $(".register .form-horizontal").addClass("down")
    })
    $(".register_login").on("click",function(){
        $(".register").css("display", "none")
        $(".login").css("display", "block")
        $(".register .form-horizontal").removeClass("down")
        $(".login .form-horizontal").addClass("down")
    })
    $(".register .cancel").on("click", function () {
        $(".login").css("display", "none")
        $(".register").css("display", "none")
        $(".register .form-horizontal").removeClass("down")
    })
//    点赞
    $(".content .container .new").on("click", function () {
        if ($(this).hasClass("news")) {
            $(this).removeClass("news")
        } else {
            $(this).addClass("news")

        }
    })

    // 产品数量加减
    $(".num1").on("click", function () {
        var n = $(this).next().val();
        var num = parseInt(n) - 1;
        if (num == 0) {
            return
        }
        $(this).next().val(num);
    })
    $(".num2").on("click", function () {
        var n = $(this).prev().val();
        var num = parseInt(n) + 1;
        if (num == 0) {
            return;
        }
        $(this).prev().val(num);
    })

    //订单确认
    function address() {
        var parer = $(".content_address .container .row .col-md-4 .addressed p").html()
        var people = $(".content_address .container .row .col-md-4 .addressed .man").html()
        // alert(people)
        var tel = $(".content_address .container .row .col-md-4 .addressed .tel").html()
        // alert(tel)
        $(".submit_box .container .col-md-12 .col-md-8 p").html(parer)
        $(".submit_box .container .col-md-12 .col-md-8 .names").html(people)
        $(".submit_box .container .col-md-12 .col-md-8 .tels").html(tel)
    }
    address()

    //默认地址选定
    $(".content_address .col-md-4").on("click", function () {
        $(".content_address .col-md-4 .box_order").removeClass("addressed")
        $(this).children(".box_orders").addClass("addressed")
        address()
    })

    //总额
    var sum = 0;
    $(".order_information .shop_order").each(function () {
        var add = parseFloat($(".money").html());
        sum = parseFloat(sum) + add;
        $(".submit_box .total").html(parseFloat(sum));
    })
//    新增工作地址
    $(".content_address .new_add,.address_table .right").on("click", function () {
        $(".new_address_box").css("display", "block")
    })
    $(".address_table table tr td.xiugai img").on("click", function () {
        var user=$(this).parent().prev("td").prev("td").prev("td").prev("td").html();
        var address=$(this).parent().prev("td").prev("td").prev("td").html();
        var tel=$(this).parent().prev("td").prev("td").html();
        $(".new_address_box .new_address .infor_box .infor_input .shr_input").val(user);
        $(".new_address_box .new_address .infor_box .infor_input .shr_address").val(address);
        $(".new_address_box .new_address .infor_box .infor_input .shr_tel").val(tel);
        $(".new_address_box").css("display", "block")
    })
    $(".close_box,.new_address_box .new_address .button_box span.save").on("click", function () {
        $(".new_address_box").css("display", "none")
        // alert($("select:nth-child(1)").val()+$("select:nth-child(2)").val()+$("select:nth-child(3)").val())
    })


//   信息确认页面选项卡
    $(".bottom_infor ul li").on("click", function () {
        var index = $(this).index();
        $(".infor_container>ul").eq(index).show().siblings().hide();
    })
//    修改个人信息
    $(".resert").on("click", function () {
        $(".col-md-9 .infor_container ul").css("display", "none")
        $(".wan_infor").css("display", "block")
    })
    //头像左右旋转效果
    $(".information_box .container .col-md-3 .leader-container .top_infor img").on("mouseenter", function () {
        $(this).removeClass("tran").addClass("trans")
    })
    $(".information_box .container .col-md-3 .leader-container .top_infor img").on("mouseleave", function () {
        $(this).removeClass("trans").addClass("tran")
    })
    $(".content_address .container .new_add,.person_module .container .col-md-12 .row .col-md-2 img").on("mouseenter", function () {
        $(this).removeClass("tran").addClass("trans")
    })
    $(".content_address .container .new_add,.person_module .container .col-md-12 .row .col-md-2 img").on("mouseleave", function () {
        $(this).removeClass("trans").addClass("tran")
    })
    $(".news_module .container .col-md-9 ul li").on("mouseenter", function () {
        $(this).css({"background": "#fff",
        "border-bottom":"1px dashed  #6CB670"})
    })
    $(".news_module .container .col-md-9 ul li").on("mouseleave", function () {
        $(this).css({"background": "none",
            "border-bottom":"1px dashed #dadada"})
    })

//    guanggaowei

    var flag = "left";
    function DY_scroll(wraper, prev, next, img, speed, or) {
        var wraper = $(wraper);
        var prev = $(prev);
        var next = $(next);
        var img = $(img).find('ul');
        var w = img.find('li').outerWidth(true);
        var s = speed;
        next.click(function () {
            img.animate({'margin-left': -w}, function () {
                img.find('li').eq(0).appendTo(img);
                img.css({'margin-left': 0});
            });
            flag = "left";
        });
        prev.click(function () {
            img.find('li:last').prependTo(img);
            img.css({'margin-left': -w});
            img.animate({'margin-left': 0});
            flag = "right";
        });
        if (or == true) {
            ad = setInterval(function () {
                flag == "left" ? next.click() : prev.click()
            }, s * 1000);
            wraper.hover(function () {
                clearInterval(ad);
            }, function () {
                ad = setInterval(function () {
                    flag == "left" ? next.click() : prev.click()
                }, s * 1000);
            });
        }
    }
    DY_scroll('.hl_main5_content', '.hl_scrool_leftbtn', '.hl_scrool_rightbtn', '.hl_main5_content1', 3, true);// true为自动播放，不加此参数或false就默认不自动


//    侧边广告
    $(".advanter_module .advanter_left_box span,.advanter_module .advanter_right_box span").on("click",function(){
        $(this).parent().css("display","none")
    })
})


