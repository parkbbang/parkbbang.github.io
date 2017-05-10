(function($){
	var nav = $('.enjoy_nav');
	var btn = nav.children('div');
	var enjoy = btn.find('a');
	var p = enjoy.children('p');
	var on = $('.onclick');
	var btnin = btn.index();
	var box = $('.enjoy_box').find('ul');
	
		btn.eq(0).css({backgroundColor:'#faf4de'});
		btn.eq(0).addClass('onclick');
		btn.eq(0).find('a').find('p').css({color:'#162345'});
	
	btn.on('click', function(e){
		e.preventDefault();
		
		var $this = $(this);
		var thisIndex = $this.index();
		
		console.log(thisIndex);
	
		
		btn.removeClass('onclick');
		btn.css({backgroundColor:'#162345'});	
		p.css({color:'#faf4de'});	
		
		
		btn.eq(thisIndex).addClass('onclick',500);
		btn.eq(thisIndex).animate({backgroundColor:'#faf4de'},300);
		btn.eq(thisIndex).find('a').find('p').css({color:'#162345'});
		
		box.stop().stop().animate({marginLeft:(-760 * thisIndex ) + 'px'},500);
		
	});
	
	
})(this.jQuery);