var kortit=new Array('sininen','sininen','punainen','punainen','vihrea','vihrea', 'oranssi','oranssi', 'violetti','violetti', 'ruskea','ruskea');
var ekaKortti='';
//counter
var arvauksia=0;

$(document).ready(function(){
	$('#aloita').click(function(e) {
		//SHUFFLE 
		kortit.sort(function() { return 0.5 - Math.random() });
		//counter nollaaminen
		arvauksia=0;
		$("#arvauksia").html(0);
		$('#pelialue').empty();
		$.each(kortit, function(key,value) {
			$('#pelialue').append("<div id='" + key + "' class='" + value + 
				" kortti' style='background-image: url(img/tausta.png)';></div>");
		});
	});
	$('#sisalto').delegate('.kortti', 'click', function() {
	if ($(this).attr('style')!==undefined) {
		$(this).removeAttr('style');	
		if (ekaKortti==='') {
			ekaKortti=$(this).attr('id');
		}
		else {
			if ($(this).attr('id')!==ekaKortti) {
				$('#arvauksia').text(++arvauksia);
				if ($(this).hasClass($('#' + ekaKortti).attr('class'))) {
					ekaKortti='';
				}
				else {
					$(this).animate({
						backgroundImage: 'url(img/tausta.png)'
					},500,function() {
						$('#' + ekaKortti).css('background-image', 'url(img/tausta.png)');
						$(this).css('background-image', 'url(img/tausta.png)');
						ekaKortti='';
					});
				}
					
			}		
		}
	}
	
});
});

