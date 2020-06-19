
function grid() {
	var table = document.getElementById('canvastable');
	var height = document.getElementById('grid-Height').value;
	var weidth = document.getElementById('grid-Width').value;
	var colorChooser= document.getElementById('colorselector')
	var canvasesection=document.getElementById('#myform')
	// body...
	
	while (table.rows.length > 0) {
    table.deleteRow(0);
  }

		for (var i = 0 ; i < height; i++) {
		var tablerow = table.insertRow(i);
		
		for (var j = 0; j < weidth; j++) {
			var tablebox = tablerow.insertCell(j);


			tablebox.addEventListener('click',function(event){
				event.target.style.backgroundColor = colorChooser.value;
			});			
}
}
}
const sizepicker=document.getElementById("myform");
sizepicker.addEventListener('submit', function(event) {
  event.preventDefault();
  // When the data is submitted the grid mount function is called
  grid();
});

