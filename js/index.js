/**
 * Created by Action on 16/12/9.
 */
    var rightCount=0;
    var wrongCount=0;
    var coupons=0;
    var p='';
    var ifSlidePlayed = [1];
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        nextButton:'.swiper-button-next',
        onSlideChangeEnd: function() {
            var index = mySwiper.activeIndex;
            if (ifSlidePlayed[index] == 1) {
                return;
            }
            ifSlidePlayed[index] = 1;
            console.log("第几页"+index);
            switch (index) {
                case 1:
                    addAnimationToSlide1();
                    break;
                case 2:
                    addAnimationToSlide2();
                    break;
                case 3:
                    addAnimationToSlide3();
                    break;
                case 4:
                    addAnimationToSlide4();
                    break;
                case 5:
                    addAnimationToSlide5();
                    break;
                case 6:
                    addAnimationToSlide6();
                    break;
                case 7:
                    addAnimationToSlide7();
                    break;
                case 8:
                    addAnimationToSlide8();
                    break;
                case 9:
                    addAnimationToSlide9();
                    break;
                case 10:
                    addAnimationToSlide10();
                    break;
                case 11:
                    addAnimationToSlide11();
                    break;
                case 12:
                    addAnimationToSlide12();
                    break;
                case 13:
                    addAnimationToSlide13();
                    break;
                case 14:
                    addAnimationToSlide14();
                    break;
                case 15:
                    addAnimationToSlide15();
                    break;
                default:
                    addAnimationToSlide1();
            }
        }

    });
    var quick = function (objClass1,time) {
        setTimeout(function () {
        $('.'+objClass1).addClass(objClass1+' '+'animation3');
    },time*1000);
    };
    var decline = function (objClass1,time) {
        setTimeout(function () {
            $('.'+objClass1).addClass(objClass1+' '+'animation1');
        },time*1000);
    };
    var bigger = function (objClass1,time) {
        setTimeout(function () {
            $('.'+objClass1).addClass(objClass1+' '+'animation');
        },time*1000);
    };
    var switchs = function (objClass1,time) {
    setTimeout(function () {
        $('.'+objClass1).addClass(objClass1+' '+'animation4');
    },time*1000);
    };
    var cross = function (objClass1,time) {
        setTimeout(function () {
            $('.'+objClass1).addClass(objClass1+' '+'animation5');
        },time*1000);
    };
    var addAnimationToSlide1 = function() {
        quick('food_title_food1',.1);
        quick('food_title_foodtext1',.15);
    };
    var addAnimationToSlide2 = function() {
        quick('food_title_food2',.1);
        quick('food_title_foodtext2',.15);
    };
    var addAnimationToSlide3 = function() {
        quick('food_title_food3',.1);
        quick('food_title_foodtext3',.15);
    };
    var addAnimationToSlide4 = function() {
        quick('food_title_food4',.1);
        quick('food_title_foodtext4',.15);
    };
    var addAnimationToSlide5 = function() {
        quick('food_title_food5',.1);
        quick('food_title_foodtext5',.15);
    };
    var addAnimationToSlide6 = function() {
        quick('food_title_food6',.1);
        quick('food_title_foodtext6',.15);
    };
    var addAnimationToSlide7 = function() {
        quick('food_title_food7',.1);
        quick('food_title_foodtext7',.15);
    };
    var addAnimationToSlide8 = function() {
        quick('food_title_food8',.1);
        quick('food_title_foodtext8',.15);
    };
    var addAnimationToSlide9 = function() {
        quick('food_title_food9',.1);
        quick('food_title_foodtext9',.15);
    };
    var addAnimationToSlide10 = function() {
        quick('food_title_food10',.1);
        quick('food_title_foodtext10',.15);
    };
    var addAnimationToSlide11 = function() {
        bigger('loading_title2',1);
        quick('loading_title3',1);
        bigger('loading_illustrator',1.5);
        quick('loading_food1',1.5);
        quick('loading_food2',2);
        quick('loading_food3',2.5);
        quick('loading_food4',3);
        quick('loading_food5',3.5);
        setTimeout(function () {
            mySwiper.unlockSwipes();
            results();
        },4500)

    };
    var addAnimationToSlide12 = function() {
        decline('final_bg1',.05);
        quick('final_bg_text1',1);
        bigger('final_bg_text_title1',1);
        switchs('wall',1);
        switchs('wall1',2);
        quick('doll',1.5);
    };
    var addAnimationToSlide13 = function() {
        decline('final_bg2',.05);
        quick('final_bg_text2',1);
        bigger('final_bg_text_title2',1);
        quick('doll',1.5);

    };
    var addAnimationToSlide14 = function() {
        decline('final_bg3',.05);
        quick('final_bg_text3',1);
        bigger('final_bg_text_title3',1);
        quick('rainbow',2);
        quick('doll2',2);
        cross('doll2',2);


    };
    var addAnimationToSlide15 = function() {
        if(coupons>1){
            $(".button_share_normal").show();
            $(".button_replay_normal_").show();
            $(".final_ticket_text").hide();
            $(".final_button_normal").hide();
        }
        decline('final_bg4',.05);

        quick('final_bg_text4',1);
        bigger('final_bg_text_title4',1.2);
        quick('doll',1.3);
        bigger('fireworks1',1);
        bigger('fireworks2',1.1);
        bigger('fireworks3',1.2);
    };
    var results = function (){
        if (rightCount>=0 && rightCount<= 4){
            mySwiper.slideTo(12, 50, false);
            addAnimationToSlide12();
        }else if(rightCount>=5 && rightCount<= 6){
            mySwiper.slideTo(13,50, false);
            addAnimationToSlide13();
        }else if (rightCount>=7 && rightCount<= 8){
            mySwiper.slideTo(14, 50, false);
            addAnimationToSlide14();
        }else if(rightCount>=9 && rightCount<= 10){
            $.ajax({url:"maxnum",success:function(result){
                if(result){

                }else{
                    $("#share").show();
                    $("#replay").show();
                    $("#final").hide();
                    $('#ticket_text').hide();
                }
            }});
            mySwiper.slideTo(15, 50, false);
            addAnimationToSlide15();
        }
    };

