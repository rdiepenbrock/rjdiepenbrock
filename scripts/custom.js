$(document).ready(function()
{
	//today - load content
	$("a.todayLink").click(function(event)
	{
		event.preventDefault();
		
		var $this = $(this).attr('href');
		
		$('.today').load($this);
	});
	
	//today - default load
	$('.today').load('112813.shtml');
});