jQuery(function(){
	function initBox() {
		w_width = jQuery(window).width();
        w_height = jQuery(window).height();
        
        var top=$(".mtop").height();
		$('.banner').css('height',w_height-top);
		$('.banner .item,.banner .item figure').css('height',w_height-top);
		setImgMax($('.banner .item figure img'), 1920, 889, w_width, w_height-top);
		if(!isMobile){
		}else{
		}
    };
    initBox();
    jQuery(window).resize(function () {
        initBox();
    });
    
    $('.banner').on('init', function(event, slick, currentSlide, nextSlide) {
        $(".banner .item").first().removeClass("slick-current");
		setTimeout(function(){
			$(".banner .item").first().addClass("slick-current");
		},100);
   });
    $(".banner").slick({
		centerPadding: '0',
		autoplaySpeed:5000,
		speed:2000,
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true,
		fade:true,
		pauseOnHover:false,
		focusOnSelect: true,
	});
    $(".newsbann").slick({
		centerPadding: '0',
		autoplaySpeed:5000,
		speed:1500,
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true,
		fade:true,
		pauseOnHover:false,
		focusOnSelect: true,
	});
	$(".project__list").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: false,
        autoplay: true,
        focusOnSelect: true,
        responsive: [
		{
		  breakpoint: 750,
		  settings: {
			arrows: true,
            dots: false,
			speed:800,
			autoplay:true,
			slidesToShow:2,
			slidesToScroll: 1,
			infinite: true,
		  }
		},
	  ]
	});
	var Video = {
		load: function (objs) {
			var objplay = jwplayer(objs.vcontainer).setup({
				flashplayer: 'js/video/flashplay.swf',
				html5player: 'js/video/html5player.js',
				file: objs.vfiles,
				image: objs.vfimg,
				width: '100%',
				height:'100%',
				aspectratio:'16:9',
				stretching:'fill',
				controls: 'true',
				autostart: objs.isautoplay
			});
			return objplay;
		}
	}
	jQuery(function () { 
		jQuery('.video__btn1').click(function () { 
			Video.load({
			vcontainer: 'videobox',  //视频容器
			vfimg:  jQuery(this).attr("data-video-image"),//视频地址
			vfiles: jQuery(this).attr("data-video-url"), //视频缩略图(封面)
			isautoplay: 'true'
			});
			jQuery(".vwrap").fadeIn();
		});
		jQuery(".vwrap .close,.vwrap .videobtg").click(function () {
			jQuery(".vwrap").hide();
			$('#videobox').html("");
		});
	});
});