$(document).ready(function () {
    function autoPlayAudio1() {
        wx.config({
            // 配置信息, 即使不正确也能使用 wx.ready
            debug: false,
            appId: '',
            timestamp: 1,
            nonceStr: '',
            signature: '',
            jsApiList: []
        });
        wx.ready(function() {
            document.getElementById('audio').play();
        });
    }
    autoPlayAudio1(); // 推荐使用方法1
    $("#audio")[0].play();
    $("#next").click(function () {
        $("#choice")[0].play();
    });
    // 背景音乐开关
    $("#open").click(function (e) {
        if($("#audio")[0].paused) {
            e.target.src="http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/music_on.png";
            play();
        } else {
            e.target.src="http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/music_disable.png";
            pause();
        }
    });
    //播放
    function play() {
        $("#audio")[0].play();
    }
    //暂停
    function pause() {
        $("#audio")[0].pause();
    }
    var right = '<img class="selected" src="http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/right.png" style="display: inline;">';
    var wrong = '<img class="selected" src="http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/wrong.png" style="display: inline;">'
    $('.page1 .option.a').click(function() {
        
        $("#choice")[0].play();
        $('.page1 .option.b').find('img.selected').remove();
        $(".page1 .choice_right").removeClass('Up');
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
        } else {
            var that = this;
            delayJump(that, 'page1','choice_right',right);
            addAnimationToSlide2();

        }
    });
    $('.page1 .option.b').click(function() {
        
        $("#choice_wrong")[0].play();
        $('.page1 .option.a').find('img.selected').remove();
        $(".page1 .choice_wrong").removeClass('Up');

        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
        } else {
            var that = this;
            delayJump(that, 'page1','choice_wrong',wrong);
            addAnimationToSlide2();
        }
    });
    $('.page2 .option.a').click(function() {
        $("#choice")[0].play();
        $('.page2 .option.b').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page2 .choice_right").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page2','choice_right',right);
            addAnimationToSlide3();
        }
    });
    $('.page2 .option.b').click(function() {
        $("#choice_wrong")[0].play();
        $('.page2 .option.a').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page2 .choice_wrong").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page2','choice_wrong',wrong);
            addAnimationToSlide3();

        }
    });
    $('.page3 .option.a').click(function() {
        $("#choice")[0].play();
        $('.page3 .option.b').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page3 .choice_right").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page3','choice_right',right);
            addAnimationToSlide4();
        }
    });
    $('.page3 .option.b').click(function() {
        $("#choice_wrong")[0].play();
        $('.page3 .option.a').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page3 .choice_wrong").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page3','choice_wrong',wrong);
            addAnimationToSlide4();

        }
    });
    $('.page4 .option.a').click(function() {
        $("#choice")[0].play();
        $('.page4 .option.b').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page4 .choice_right").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page4','choice_right',right);
            addAnimationToSlide5();
        }
    });
    $('.page4 .option.b').click(function() {
        $("#choice_wrong")[0].play();
        $('.page4 .option.a').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page4 .choice_wrong").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page4','choice_wrong',wrong);
            addAnimationToSlide5();

        }
    });
    $('.page5 .option.a').click(function() {
        $("#choice")[0].play();
        $('.page5 .option.b').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page5 .choice_right").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page5','choice_right',right);
            addAnimationToSlide6();
        }
    });
    $('.page5 .option.b').click(function() {
        $("#choice_wrong")[0].play();
        $('.page5 .option.a').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page5 .choice_wrong").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page5','choice_wrong',wrong);
            addAnimationToSlide6();

        }
    });
    $('.page6 .option.a').click(function() {
        $("#choice")[0].play();
        $('.page6 .option.b').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page6 .choice_right").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page6','choice_right',right);
            addAnimationToSlide7();
        }
    });
    $('.page6 .option.b').click(function() {
        $("#choice_wrong")[0].play();
        $('.page6 .option.a').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page6 .choice_wrong").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page6','choice_wrong',wrong);
            addAnimationToSlide7();

        }
    });
    $('.page7 .option.a').click(function() {
        $("#choice")[0].play();
        $('.page7 .option.b').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page7 .choice_right").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page7','choice_right',right);
            addAnimationToSlide8();
        }
    });
    $('.page7 .option.b').click(function() {

        $("#choice_wrong")[0].play();
        $('.page7 .option.a').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page7 .choice_wrong").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page7','choice_wrong',wrong);
            addAnimationToSlide8();

        }
    });
    $('.page8 .option.a').click(function() {

        $("#choice")[0].play();
        $('.page8 .option.b').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page8 .choice_right").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page8','choice_right',right);
            addAnimationToSlide9();
        }
    });
    $('.page8 .option.b').click(function() {
        $("#choice_wrong")[0].play();
        $('.page8 .option.a').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page8 .choice_wrong").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page8','choice_wrong',wrong);
            addAnimationToSlide9();

        }
    });
    $('.page9 .option.a').click(function() {
        $("#choice")[0].play();
        $('.page9 .option.b').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page9 .choice_right").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page9','choice_right',right);
            addAnimationToSlide10();
        }
    });
    $('.page9 .option.b').click(function() {
        
        $("#choice_wrong")[0].play();
        $('.page9 .option.a').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page9 .choice_wrong").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page9','choice_wrong',wrong);
            addAnimationToSlide10();

        }
    });
    $('.page10 .option.a').click(function() {
       
        $("#choice")[0].play();
        $('.page10 .option.b').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page10 .choice_right").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page10','choice_right',right);
            addAnimationToSlide11();
        }
    });
    $('.page10 .option.b').click(function() {
        $("#choice_wrong")[0].play();
        $('.page10 .option.a').find('img.selected').remove();
        if ($(this).find('img.selected').length == 1) {
            $(this).find('img.selected').remove();
            $(".page10 .choice_wrong").removeClass('Up');
        } else {
            var that = this;
            delayJump(that, 'page10','choice_wrong',wrong);
            addAnimationToSlide11();
        }
    });
     var delayJump  = function (that,objClass,choice,img) {
        $(that).append(img);
        $('.'+objClass+' '+'.'+choice).addClass(choice+' '+'Up');
         if (img ==right){
             rightCount++;
         }
        console.log('选对个数'+rightCount);
        mySwiper.unlockSwipes();
        setTimeout(function () {
            mySwiper.slideNext(false,500);
        },300);
    };
   $('.page15 .final_button_normal').click(function () {
       $("#choice")[0].play();
       if ($('#final').attr('src')=='http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/final_button_click.png'){
           return;
       }else{
           $('#final').attr('src','http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/final_button_click.png');
           coupons++;
           console.log(coupons);
       }

   });
    $('.page12 .button_share_normal').click(function () {
        var that = this;
        share('page12',that);
         p='我是学渣型吃货，测测你是哪一级？';
        shares(p);
        console.log(p);
    });
    $('.page12 .button_replay_normal_').click(function () {
        var that = this;
        replay(that);

    });
    $('.page13 .button_share_normal').click(function () {
        var that = this;
        share('page13',that);
        p='我是导师型吃货，测测你是哪一级？';
        shares(p);
        console.log(p);


    });
    $('.page13 .button_replay_normal_').click(function () {
        var that = this;
        replay(that);

    });
    $('.page14 .button_share_normal').click(function () {
        var that = this;
        share('page14',that);
        p='我是砖家型吃货，测测你是哪一级？';
        shares(p);

    });
    $('.page14 .button_replay_normal_').click(function () {
        var that = this;
        replay(that);


    });
    $('.page15 .button_share_normal').click(function () {
        var that = this;
        share('page15',that);
        p='我是食神型吃货，测测你是哪一级？';
        shares(p);
        console.log(p);

    });

    $('.page15 .button_replay_normal_').click(function () {
       var that = this;
        replay(that);

    });
    var empty = function (that) {
        rightCount=0;
        wrongCount=0;
        $('.page').find('img.selected').remove();
        $('.page').find('img.animation').removeClass("animation");
        $('.page').find('img.animation1').removeClass("animation1");
        $('.page').find('img.animation3').removeClass("animation3");
        $('.page').find('img.animation4').removeClass("animation4");
        $('.page').find('img.animation5').removeClass("animation5");
        $(that).attr('src','http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/button_replay_normal_.png');
        addAnimationToSlide1();
    };
    var share = function (objClass,that) {
        
        $("#choice")[0].play();
        $(that).attr('src','http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/button_share_click.png');
        $('.'+objClass+' '+'.mask').show();
        $('.rainbow').css('z-index','0');
        $('.'+objClass+' '+'.mask').click(function () {
            $('.'+objClass+' '+'.mask').hide();
            $('.rainbow').css('z-index','99');
            $(that).attr('src','http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/button_share_normal.png');
        });

    };
    var replay = function (that) {
        $("#choice")[0].play();
        $(that).attr('src','http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/button_replay_click.png');
        $(".choice_right").removeClass('Up');
        $(".choice_wrong").removeClass('Up');
        mySwiper.unlockSwipes();
        mySwiper.slideTo(1, 10, empty(that));
    };
    var m = "三联年货联合国航，邀请吃货来PK";
    shares(m);
    // 分享
    function shares(p) {

    $.ajax({
        url: "http://carnival.songguolife.com/weChatPay/share",
        data: {
            url: location.href.split("#")[0]
        },
        dataType: "jsonp",
        jsonp: "jsonpcallback"
    }).success(function(n) {

        wx.config({
                debug: true,
                appId: n.appId,
                timestamp: n.timestamp,
                nonceStr: n.noncestr,
                signature: n.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
            },
            wx.ready(function() {

                var m = "三联年货联合国航，邀请吃货来PK",
                    e = "来自五湖四海的十种年货小吃，看看你是几级吃货？",
                    t = "http://carnival.songguolife.com/AirChinaSms",
                    a = "http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/share.png";
                console.log("飞昂"+p);
                wx.onMenuShareTimeline({
                        title: p,
                        link: t,
                        imgUrl: a,
                        success: function() {
                        },
                        cancel: function() {}
                    },
                    wx.onMenuShareAppMessage({
                        title: p,
                        desc: e,
                        link: t,
                        imgUrl: a,
                        type: "",
                        dataUrl: "",
                        success: function() {
                        },
                        cancel: function() {}
                    }))

            }))
      });
    }

});