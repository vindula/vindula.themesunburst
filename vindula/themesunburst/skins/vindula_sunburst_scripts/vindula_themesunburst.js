$j = jQuery.noConflict();

$j(document).ready(function(){
	
	/* FORM EDIT ADJUSTMENTS */
	
	$j('div.autocompleteInputWidget span.option label span').text( function(index, text) {
	 	if ($j(this).text() == '(nothing)') $j(this).text('Nada selecionado');
	} )
	 
});