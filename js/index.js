$(function () {
    //视屏播放
    $(".backgroundImage").on("click", function () {
        var imgSrc = $(this).attr("src-data")
        $(".video_zhezhao .videoplay_Box video").attr("src", imgSrc);
        $(".video_zhezhao .videoplay_Box video")[0].play();
        $(".video_zhezhao").css("display", "block")
    })
    $(".video_zhezhao img").on("click", function () {
        $(".video_zhezhao .videoplay_Box video")[0].pause();
        $(".video_zhezhao").css("display", "none")
    })
    //相关资讯鼠标经过样式
    $(".golf_news .col-md-2  .news_box").on("mouseenter", function () {
        $(this).css("margin-top", "-20px")
    })
    $(".golf_news .col-md-2  .news_box").on("mouseleave", function () {
        $(this).css("margin-top", "0px")
    })
    //注册
    $("#loginin").on("click", function () {
        $(".register").css("display", "block")
        $(".register .form-horizontal").addClass("down")
    })
    $(".register .cancel").on("click", function () {
        $(".register").css("display", "none")
        $(".register .form-horizontal").removeClass("down")
    })
    //登录
    $(".login_register").on("click", function () {
        $(".register").css("display", "none")
        $(".login").css("display", "block")
        $(".register .form-horizontal").removeClass("down")
        $(".login .form-horizontal").addClass("down")
    })
    $(".login .cancel").on("click", function () {
        $(".login").css("display", "none")
        $(".login .form-horizontal").removeClass("down")
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
    $(".content_address .new_add").on("click",function(){
        $(".new_address_box").css("display","block")
    })
    $(".close_box").on("click",function(){
        $(".new_address_box").css("display","none")
    })


    function select1() {
        $.ajax(
            {
                type: "post",
                url: "Handler.ashx",
                data: { "type": "province" },
                success: function (msg) {
                    for (var i = 0; i < msg.length; i++) {
                        $("#S1").append("<option value=" + msg[i].ProvinceID + ">" + msg[i].ProvinceName + "</option>");
                    }
                    select2();
                }
            })
    };
    function select2() {
        $("#S2").html("");
        $.ajax(
            {
                type: "post",
                url: "Handler.ashx",
                data: { "type": "city","provinceID":$('#S1').attr("value") },
                success: function (msg) {
                    for (var i = 0; i < msg.length; i++) {
                        $("#S2").append("<option value=" + msg[i].CityID + ">" + msg[i].CityName + "</option>");
                    }
                    select3();
                }
            })
    };
    function select3() {
        $("#S3").html("");
        $.ajax(
            {
                type: "post",
                url: "Handler.ashx",
                data: { "type": "district","cityID":$('#S2').attr("value") },
                success: function (msg) {
                    for (var i = 0; i < msg.length; i++) {
                        $("#S3").append("<option value=" + msg[i].DistrictID + ">" + msg[i].DistrictName + "</option>");
                    }
                }
            })
    };
    $(function () {
        select1();
        $('#S1').bind("change", select2);
        $('#S2').bind("change", select3);
    });

        $("#province").ProvinceCity()
})


