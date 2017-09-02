// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var table = $('#pixel_canvas');
var form = $('#sizePicker');
var columns = 1;
var rows = 1;

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
	addClickListeners();
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

$('#add_row').click(function(){
    rows = Number(rows) + 1;
	grid = ' ';
    makeGrid(rows, columns);
});

$('#add_column').click(function(){
    columns = Number(columns) + 1;
	grid = ' ';
    makeGrid(rows, columns);
});

$('#remove_row').click(function(){
	if(rows > 1)
		rows = Number(rows) - 1;
	grid = ' ';
    makeGrid(rows, columns);
});

$('#remove_column').click(function(){
	if(columns > 1)
		columns = Number(columns) - 1;
	grid = ' ';
    makeGrid(rows, columns);
});

// Build a default 10x10 grid.
makeGrid(1,1);