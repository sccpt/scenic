var isTouch = Modernizr.touch,
	isMobile = false,//区分移动端与PC端
	mobile = false,//区分手机端与平板
	w_width = 0,
	w_height = 0,
	bannerImgh=638,
	navItem = 0,
	h_height=0,
	roll=0,
	sTop=150,
	produs=0,
	ST = 0;
	
var _mousemove;
var _click;
var _mousedown;
var _mouseup;

//移动端事件和PC事件的切换
if (Modernizr.touch) {
    _mousemove = "touchmove";
    _click = "touchend";
    _mousedown = "touchstart";
    _mouseup = "touchend";
} else {
    _mousemove = "mousemove";
    _click = "click";
    _mousedown = "mousedown";
    _mouseup = "mouseup";
};

function pageBox() {
    w_width = jQuery(window).width();
    w_height = jQuery(window).height();
    
    
	//设置移动端参数
    if (w_width <= 1024) {
        isMobile = true;
    } else if (w_width > 1024) {
        isMobile = false;
    };
	//区分手机端和平板
    if (w_width <= 640) {
        mobile = true;
    } else if (w_width > 640) {
        mobile = false;
    };
    $('.gudesbg').css('height',w_height);
	setImgMax($('.gudesbg img'), 1920, 960, w_width, w_height);
    if(isMobile){
    	$("body").find('.article-block').removeClass('article-block');
	}
}
pageBox();
jQuery(window).resize(function () {
    pageBox();
});

//导航hover
var navhover = {
	init: function() {
		this.sethover();
	},
	sethover: function() {
	    var index1=$(".nav >li.active").index();
        $(".nav >li").hover(function(){
       	   $(this).addClass('active').siblings().removeClass('active');
       	   $(this).find('.levalbox').stop(true,true).slideDown();
        },function(){
           $(".levalbox").stop(true,true).hide();
       	   $(".nav >li").removeClass('active').eq(index1).addClass('active');
        });
        $('.menubtn').on('click', function(e) {
			e.stopPropagation();
			$(this).stop().toggleClass('active');
			$(".menus").hide();
			$(".navigation").slideToggle();
		});
		
		$('.iphone-fix span').click(function(e){
			e.stopPropagation();
			$('.iphone-down').slideToggle();
		});
				
		$(".navlist >li >a").bind("click", function (e) {
			var $navMobile=jQuery(".navigation"),
				$navA=$navMobile.find(".navlist >li >a"),
				$mSubnav=$navMobile.find(".menus");
			var hjcur = $(this);
			var hjDD = $(this).parents("li");
			if (hjDD.find(".menus").size() > 0) {
				if (hjDD.hasClass("on")) {
					$navMobile.slideUp();
					hjDD.find(".menus").stop(false, false).slideUp();
					hjDD.removeClass("on");
					$navMobile.slideUp();
				} else {
					$navA.parents('li').removeClass("on");
					$mSubnav.stop(false, false).slideUp();
					hjDD.find(".menus").stop(false, false).slideDown();
					hjDD.addClass("on");
					e.preventDefault();
				}
			}
		});
	}
};

//友情链接
var relative = {
	init: function() {
		this.reclick();
	},
	reclick: function() {
		$(".friendship span").click(function(){
			$(this).toggleClass('on');
			$(".frienddown").stop().slideToggle();
		});
		$(".friendship").mouseleave(function(){
			$(".friendship span").removeClass('on');
			$(".frienddown").stop().slideUp();
		});
	}
};
//返回顶部
var scolltop = {
	init: function() {
		this.setback();
	},
	setback: function() {
		$(".top").click(function(){
			jQuery("html,body").animate({ scrollTop: 0},800);
		});
	}
};

//header滚动
var scolls = {
	init: function() {
		this.setscoll();
	},
	setscoll: function() {
		var kscrollTop=0;
	    function c(){
		var windowTop = $(window).scrollTop();
		var mtop=$(".mtop").height();
		var nmH=jQuery(".navbox").outerHeight();
			windowTop > mtop ? $(".navbox").addClass("scoll"): $(".navbox").removeClass("scoll");
			if (windowTop > mtop && kscrollTop<=windowTop){
					jQuery(".navbox").stop().animate({top:-nmH},400);
				}else{
					jQuery(".navbox").stop().animate({top:0},400);
				}
				kscrollTop=windowTop;
			}
		$(window).scroll(c),
		c();
	}
};

//内页banner
var scollinner = {
	init: function() {
		this.setscoll();
	},
	setscoll: function() {
		jQuery(window).scroll(function () {
		    var windowTop = jQuery(window).scrollTop();
		    if (!isMobile) {
		        jQuery('.pbanner figure img,.banner .item figure').css('transform', "translate(0px," + (windowTop) / 2 + "px)");
		        
		    };
		});
	}
};

//搜索下拉
var searchs = {
	init: function() {
		this.setsearch();
	},
	setsearch: function() {
		$(".search-btn").click(function(){
			$(".searchs").stop().fadeToggle();
		});
		$(".searchs").mouseleave(function(){
			$(".searchs").stop().slideUp();
		});
	}
};

navhover.sethover();
relative.reclick();
scolltop.setback();
scolls.setscoll();
scollinner.setscoll();
searchs.setsearch();

jQuery(window).load(function(){
    jQuery('.article-block').delay(300).scrollClass();
});

(function(jQuery){
    $.fn.scrollClass = function(config){
        var defaults = {};
        var config = jQuery.extend(defaults, config);
        var target = this;

        function addAction(){
            var length = target.length;
            for(var i=0; i<length; i++){
                if(target.eq(i).hasClass('articleShow')) continue;
                
                var in_position = target.eq(i).offset().top + 100;
                var window_bottom_position = jQuery(window).scrollTop() + jQuery(window).height();
                if(in_position < window_bottom_position){
                    target.eq(i).addClass('articleShow');
                }
            }
        }
        addAction();

        jQuery(window).on('scroll', function(){
            addAction();
        });
        return target;
    };
} )(jQuery);

setPopUp($('.weix'), "微信公众号");
function setPopUp(obj, title) {
	obj.click(function () {
		var str = '<div class="popUpblack"><div class="popUp"><div class="t">' + title + '<span class="close">关闭</span></div><div class="img"><img src="' + obj.attr("href") + '"/></div></div></div>';
	$("body").append(str);
	jQuery(".popUpblack").fadeIn();
	jQuery(".popUp").animate({marginTop:"-127"},400);
	$(".popUp .close").click(function () {
		$(".popUpblack").remove();
	});
	jQuery(".popUpblack").click(function(){$(".popUpblack").remove();});
		return false;
	});
};

function setImgMax(img, imgW, imgH, tW, tH) {
	var tWidth = tW || w_width;
	var tHeight = tH || w_height;
	var coe = imgH / imgW;
	var coe2 = tHeight / tWidth;
	if (coe < coe2) {
		var imgWidth = tHeight / coe;
		img.css({ height: tHeight, width: imgWidth, left: -(imgWidth - tWidth) / 2, top: 0 });
	} else {
		var imgHeight = tWidth * coe;
		img.css({ height: imgHeight, width: tWidth, left: 0, top: -(imgHeight - tHeight) / 2 });
	};
	
};