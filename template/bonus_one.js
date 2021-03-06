// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

$(document).ready(function(){
	var $Array;
	var listItems = [];

	$.ajax({
  		method: "GET",
  		url: "http://www.mattbowytz.com/simple_api.json",
  		dataType:"json",
 		data: {data:"all"},
 		success: function(data)
 		{
 			$Array = $.merge(data.data.interests, data.data.programming);
 			$Array.sort(function(one, two)
 			{
 				return one.toLowerCase().localeCompare(two.toLowerCase());
 			});
 			console.log("Array is " + $Array[0]);
 			$.each($Array, function(index, value) 
			{
				listItems.push(value);
			});
 			
 		}
 	});
 	
 	
 	//Supposed to get search results whenever a key is pressed	
	$('.flexsearch-input').on('keyup input', function(e) 
	{			
		var i = 0;
		var input = $(this).val();
		
		$(".typeahead-list").empty();
		
		console.log("In the search bar")				
		console.log(listItems[0]);
					
		//appending items to the list
		$.each(listItems, function(index, value) 
		{
			if((value.length >= input.length) && (value.substring(0,input.length).toLowerCase() ==input.toLowerCase() ))
			$('.typeahead-list').append("<li><a href=\"https://www.google.com/search?q=" + value + "\"><p>" + value + "</p></a></li>");
			i++;			
		});
			
		if(i>0)
		{
			$('.typeahead-box-wrapper').show();
		}	
		
		
	});
	
	// taking user to the search they chose
	$('.flexsearch-form').submit(function(e) 
	{ 						
		document.location = "https://www.google.com/search?q=" + $(".flexsearch-input").val();
		return false;
	});
	console.log('Keepin\'n it clean with an external script!');
});



  
