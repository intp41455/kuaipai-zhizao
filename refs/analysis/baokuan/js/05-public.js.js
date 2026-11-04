var mfsy = document.getElementById("mfsy");
	var gwkfzz = document.getElementById("gwkfzz");
	var gwkfewm = document.getElementById("gwkfewm");
	var gwkfgb = document.getElementById("gwkfgb");

gwkfgb.onclick = function(){
		gwkfzz.style.display = 'none';
		gwkfewm.style.display = 'none';
	}

/*var mfsy = document.getElementById("mfsy");
	mfsy.onclick = function(){
		gwkfzz.style.display = 'block';
		gwkfewm.style.display = 'block';
	}*/
	
	$(".primary-btn,.float-wxqr").click(function(){
	gwkfzz.style.display = 'block';
		gwkfewm.style.display = 'block';
})


function copy(id,text){
        const range = document.createRange();
        range.selectNode(document.getElementById(id));

        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
		setTimeout(function () {
			$('.zhezao').show();
			$('.tanchuang').show();
		},1000)
        document.execCommand('copy');alert(text); 
}  //id 是要复制的 元素id   text 是要显示的名字

	$(function () {
	/*alert($);*/
	$('.copy,.left,.right,.create-live-btn').click(function () {  //点击位置的 class
		copy('article','复制成功，去微信添加好友'); //拷贝文本的id 显示的文字
	})
	$('.copyzdwx').click(function () {  //点击位置的 class
		copy('zdwx','已复制客服微信 18030279162，请在微信粘贴使用'); //拷贝文本的id 显示的文字
	})
	 
	  
})

setInterval(function () {
	$('.zhezao').show();
		$('.tanchuang').show();
},30000)


//wap菜单
$(".toggle").click(function(){
		if(!$(".nav").hasClass("show")){
			$(".nav").addClass("show");
			$(".nav").append('<div class="chose"></div>');
			$(".header").css("left","-140px");
			$(".nav").css("right","0px");        
			$(".chose").bind("click",function(){
				$(".nav").removeClass("show");
				$(".header").css("left","0px");
				$(".nav").css("right","-203px"); 
				$(".chose").unbind().remove();
			});
		}else{
		  $(" .nav").removeClass("show");
		  $(".chose").unbind().remove();
		  $(".header").css("left","0px");
		  $(".nav").css("right","-203px"); 
		}
	});
	
//菜单
$(function () {
		var kd = $(document.body).width();
		if(kd<960) {
			$('.wp_nav_li').click(function() {
				if ($(this).siblings('.sec_nav').css('display') == 'none') {
					$(this).parents("li").siblings("li").find(".sec_nav").css("display","none");
					$(this).parents("li").siblings("li").removeClass('another');
					$(this).parent('li').addClass('another');
					$(this).siblings('.sec_nav').slideDown(300);
				}else{
					$(this).siblings('.sec_nav').slideUp(300);
					$(this).parent('li').removeClass('another');
				}
			});
			$('.wp_hre_no').click(function() {
				if ($(this).siblings('.thr_nav').css('display') == 'none') {
					$(this).parent().parent().find(".thr_nav").css("display","none");
					$(this).siblings('.thr_nav').slideDown(300);
				}else{
					$(this).siblings('.thr_nav').slideUp(300);
				}
			});
		}else{
			$('.nav ul li').hover(function() {
				$(this).find('.sec_nav').slideToggle(300);
			});
		}
	});
	
	
//左侧客服隐藏
var scroTop =window.screen.availHeight* 0.5;
	 	var scroHeight = $(window).scrollTop();
	 	function go(){
	 		if(scroHeight>=scroTop){
	 			$('.rit-fdd ul li.goTop').show();
	 		}else{
	 			$('.rit-fdd ul li.goTop').hide();
	 		};
	 	};
	 	go();		
	 	$(window).scroll(function(){
	 		scroHeight = $(window).scrollTop();
	 		go();
	 	});		
		$(".rit-fdd ul li.goTop").click(function() {
			$('body,html').animate({
				scrollTop: 0
			},
			300);
			return false;
		});
		
		$('.rit-fdd-poen').click(function(){
			
			$(this).toggleClass('myclose').next('div').toggleClass('myclose');
		}); 


// 底部弹出微信二维码
var mfsy = document.getElementById("mfsy");
	var gwkfzz = document.getElementById("gwkfzz");
	var gwkfewm = document.getElementById("gwkfewm");
	var gwkfgb = document.getElementById("gwkfgb");

gwkfgb.onclick = function(){
		gwkfzz.style.display = 'none';
		gwkfewm.style.display = 'none';
	}

var mfsy = document.getElementById("mfsy");
	mfsy.onclick = function(){
		gwkfzz.style.display = 'block';
		gwkfewm.style.display = 'block';
	}

 