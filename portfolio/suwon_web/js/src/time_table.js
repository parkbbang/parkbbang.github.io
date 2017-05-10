(function($){
	
	var timed = 500;
	var timeBox = $('.time_box');
	var timeLast = timeBox.children('li:last');
	
	timeBox.prepend(timeLast);
	timeBox.css({marginTop:'-160px'});
	var ubtn = $('.ubtn');
	ubtn.on('click', function(e){
		e.preventDefault();
		
		var timeLast = timeBox.children('li:last');
		timeBox.stop().animate({marginTop:0},timed,function(){
		timeBox.prepend(timeLast);
		timeBox.css({marginTop:'-160px'});
		});
	});
	
	var dbtn = $('.dbtn');
	
	dbtn.on('click', function(e){
		e.preventDefault();
		
		var timeFirst = timeBox.children('li:first');
		timeBox.stop().animate({marginTop:'-320px'},timed,function(){
			timeBox.append(timeFirst);
			timeBox.css({marginTop:'-160px'});
		});
	});
	
})(this.jQuery);