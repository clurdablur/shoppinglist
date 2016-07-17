$(document).ready(function() {
	$('#searchbutton').click(function() {
		var searchterm=$('#searchterm').val()


		var html = '<h3><div class="divcheck"><input type="checkbox" class="itemCheckbox"/>'+
		'</div><div class="divtext">'+searchterm+'<img class="trash" src="trash-icon.png"></div></h3>';

		$('.listItems').append(html);
		addevents()

	})
addevents()

})
function addevents() {
	$('.trash').click(function() {

		$(this).parent().parent().remove()
	})
	$('.itemCheckbox').click(function() {
		$(this).parent().parent().find('.divtext').toggleClass('stricked')
	})
}
