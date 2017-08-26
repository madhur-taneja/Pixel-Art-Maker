// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var table = $('#pixel_canvas');
var form = $('#sizePicker');
var columns;
var rows;

function makeGrid(rows, columns) {
	
// Your code goes here!
	var grid = '';
	for (var i = 0; i < rows; i++) {
		grid += `<tr>`;
		for (var j = 0; j < columns; j++) {
			grid += `<td class="cell">&nbsp;</td>`;
		}
			grid += `</tr>`;
	}
  
	table.html(grid);

}

form.submit(function() {
	event.preventDefault();
	rows = $('#input_height').val();
	columns = $('#input_width').val();
	makeGrid(rows, columns);
});

// Sets the color to default (i.e. Black)
var selectedColor = $('#colorPicker').val(); 
// Updates the color to selected color by the user.
$('#colorPicker').on('input', function() {
	console.log(1);
	selectedColor = $('#colorPicker').val();
});

function addClickListeners() {
	var cells = $('.cell');
	for (var i = 0; i < cells.length; i++) {
		cells[i].addEventListener("click", function(event) {
		var clickedCell = event.target;
		$(clickedCell).css('background-color', selectedColor);
		});
	}
}

// Build a default 10x10 grid.
makeGrid(10,10);