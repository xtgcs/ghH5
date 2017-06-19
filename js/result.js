/**
 * Created by tian on 2017/1/5.
 */
$(document).ready(function () {
    var state = true;
    $("#btn").click(function () {
        $.ajax({
            url:"maxnum",
            success:function(result){
               if(result){
                   if(state){
                       $(this).attr("src","http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/result/button_text_3.png");
                       $(this).parent().css("background-image","url(http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/result/ling_button_click.png)");
                       // 手机号码验证
                       var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                       // var myreg = /^1[34578]\d{9}$/;
                       // var myreg = /^1[3|4|5|7|8][0-9]{9}$/;
                       if(!myreg.test($("#phone").val()))
                       {
                           $("#prompt").text("您输入的信息有误，请重新输入手机号码。");
                           $("#top_img").attr("src","http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/result/ling_fail.png");
                           $("#success").show();
                           return false;
                       }
                       var phone = $("#phone").val();
                       $.ajax({
                           url:"sendMail",
                           data: {phone:phone},
                           success:function(result){
                               $(this).attr("src","http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/result/button_text_3.png");
                               $("#prompt").text("亲，国际、国内各30元机票代金券邀请码已经发到您手机上了，请不要忘记到中国国航APP兑换使用哦");
                               $("#success").show();
                               state = false;
                               $("#btn").parent().css("background-image","url(http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/result/ling_button_disabled.png)");

                   },error: function (msg) {

                           }
                       });

                   }else{
                       return false;
                   }
               }else{
                   $(this).attr("src","http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/result/button_text_1.png");
                   $("#top_img").attr("src","http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/result/ling_fail.png");
                   $("#prompt").text("抱歉，你手慢了哦，我们的活动已经结束啦。");
                   $("#success").show();

               }
            },error: function (msg) {

            }
        });


    });
    $("input").focus(function(){
        $("#btn").parent().css("background-image","url(http://carnival.ufile.ucloud.com.cn/AirChinaSMS/images/result/ling_button_normal.png)");    });
    $("#success").click(function () {
        $("#success").hide();
    });

});