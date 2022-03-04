  
  $(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
      effect:'fade',
      loop:true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


    $(window).scroll(function(){
        var winTop=$(this).scrollTop();
        console.log(winTop);
        var scroll1=$('section.s2').offset().top-600;
        var scroll2=$('section.s3').offset().top-600;
        var scroll3=$('section.s4').offset().top-600;
        var scroll4=$('section.s5').offset().top-600;
        var scroll5=$('section.s6').offset().top-600;
        var scroll6=$('section.s7').offset().top-600;
        var scroll7=$('section.s8').offset().top-600;
        var scroll8=$('section.s9').offset().top-600;
        var scroll9=$('section.s10').offset().top-600;
        var scroll10=$('section.s11').offset().top-600;
        var scroll11=$('section.s12').offset().top-600;
        var scroll12=$('section.s13').offset().top-600;
        var scroll13=$('section.s14').offset().top-600;
        var scroll14=$('section.s15').offset().top-600;
        var scroll15=$('section.s16').offset().top-600;
        var scroll16=$('section.s17').offset().top-600;


         // 만약 .s2영역이 보이면,&&(그리고라는 뜻의 논리 연산자)조건 2개 모두 true일 때 실행
        if(scroll1<winTop && winTop<scroll2){
        $('section.s2').addClass('active');
        }
        if(scroll2<winTop && winTop<scroll3){
          $('section.s3').addClass('active');
        }
        if(scroll3<winTop && winTop<scroll4){
            $('section.s4').addClass('active');
        }
        if(scroll4<winTop && winTop<scroll5){
            $('section.s5').addClass('active');
        }
        if(scroll5<winTop && winTop<scroll6){
            $('section.s6').addClass('active');
        }
        if(scroll6<winTop && winTop<scroll7){
            $('section.s7').addClass('active');
        }
        if(scroll7<winTop && winTop<scroll8){
            $('section.s8').addClass('active');
        }
        if(scroll8<winTop && winTop<scroll9){
            $('section.s9').addClass('active');
        }
        if(scroll9<winTop && winTop<scroll10){
            $('section.s10').addClass('active');
        }
        if(scroll10<winTop && winTop<scroll11){
            $('section.s11').addClass('active');
        }
        if(scroll11<winTop && winTop<scroll12){
            $('section.s12').addClass('active');
        }
        if(scroll12<winTop && winTop<scroll13){
            $('section.s13').addClass('active');
        }
        if(scroll13<winTop && winTop<scroll14){
            $('section.s14').addClass('active');
        }
        if(scroll14<winTop && winTop<scroll15){
            $('section.s15').addClass('active');
        }
        if(scroll15<winTop && winTop<scroll16){
            $('section.s16').addClass('active');
        }
        if(scroll16<winTop){
            $('section.s17').addClass('active');
        }

      });
        // 화면이 스크롤되어서 첫번째 section이 자나가면 header에 active 설정
        $(window).scroll(function(){
        // 윈도우의 scrolltOP값을 TOP변수에 저장
        var top=$(this).scrollTop();
        // 만약 top변수의 값이 0보다 작으면 header에 ACTIVE설정
        if(top>0){
            $('header').addClass('active');
        // top변수의 값이 0보다 작거니 깉으면 header에서 acive 제거
        }else{
            $('header').removeClass('active');
        }
    });
       // top버튼
        $('.top').click(function(){
            $('html,body').animate({'scrollTop':0});
        });
        // 모바일버전
        // $(".s7_m_wrap>div").slice(0, 8).show(); // select the first ten
        // $("#load").click(function(e){ // click event for load more
        //     e.preventDefault();
        //     $(".s7_m_wrap>div:hidden").slice(0, 8).show(); // select next 10 hidden divs and show them
        //     if($(".s7_m_wrap>div:hidden").length == 0){ // check if any hidden divs still exist
        //        //alert("No more divs");   alert if there are none left
        //        $(".s7_m_wrap>a").fadeOut();
        //     }
        // });

        // $(".s7_m_wrap>.s7_btn").click(function(){
        //     $(".s8_ft").animate({
        //       top:'100vw'
        //     });
        //   });


   
        //  네이버카톡버튼
          $(window).scroll(function (){
            var sh=$('.s1').height();
            var wh=$(window).scrollTop();
            if(wh > sh){
                $('.naver_talk').addClass('active'); 
            }else{
                $('.naver_talk').removeClass('active');  
            }
          });//window scroll event
        // 카카오톡태널
        // $(window).scroll(function (){
        //   var sh=$('.s1').height();
        //   var wh=$(window).scrollTop();
        //   if(wh > sh){
        //       $('.chanel').addClass('active'); 
        //   }else{
        //       $('.chanel').removeClass('active');  
        //   }
        // });
        // 타이핑 문자
        var typingBool = false; 
        var typingIdx=0; 
        var liIndex = 0;
        var liLength = $(".typing-txt>ul>li").length;
        
        // 타이핑될 텍스트를 가져온다 
        var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
        //liIndex 인덱스로 구분해 한줄씩 가져옴
        
        typingTxt=typingTxt.split(""); // 한글자씩 잘라 배열로만든다
        
        if(typingBool==false){ // 타이핑이 진행되지 않았다면 
            typingBool=true; 
            var tyInt = setInterval(typing,100); // 반복동작 
        } 
             
        function typing(){ 
          $(".typing ul li").removeClass("on");
           $(".typing ul li").eq(liIndex).addClass("on");
          //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
          
          if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
             $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
             typingIdx++; 
           } else{ //한문장이끝나면
             if(liIndex<liLength-1){
             //다음문장으로  가기위해 인덱스를 1증가
               liIndex++; 
             //다음문장을 타이핑하기위한 셋팅
                typingIdx=0;
                typingBool = false; 
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
               
             //다음문장 타이핑전 1초 쉰다
                 clearInterval(tyInt);
                  //타이핑종료
             
                 setTimeout(function(){
                   //1초후에 다시 타이핑 반복 시작
                 tyInt = setInterval(typing,100);
                 },1000);
                } else if(liIndex==liLength-1){
                  
                 //마지막 문장까지 써지면 반복종료
                   clearInterval(tyInt);
                  
                  //1초후
                  setTimeout(function(){
                    //사용했던 변수 초기화
                    typingBool = false; 
                  liIndex=0;
                  typingIdx=-0;
                    
                    //첫번째 문장으로 셋팅
                  typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
                       //타이핑 결과 모두 지우기
                  $(".typing ul li").html("")
                    
                    //반복시작
                    tyInt = setInterval(typing,100);
                  }, 1000);
                }
            } 
        }  

  });