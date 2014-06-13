"use strict";

jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	$(".main_menu a, .responsive_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		$("#menu-container .homepage").hide();
		$(".support").hide();
		$(".testimonials").hide();
		return false;
	});

//	$( window ).load(function() {
//	  $("#menu-container .blog").hide();
//	});


	$(".main_menu a.github_home, .responsive_menu a.github_home").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.github_page2, .responsive_menu a.github_page2").removeClass('active');
		$(".main_menu a.github_page3, .responsive_menu a.github_page3").removeClass('active');
		$(".main_menu a.github_page4, .responsive_menu a.github_page4").removeClass('active');
		$(".main_menu a.github_page5, .responsive_menu a.github_page5").removeClass('active');
		return false;
	});

	$(".main_menu a.github_page2, .responsive_menu a.github_page2").click(function(){
		$("#menu-container .blog").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.github_home, .responsive_menu a.github_home").removeClass('active');
		$(".main_menu a.github_page3, .responsive_menu a.github_page3").removeClass('active');
		$(".main_menu a.github_page4, .responsive_menu a.github_page4").removeClass('active');
		$(".main_menu a.github_page5, .responsive_menu a.github_page5").removeClass('active');
		return false;
	});

	$(".main_menu a.github_page3, .responsive_menu a.github_page3").click(function(){
		$("#menu-container .services").addClass("animated fadeInDown").show();
		$(".our-services").show();
		$(this).addClass('active');
		$(".main_menu a.github_page2, .responsive_menu a.github_page2").removeClass('active');
		$(".main_menu a.github_home, .responsive_menu a.github_home").removeClass('active');
		$(".main_menu a.github_page4, .responsive_menu a.github_page4").removeClass('active');
		$(".main_menu a.github_page5, .responsive_menu a.github_page5").removeClass('active');
		return false;
	});

	$(".main_menu a.github_page4, .responsive_menu a.github_page4").click(function(){
		$("#menu-container .about").addClass("animated fadeInDown").show();
		$(".our-services").show();
		$(this).addClass('active');
		$(".main_menu a.github_page2, .responsive_menu a.github_page2").removeClass('active');
		$(".main_menu a.github_page3, .responsive_menu a.github_page3").removeClass('active');
		$(".main_menu a.github_home, .responsive_menu a.github_home").removeClass('active');
		$(".main_menu a.github_page5, .responsive_menu a.github_page5").removeClass('active');
		return false;
	});

	$(".main_menu a.github_page5, .responsive_menu a.github_page5").click(function(){
		$("#menu-container .contact").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.github_page2, .responsive_menu a.github_page2").removeClass('active');
		$(".main_menu a.github_page3, .responsive_menu a.github_page3").removeClass('active');
		$(".main_menu a.github_page4, .responsive_menu a.github_page4").removeClass('active');
		$(".main_menu a.github_home, .responsive_menu a.github_home").removeClass('active');
		
		loadScript();
		return false;
	});


	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	 /************** nav首页默认选中 *********************/
	$(".main_menu a.home").addClass('active');

    /************** 响应式nav菜单，点击菜单时弹出 *********************/
	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});

    /************** 响应式nav菜单，弹出状态下点连接，收起 *********************/
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});


});


//function loadScript() {
//  var script = document.createElement('script');
//  script.type = 'text/javascript';
//  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
//      'callback=initialize';
//  document.body.appendChild(script);
//}
//
//function initialize() {
//    var mapOptions = {
//      zoom: 12,
//      center: new google.maps.LatLng(16.8251789,96.1439764)
//    };
//    var map = new google.maps.Map(document.getElementById('github_map'),  mapOptions);
//}