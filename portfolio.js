$(function(){

// --------------------------해더시작-----------------------

    $("#header_img").hover(function(){
        $("#portfolio_memo").addClass("on");
    },function(){
        $("#portfolio_memo").removeClass("on");
    });
// -------------------------검색창 시작-------------------------
    $(window).scroll(function(){
        var a=$(window).scrollTop();
        // console.log(a);
    
        if(a>=70){
            $("#flex_searchbox").addClass("on");
        }
        else{
            $("#flex_searchbox").removeClass("on");
        }
    });

    $("#search_flexbtn1").hover(function(){
        $("#search_flexbtn1 a").addClass("on");
    },function(){
        $("#search_flexbtn1 a").removeClass("on");
    })
    
    $("#search_flexbtn1").click(function(e){
        e.preventDefault();

        if($("#search_flexbtn2 div").hasClass("on")==false){
            $("#search_flexbtn2 div").addClass("on");
        }
        else{
            $("#search_flexbtn2 div").removeClass("on");
        }
    });

// -----------------------추천 게임 슬라이더------------------------------

    $(".header_slider").eq(0).addClass("on");
    $("#header_slider .slider_btn2 a").eq(0).addClass("on");
    $(".header_imgbox img:nth-child(1)").addClass("on");

    var b1=0;
    var b=function(){
        // console.log(b1);
        if(b1<5){
            b1++;
        }
        else{
            b1=0;
        }
        $(".header_slider").removeClass("on");
        $("#header_slider .slider_btn2 a").removeClass("on");

        $(".header_slider").eq(b1).addClass("on");
        $("#header_slider .slider_btn2 a").eq(b1).addClass("on");
    };
    b2=setInterval(b,4000);

    $("#header_sliderbox, #header_slider .slider_btn2 a,#header_slider .left,#header_slider .right").hover(function(){
        clearInterval(b2);
    },function(){
        b2=setInterval(b,4000);
    });

    $("#header_slider .slider_btn2 a").click(function(e){
        e.preventDefault();
        var b2=$(this).index();
        b1=b2;

        $(".header_slider").removeClass("on");
        $("#header_slider .slider_btn2 a").removeClass("on");

        $(".header_slider").eq(b1).addClass("on");
        $("#header_slider .slider_btn2 a").eq(b1).addClass("on");
    });

    $("#header_slider .left").click(function(e){
        e.preventDefault();

        if(b1>0){
            b1--;
        }
        else{
            b1=5;
        }
        $(".header_slider").removeClass("on");
        $("#header_slider .slider_btn2 a").removeClass("on");

        $(".header_slider").eq(b1).addClass("on");
        $("#header_slider .slider_btn2 a").eq(b1).addClass("on");
    });
    $("#header_slider .right").click(function(e){
        e.preventDefault();

        if(b1<5){
            b1++;
        }
        else{
            b1=0;
        }
        $(".header_slider").removeClass("on");
        $("#header_slider .slider_btn2 a").removeClass("on");

        $(".header_slider").eq(b1).addClass("on");
        $("#header_slider .slider_btn2 a").eq(b1).addClass("on");
    });

    $(".header_smallbox img").hover(function(){
        var b3=$(this).index();

        $(".header_imgbox img").removeClass("on");
        $(".header_imgbox img:nth-child("+(b3+2)+")").addClass("on");
    },function(){
        $(".header_imgbox img").removeClass("on");
        $(".header_imgbox img:nth-child(1)").addClass("on");
    });

    $(".smallimgbox img:nth-child(1)").stop().fadeIn(300);

    var b4=0;
    b5=function(){
        if(b4<3){
            b4++;
        }
         else{
            b4=0;
        }
    
        $(".smallimgbox img").stop().fadeOut(300);
        $(".smallimgbox img:nth-child("+(b4+1)+")").stop().fadeIn(300);
    }
    $(".header_imgbox").hover(function(){ 
        $(".smallcontbox").stop().fadeIn(300);
        b4=0;
        $(".smallimgbox img:nth-child("+(b4+1)+")").stop().fadeIn(300);
        b6=setInterval(b5,1500);
    },function(){
        clearInterval(b6);
        $(".smallcontbox").stop().fadeOut(300);
        $(".smallimgbox img").stop().fadeOut(300);
    });

// ------------------------할인게임 시작------------------

    $(".header_slider2").fadeOut(0);
    $(".header_slider2").eq(0).fadeIn(0);
    $("#header_slider2 .slider_btn2 a").eq(0).addClass("on");

var c=0;
// ---------------------------할인게임 좌우 버튼-----------------------------
    $("#header_sliderbox2 .left").click(function(e){
        e.preventDefault();

        if(c>0){
            c--;
        }
        else{
            c=2;
        }
        $("#header_sliderbox2 .header_slider2").stop().fadeOut(0);
        $("#header_sliderbox2 .header_slider2").stop().eq(c).fadeIn(400);
        $("#header_sliderbox2 .slider_btn2 a").removeClass("on");
        $("#header_sliderbox2 .slider_btn2 a").eq(c).addClass("on");
    });

    $("#header_sliderbox2 .right").click(function(e){
        e.preventDefault();

        if(c<2){
            c++;
        }
        else{
            c=0;
        }
        $("#header_sliderbox2 .header_slider2").stop().fadeOut(0);
        $("#header_sliderbox2 .header_slider2").stop().eq(c).fadeIn(400);
        $("#header_sliderbox2 .slider_btn2 a").removeClass("on");
        $("#header_sliderbox2 .slider_btn2 a").eq(c).addClass("on");
    });

// ------------------------할인게임 밑에 색바-----------------------------------

    $("#header_sliderbox2 .slider_btn2 a").click(function(e){
        e.preventDefault();
        var c1=$(this).index();
        c=c1;
        
        $("#header_sliderbox2 .slider_btn2 a").removeClass("on");
        $("#header_sliderbox2 .slider_btn2 a").eq(c).addClass("on");
        $("#header_sliderbox2 .header_slider2").stop().fadeOut(0);
        $("#header_sliderbox2 .header_slider2").stop().eq(c).fadeIn(400);
    });

// -----------------------------할인게임 호버------------------------------
    var c4=0;
    c3=function(){
        if(c4<3){
            c4++;
        }
        else{
            c4=0;
        }
        $(".slider_float img").stop().fadeOut(300);
        $(".slider_float img:nth-child("+(c4+1)+")").stop().fadeIn(300);
    }
// -----------------------------------1페이지------------------------
    $(".slider2_big_page1").hover(function(){
        var c2=$(this).index();

        $(".slider2_big_page1:nth-child("+(c2+1)+") img").addClass("on");
        $(".slider2_big_page1:nth-child("+(c2+1)+") .slider_float").stop().fadeIn(300);
        
        c4=0;
        $(".slider_float img").stop().fadeOut(0);
        $(".slider_float img:nth-child("+(c4+1)+")").stop().fadeIn(0);
        c5=setInterval(c3,2000);
    },function(){
        $(".slider2_big_page1 img").removeClass("on");

        $(".slider2_big_page1 .slider_float").stop().fadeOut(300);
        clearInterval(c5);
    });

    $(".slider2_small_page1").hover(function(){
        var c2=$(this).index();
        $(".slider2_small_page1:nth-child("+(c2+1)+") img").addClass("on");
        $(".slider2_small_page1:nth-child("+(c2+1)+") .slider_float").stop().fadeIn(300);

        c4=0;
        $(".slider_float img").stop().fadeOut(0);
        $(".slider_float img:nth-child("+(c4+1)+")").stop().fadeIn(0);
        c5=setInterval(c3,2000);
    },function(){
        $(".slider2_small_page1 img").removeClass("on");
        
        $(".slider2_small_page1 .slider_float").stop().fadeOut(300);
        clearInterval(c5);
    });
// ---------------------------------------2페이지-----------------------------
    $(".slider2_big_page2").hover(function(){
        var c2=$(this).index();

        $(".slider2_big_page2:nth-child("+(c2+1)+") img").addClass("on");
        $(".slider2_big_page2:nth-child("+(c2+1)+") .slider_float").stop().fadeIn(300);

        c4=0;
        $(".slider_float img").stop().fadeOut(0);
        $(".slider_float img:nth-child("+(c4+1)+")").stop().fadeIn(0);
        c5=setInterval(c3,2000);
    },function(){
        $(".slider2_big_page2 img").removeClass("on");
        
        $(".slider2_big_page2 .slider_float").stop().fadeOut(300);
        clearInterval(c5);
    });

    $(".slider2_small_page2").hover(function(){
        var c2=$(this).index();

        $(".slider2_small_page2:nth-child("+(c2+1)+") img").addClass("on");
        $(".slider2_small_page2:nth-child("+(c2+1)+") .slider_float").stop().fadeIn(300);

        c4=0;
        $(".slider_float img").stop().fadeOut(0);
        $(".slider_float img:nth-child("+(c4+1)+")").stop().fadeIn(0);
        c5=setInterval(c3,2000);
    },function(){
        $(".slider2_small_page2 img").removeClass("on");
        
        $(".slider2_small_page2 .slider_float").stop().fadeOut(300);
        clearInterval(c5);
    });
// -----------------------------------------3페이지-----------------------------
    $(".slider2_small_page3").hover(function(){
        var c2=$(this).index();

        $(".slider2_small_page3:nth-child("+(c2+1)+") img").addClass("on");
        $(".slider2_small_page3:nth-child("+(c2+1)+") .slider_float").stop().fadeIn(300);

        c4=0;
        $(".slider_float img").stop().fadeOut(0);
        $(".slider_float img:nth-child("+(c4+1)+")").stop().fadeIn(0);
        c5=setInterval(c3,2000);
    },function(){
        $(".slider2_small_page3 img").removeClass("on");
        
        $(".slider2_small_page3 .slider_float").stop().fadeOut(300);
        clearInterval(c5);
    });

// -------------------------------거뮤니티 추천 시작---------------------------

    $(".video_slider").removeClass("on");
    $(".video_slider").eq(0).addClass("on");
    $("#slider3box .slider_btn2 a").eq(0).addClass("on");

// ----------------------------------커뮤니티 추천 좌우버튼------------------------

    var d=0;
    $("#slider3box .left").click(function(e){
        e.preventDefault();

        if(d>0){
            d--;
        }
        else{
            d=2;
        }
        $(".video_slider").removeClass("on");
        $(".video_slider").eq(d).addClass("on");
        $("#slider3box .slider_btn2 a").removeClass("on");
        $("#slider3box .slider_btn2 a").eq(d).addClass("on");
    });

    $("#slider3box .right").click(function(e){
        e.preventDefault();

        if(d<2){
            d++;
        }
        else{
            d=0;
        }
        $(".video_slider").removeClass("on");
        $(".video_slider").eq(d).addClass("on");
        $("#slider3box .slider_btn2 a").removeClass("on");
        $("#slider3box .slider_btn2 a").eq(d).addClass("on");
    });

// ------------------------------커뮤니티 추천 밑의 버튼-------------------------

    $("#slider3box .slider_btn2 a").click(function(e){
        e.preventDefault();

        var d1=$(this).index();

        d=d1;

        $(".video_slider").removeClass("on");
        $(".video_slider").eq(d).addClass("on");
        $("#slider3box .slider_btn2 a").removeClass("on");
        $("#slider3box .slider_btn2 a").eq(d).addClass("on");
    });

// ------------------------------커뮤니티 추천 호버시----------------------------
// ----------------------------float 나오기, 영상 나오기-------------------------
    var d4=0;
    d3=function(){
        if(d4<3){
            d4++;
        }
        else{
            d4=0;
        }
        $("#slider3box .slider_float img").stop().fadeOut(300);
        $("#slider3box .slider_float img:nth-child("+(d4+1)+")").stop().fadeIn(300);
    }
    $(".video_slider").hover(function(){
        $(".video_left a:nth-child(1)").stop().fadeOut(300);
        $(".video_left a:nth-child(2)").stop().fadeIn(300);
        $(".video_slider .slider_float").addClass("on");

        d4=0;
        $("#slider3box .slider_float img").stop().fadeOut(300);
        $("#slider3box .slider_float img").stop().eq(d4).fadeIn(300);
        d5=setInterval(d3,1500);
    },function(){
        $(".video_left a:nth-child(1)").stop().fadeIn(300);
        $(".video_left a:nth-child(2)").stop().fadeOut(300);
        $(".video_slider .slider_float").removeClass("on");

        clearInterval(d5);
    });

    var d2_1=document.getElementById("slider3_video1");
    var d2_2=document.getElementById("slider3_video2");
    var d2_3=document.getElementById("slider3_video3");

    $(".video_slider").eq(0).hover(function(){
        d2_1.play();
    },function(){
        d2_1.pause();
        d2_1.currentTime=0;
    });
    $(".video_slider").eq(1).hover(function(){
        d2_2.play();
    },function(){
        d2_2.pause();
        d2_2.currentTime=0;
    });
    $(".video_slider").eq(2).hover(function(){
        d2_3.play();
    },function(){
        d2_3.pause();
        d2_3.currentTime=0;
    });

// -----------------------------main_cont시작------------------------

    $(".main_contpage").eq(0).addClass("on");
    $("#main_btnbox a").eq(0).addClass("on");
    $("#main_btnbox a").click(function(e){
        e.preventDefault();
        var e1=$(this).index();

        $(".main_option").removeClass("on");
        $("#main_btnbox a").removeClass("on");
        $(".main_contpage").removeClass("on");
        $("#main_btnbox a").eq(e1).addClass("on");
        $(".main_contpage").eq(e1).addClass("on");
    });

    $(".main_cont").click(function(e){
        e.preventDefault();
        var c2=$(this).index();

        if($(".main_cont:nth-child("+(c2+1)+") .main_option").hasClass("on")==false){
        $(".main_option").removeClass("on");
        $(".main_cont:nth-child("+(c2+1)+") .main_option").addClass("on");}
        else if($(".main_cont:nth-child("+(c2+1)+") .main_option").hasClass("on")==true){
            $(".main_option").removeClass("on");
        }
    });

// -----------------------------------aside 메뉴----------------------------------

    $("#aside_btn").click(function(e){
        e.preventDefault();

        if($("#aside_btn a .fas").hasClass("on")==false){
            $("#aside_btn a .fas").addClass("on");
            $("#aside_box").stop().animate({left:"0"},500,"easeInOutBack");
            $("#aside_background").addClass("on");
            
            $("body").css({"overflow":"hidden"});
            $("#wrap").on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
              });
        }
        else if($("#aside_btn a .fas").hasClass("on")==true){
            $("#aside_btn a .fas").removeClass("on");
            $("#aside_box").stop().animate({left:"-100%"},500,"easeInOutBack");
            $("#aside_background").removeClass("on");

            $("body").css({"overflow":"scroll"});
            $("#wrap").off('scroll touchmove mousewheel');
        }
    });
});