/*main.js*/

$(document).ready(function(){
    /* 주메뉴 */
    $("nav>ul>li>a").bind("mouseover focus",function(){
        var ht = $(this).next().height();

        $(".header_wrap").stop().animate({"height":70+ht},500,"linear");
            
        $("nav>ul>li>div").css("display","none");
        $(this).next().css("display","block");
    });

    $("nav").bind("mouseleave blur",function(){
        $(".header_wrap").stop().animate({"height":"70px"},300,"linear");
        $("nav>ul>li>div").css({"display":"none"});
    });

    /* 검색버튼 */
    $(".btn_srch").click(function(){
        $("div.srch_wrap").css({"display":"block"});
    });

    $(".btn_srch_close").click(function(){
        $("div.srch_wrap").css({"display":"none"});
    });
    
    /*오토배너*/
    videonum = 0;
    slidelastnum = $(".slide_wrap li").length;
    console.log(slidelastnum);

    // next 버튼
    $(".btn_next").click(function(){
        videonum++;
        if(videonum >= slidelastnum){videonum=0;}

        $(".slide").removeClass("active");
        $(".slide").eq(videonum).addClass("active");
        
        $(".slide_roll>ul>li").children().css("background","#ccc");
        $(".slide_roll>ul>li").eq(videonum).children().css("background","#fff");

    });

    // prev 버튼
    $(".btn_prev").click(function(){
        videonum--;
        if(videonum < 0){videonum=slidelastnum-1;}

        $(".slide").removeClass("active");
        $(".slide").eq(videonum).addClass("active");
        
        $(".slide_roll>ul>li").children().css("background","#ccc");
        $(".slide_roll>ul>li").eq(videonum).children().css("background","#fff");

    });

    // 오토배너
    function autoBanner(){
        // next버튼 눌렀을때
        videonum++;
        if(videonum >= slidelastnum){videonum=0;}

        $(".slide").removeClass("active");
        $(".slide").eq(videonum).addClass("active");
        
        $(".slide_roll>ul>li").children().css("background","#ccc");
        $(".slide_roll>ul>li").eq(videonum).children().css("background","#fff");
    }
    var $autoBnn = setInterval(autoBanner,5000); //5초 뒤에 함수호출(반복)


    //배너 재생 멈춤 버튼
    var flag=true;
    $("a.btn_play").click(function(){
        if(flag){
            //오토배너가 멈춰라
            clearInterval($autoBnn);
            // 이미지 바꾸는 것
            $(this).addClass("on");
            flag=false; 
        }else{
            //오토배너가 멈춰라
            $autoBnn = setInterval(autoBanner,5000);
            // 이미지 바꾸는 것
            $(this).removeClass("on");
            flag=true;
        }
    });

    //롤링 버튼 클릭
    $(".slide_roll ul li a").click(function(){
        var rollNum = $(this).parent().index();
        console.log(rollNum);

        $(".slide").removeClass("active");
        $(".slide").eq(rollNum).addClass("active");

        $(".slide_roll>ul>li").removeClass("on");
        $(".slide_roll>ul>li").eq(rollNum).addClass("on");
    });

    /* top 버튼 */
    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        console.log(scroll);

        if(scroll < 100){
            $(".btn_top").stop().animate({"opacity":"0"},200,"linear");
            $("#header").css({"display":"block"});
        }

        if(scroll >= 100 && scroll < 2500){
            $(".btn_top").stop().animate({"opacity":"1"},200,"linear");
            $("#header").css({"display":"none"});
        }

        if(scroll >= 2500){
            $(".btn_top").css({"bottom":(scroll-2500)+120});
        }
    });

    // 버튼 클릭
    $(".btn_top").click(function(){
        $("html,body").stop().animate({"scrollTop":0},1400,"swing")
    });



});

