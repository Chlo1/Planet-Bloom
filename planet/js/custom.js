$(document).ready(function() {

	// fullpage plugin initialization
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
		menu: '#js-menu',
		autoScrolling: false,
		fitToSection: false,
		scrollingSpeed: 1200
	});

	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header-scrolling");
		}
		else{
			$header.removeClass("header-scrolling")
		}
	})

	// rellax initialization
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}
		

	// carousel plugin initialization
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:16,
	    nav:true,
	    navText:[],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        1200:{
	            items:4
	        }
	    }
	})

	

	$("form").on("submit", function (evt) {
		evt.preventDefault();
	  
		var formData = $(this).serialize(); // 收集表單資料
		console.log("Submitting data:", formData);
	  
		// 模擬回應
		setTimeout(function () {
		  alert("訂閱成功！已收到您的訂閱資料！");
		}, 1000);
	});
	window.addEventListener('scroll', function() {
		const scrolled = window.scrollY;
		
		// 取得視差容器內的圖片
		const mainImage = document.querySelector('.pic_main');
		const frontImage = document.querySelector('.pic_front');
		
		
		// 設定不同移動速度
		mainImage.style.transform = `translateY(${scrolled * 0.1}px)`;
		frontImage.style.transform = `translateY(${scrolled * 0.2}px)`; 
		

	  });

	  var percent = 0
	  var timer = setInterval(function(){
		$(".bar").css("width", percent + "%")
		percent+=1
		if (percent>100){
		  // 把Loading頁面關掉，新增一個class
		  // 載入完，pageLoading消失
		  $(".pageLoading").addClass("complete")
		  clearInterval(timer)
		}
	  },30)
	
});

