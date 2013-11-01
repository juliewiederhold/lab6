//signup.js 
// add your JavaScript code to this file

$(function(){
	var stateSelect = $('.us-states');
	var option;
	var idx;
	var state;

	for(idx = 0; idx <usStates.length; ++idx) {
		state = usStates[idx];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	}

	$('.signup-form').submit(function(){
		var signupForm = $(this);
		var addr1Input = signupForm.find('input[name="addr-1"]');
		var addr1Value = addr1Input.val();
		var zipInput;
		var zipValue;

		if(addr1Value && addr1Value.length > 0) {
			zipInput = signupForm.find('input[name="zip"]');
			zipValue = zipInput.val();
			if(zipValue == null || zipValue.length == 0){
				alert('Please enter your zip code.');
				return false;
			} else
				return true;
		}
	});

	$('.cancel-signup').click(function(){
   		window.location = 'http://www.google.com';
	});
});