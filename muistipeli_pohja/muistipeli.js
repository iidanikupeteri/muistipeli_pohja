
var kortit=new Array('sininen', 'sininen', 'punainen', 'punainen', 'vihrea', 'vihrea', 'oranssi', 'oranssi', 'violetti', 'violetti', 'ruskea', 'ruskea');  
var ekaKortti='';     
$(document).ready(function()
{
	$('#aloita').click(function(e)
	{
		$('#pelialue').empty();
		$.each(kortit, function(key,value)
		{
			$('#pelialue').append("<div id='" + key + "' class'" + value + " kortti' style='background-image: url(../img/tausta.png)';></div>");
		}); 			
	});
	$('#sisalto').delegate('.kortti','click',function()
	{

	
		if ($(this).attr('style')!==undefined)
		{
			$(this).removeAttr('style');
			if (ekaKortti==='')
			{
				ekaKortti=$(this).attr('id');
			}
			else
			{
				if ($(this).attr('id')!==ekaKortti)
				{
					$('#arvauksia').text(++arvauksia);
					if ($(this).hasClass($('#' + ekaKortti).attr('class')))
					{
						ekaKortti='';
					}
					else
					{
						$(this).animate(
						{
							backgroundImage: 'url(img/tausta.png)'
						},500,function()
						{
								$('#' + ekaKortti).css('backgroung-image', 'url(img/tausta.png)');
								$(this).css('background-image','url(img/tausta.png)');
								ekaKortti='';
						});
					}
				}
			}
		}
	});	
});
