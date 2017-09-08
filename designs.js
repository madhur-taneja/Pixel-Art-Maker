// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Global Variables
const form = $('#sizePicker');
let columns = 1;
let rows = 1;

// Function to make the Grid
function makeGrid(rows, columns) {
	
// Your code goes here!
	const table = $('#pixel_canvas');
	let grid = '';
	for (let i = 0; i < rows; i++) {
		grid += `<tr>`;
		for (let j = 0; j < columns; j++) {
			grid += `<td class="cell">&nbsp;</td>`;
		}
			grid += `</tr>`;
	}
  
	table.html(grid);
	addClickListeners();
}

// Event listener for submission of form
form.submit(function() {
	// Preventing Default value
	event.preventDefault();
	// Fetching the user's input
	rows = $('#input_height').val();
	columns = $('#input_width').val();
	// Calling the function to make the grid
	makeGrid(rows, columns);
});

// Sets the color to default (i.e. Black)
let selectedColor = $('#colorPicker').val(); 
// Updates the color to the selected color by the user.
$('#colorPicker').on('input', function() {
	// Fetching the user's input
	selectedColor = $('#colorPicker').val();
});

// Adding event listeners to the cells of the grid
function addClickListeners() {
	const cells = $('.cell');
	for (let i = 0; i < cells.length; i++) {
		cells[i].addEventListener("click", function(event) {
		var clickedCell = event.target;
		// Changing the color of the selected cell
		$(clickedCell).css('background-color', selectedColor);
		});
	}
}

// Function to add a new row on button click

// This method will clear the old table and make a new one with an extra row everytime.
// $('#add_row').click(function(){
    // rows = Number(rows) + 1;
	// grid = ' ';
    // makeGrid(rows, columns);
// });

// This method won't clear the old table and just add another row at the end of the table.
$('#add_row').click(function(){
	var new_row = '';
	new_row += `<tr>`;
	for (let j = 0; j < columns; j++) {
		new_row += `<td class="cell">&nbsp;</td>`;
	}
	new_row += `</tr>`;
	table.append(new_row);
	rows = Number(rows) + 1;
	addClickListeners();
});

// Function to add a new column on button click

// This method will clear the old table and make a new one with an extra column everytime.
// $('#add_column').click(function(){
    // columns = Number(columns) + 1;
	// grid = ' ';
    // makeGrid(rows, columns);
// });

// This method won't clear the old table and just add another column at the end of each row.
$('#add_column').click(function(){
	$('tr').each(function() {
		$(this).append(`<td class="cell">&nbsp;</td>`)
	});
	columns = Number(columns) + 1;
	addClickListeners();
});

// Function to remove a row on button click
$('#remove_row').click(function(){
	if(rows > 1)
		rows = Number(rows) - 1;
	grid = ' ';
    makeGrid(rows, columns);
});

// Function to remove a column on button click
$('#remove_column').click(function(){
	if(columns > 1)
		columns = Number(columns) - 1;
	grid = ' ';
    makeGrid(rows, columns);
});

// Function to reset the grid
$('#reset').click(function(){
	grid = ' ';
	rows = 1;
	columns = 1;
    makeGrid(rows, columns);
});

// Build a default 10x10 grid.
makeGrid(1,1);