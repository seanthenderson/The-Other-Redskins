$(document).ready(function(){
            	$(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.15) && y < (h*0.17) ){
                        $("#background").fadeIn("fast");
                        }
                        else {
                            $('#background').fadeOut("fast");
                        }
                });           
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.172) && y < (h*0.20) ){
                        $("#press-releases").fadeIn("fast");
                        $("#background-text").show();
                        $("#background-text2").hide();
                        $("#background-text3").hide();
                        }
                        else {
                            $('#press-releases').fadeOut("fast");
                        }
                });
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.201) && y < (h*0.24) ){
                        $("#fourteen-schools").fadeIn("fast");
                        }
                        else {
                            $("#fourteen-schools").fadeOut("fast");
                        }
                });
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.241) && y < (h*0.28) ){
                        $("#fourteen-schools-2").fadeIn("fast");
                        }
                        else {
                            $('#fourteen-schools-2').fadeOut("fast");
                        }
                });
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.31) && y < (h*0.35) ){
                        $("#video").fadeIn("fast");
                        }
                        else {
                            $("#video").fadeOut("fast");
                        }
                });
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.39) && y < (h*0.44) ){
                        $("#redmesa").fadeIn("fast");
                        }
                        else {
                            $("#redmesa").fadeOut("fast");
                        }
                });
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.46) && y < (h*0.475) ){
                        $("#chart").fadeIn("fast");
                        }
                        else {
                            $('#chart').fadeOut("fast");
                        }
                }); 
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.477) && y < (h*0.49) ){
                        $("#indiancreek").fadeIn("fast");
                        }
                        else {
                            $('#indiancreek').fadeOut("fast");
                        }
                });
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.491) && y < (h*0.505) ){
                        $("#ringgold").fadeIn("fast");
                        }
                        else {
                            $('#ringgold').fadeOut("fast");
                        }
                }); 
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.575) && y < (h*0.62) ){
                        $("#michigan-schools").fadeIn("fast");
                        }
                        else {
                            $("#michigan-schools").fadeOut("fast");
                        }
                }); 
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.665) && y < (h*0.725) ){
                        $("#porttownsend").fadeIn("fast");
                        }
                        else {
                            $("#porttownsend").fadeOut("fast");
                        }
                }); 
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.745) && y < (h*0.78) ){
                        $("#cooperstown").fadeIn("fast");
                        }
                        else {
                            $('#cooperstown').fadeOut("fast");
                        }
                });  
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.80) && y < (h*0.84) ){
                        $("#sanford").fadeIn("fast");
                        }
                        else {
                            $("#sanford").fadeOut("fast");
                        }
                });
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*0.86) && y < (h*0.885) ){
                        $("#wiscasset").fadeIn("fast");
                        }
                        else {
                            $('#wiscasset').fadeOut("fast");
                        }
                });   
                $(window).scroll(function(){
                    // get the height of #wrap
                    var h = $('#story-wrap').height();
                    var y = $(window).scrollTop();
                    if( y > (h*1.00) && y < (h*1.05) ){
                        // if we are show keyboardTips
                        $("#nerdbox").fadeIn("fast");
                        }
                        else {
                            $('#nerdbox').fadeOut("fast");
                        }
                });
                //========= S W I T C H - M A P ==========
                if (navigator.userAgent.match(/Macintosh/)) {
                	$("#map").css({'margin-top': 20, 'visibility': 'visible', 'opacity': 1.0});
                } else {
                	$("#map").css({'margin-top': 16, 'margin-bottom': -46, 'visibility': 'visible', 'opacity': 1.0});
                }
                $("#map1-button").click(function(){
                	if (navigator.userAgent.match(/Macintosh/)) {
                		$("#map").css({'margin-top': 20, 'visibility': 'visible', 'opacity': 1.0});
                	} else {
                		$("#map").css({'margin-top': 16, 'margin-bottom': -46, 'visibility': 'visible', 'opacity': 1.0});
                		$("#refresh").show();
                		$("#refresh2").hide();
                	}
                	$("#map2").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});
                	$("#td1").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});
                	$("#td2").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});
                	              	
                });  
                $("#map2-button").click(function(){
                	if (navigator.userAgent.match(/Macintosh/)) {
                		$("#map2").css({'margin-top': 2, 'visibility': 'visible', 'opacity': 1.0});
                	} else {
                		$("#map2").css({'margin-top': -4, 'margin-bottom': -26, 'visibility': 'visible', 'opacity': 1.0});
                		$("#refresh").hide();
                	$("#refresh2").show();
                	}
                	$("#map").css({'margin-top': -1500, 'visibility': 'hidden', 'opacity': 0.0});
                	$("#td1").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});
                	$("#td2").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});	
                });
                $("#td1-button").click(function(){
                	$("#map").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});
                	$("#map2").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});
                	$("#td1").css({'margin-top': -30, 'visibility': 'visible', 'opacity': 1.0});
                	$("#td2").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});
                	$("#refresh").hide();
                	$("#refresh2").hide();
                });
                $("#td2-button").click(function(){
                	$("#map").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});
                	$("#map2").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});
                	$("#td1").css({'margin-top': -1420, 'visibility': 'hidden', 'opacity': 0.0});
                	$("#td2").css({'margin-top': -48, 'visibility': 'visible', 'opacity': 1.0});
                	$("#refresh").hide();
                	$("#refresh2").hide();
                });  
                //========= M A P - B U T T O N S ========== 
                $("#map-explain").show();
				$("#map-explain2").hide();
				$("#table-explain").hide();
				$("#table-explain2").hide();
				$("#map1-button").css({'opacity': 1.0});
                $("#map1-button").click(function(){
                	$("#map1-button").css({'opacity': 1.0});
                	$("#map2-button").css({'opacity': 0.7});
                	$("#td1-button").css({'opacity': 0.7});
                	$("#td2-button").css({'opacity': 0.7});
                	$("#map-explain").show();
                	$("#map-explain2").hide();
                	$("#table-explain").hide();
                	$("#table-explain2").hide();

                }); 
                $("#map2-button").click(function(){
                	$("#map1-button").css({'opacity': 0.7});
                	$("#map2-button").css({'opacity': 1.0});
                	$("#td1-button").css({'opacity': 0.7});
                	$("#td2-button").css({'opacity': 0.7});
                	$("#map-explain").hide();
                	$("#map-explain2").show();
                	$("#table-explain").hide();
                	$("#table-explain2").hide();
                });
                $("#td1-button").click(function(){
                	$("#map1-button").css({'opacity': 0.7});
                	$("#map2-button").css({'opacity': 0.7});
                	$("#td1-button").css({'opacity': 1.0});
                	$("#td2-button").css({'opacity': 0.7});
                	$("#map-explain").hide();
                	$("#map-explain2").hide();
                	$("#table-explain").show();
                	$("#table-explain2").hide();
                });
                $("#td2-button").click(function(){
                	$("#map1-button").css({'opacity': 0.7});
                	$("#map2-button").css({'opacity': 0.7});
                	$("#td1-button").css({'opacity': 0.7});
                	$("#td2-button").css({'opacity': 1.0});
                	$("#map-explain").hide();
                	$("#map-explain2").hide();
                	$("#table-explain").hide();
                	$("#table-explain2").show();
                });        
            })
            //========= B A C K G R O U N D - P O P U P - S W I T C H ==========
			$(document).ready(function() {           
        		$("#switch-popup").click(function() {
        			$("#background-text").hide();
        			$("#background-text2").show();
        		});
        		$("#switch-popup2").click(function() {
        			$("#background-text2").hide();
        			$("#background-text3").show();
        		});
        	});
            //============ F O R - M O B I L E - D E V I C E S =============
			/*if ( $(window).width() < 1054) {
   				$(function(){
   					$("#map1-button").click(function() {
   						$("#apples-map").show();
   						$("#apples-map-2").hide();
   						$("#td1").hide();
   						$("#td2").hide();
   					});
   					$("#map2-button").click(function() {
   						$("#apples-map").hide();
   						$("#apples-map-2").show();
   						$("#td1").hide();
   						$("#td2").hide();
   					});
   					$("#td1-button").click(function() {
   						$("#apples-map").hide();
   						$("#apples-map-2").hide();
   						$("#td1").show();
   						$("#td2").hide();
   					});
   					$("#td2-button").click(function() {
   						$("#apples-map").hide();
   						$("#apples-map-2").hide();
   						$("#td1").hide();
   						$("#td2").show();
   					});
   					$("#refresh").hide();
   				});
			}
			else {
   				//alert('More than 960');
			}*/
			//============ Z O O M - F O R - W I N D O W S =============
			
			function refreshIframe() {
    			var ifr = document.getElementsByName('refresh')[0];
   				ifr.src = ifr.src;
			}
			
			function refreshIframe2() {
    			var ifr = document.getElementsByName('refresh2')[0];
   				ifr.src = ifr.src;
			}