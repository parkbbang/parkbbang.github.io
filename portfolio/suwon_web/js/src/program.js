(function($){
            
  var timed = 1000;
	var info = $('.program_info');
	var programBox = $('.program_box');
	var programLast = programBox.children('ul:last');
	programBox.prepend(programLast);
  programBox.css({marginLeft:'-100%'});
	var lbtn = $('.lbtn');
	var rbtn = $('.rbtn');
	
	lbtn.on('click', function(e){
		e.preventDefault();
		
		var programLast = programBox.children('ul:last');
		
		programBox.stop().animate({marginLeft:0},timed, function(){
			programBox.prepend(programLast);
			programBox.css({marginLeft:'-100%'});
		});
		
	});
	
		
	var rotateAni = function(){
		
		var programFirst = programBox.children('ul').first();
	
	 	programBox.stop().animate({marginLeft:'-200%'},timed, function(){
			programBox.append(programFirst);
			programBox.css({marginLeft:'-100%'});
		});
	};
	
	rbtn.on('click', rotateAni);
	
	var play;
	
	var auto = function(){
		play = setInterval(rotateAni, timed*3);
	};
	
	auto();
	
	var clear = function(){
		clearInterval(play);
	}
	
	info.on({mouseenter:clear, mouseleave:auto});
	
	
})(this.jQuery);