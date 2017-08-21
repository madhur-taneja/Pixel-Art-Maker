// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var table = $('#pixel_canvas');
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

// Build a default 10x10 grid.
makeGrid(10,10);