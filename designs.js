// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var selectedColor = $('#colorPicker').attr('value');
var table = document.getElementById("pixelCanvas");
var willReset = false;
var submitButton = $('#submitButton');
var dragging = false;

// Detect if user is dragging
$('table').on('mousedown' ,function(){
  dragging = true;
});

$('body').on('mouseup' ,function(){
  dragging = false;
});

// If so, then paint every cell they touch
$('table').on('mouseover', 'td' ,function(){
  if (dragging){
    $(this).css({backgroundColor: selectedColor});
  }
});

// Paint the cell that has been clicked
$('table').on('click', 'td' ,function(){
  $(this).css({backgroundColor: selectedColor});
});

// erase on right-click
$("table").on("mousedown", "td", function(e) {
    if (e.which === 3) {
      $(this).css("background-color", "");
    }
  });

// Update the selectedColor value if the color picker is updated
$('#colorPicker').change(function(){
  selectedColor = $('#colorPicker').prop('value');
});

// Make the grid if the button is pressed
submitButton.on('click', function makeGrid(n, m){

    // clear previous grid
    $('#pixelCanvas').children().remove();

    // get user defined hight and width values from sliders
    var height = $('#inputHeight').slider( "option", "value" );
    var width = $('#inputWeight').slider( "option", "value" );

    // build the grid
    for (i = 0; i < height; i++){
      var currentRow = table.insertRow();

      for (q = 0; q < width; q++){
        currentRow.insertCell();
      }
    }


});

// slider input setups

$( "#inputHeight" ).slider({
  min: 1,
  value: 1
});

$( "#inputWeight" ).slider({
  min: 1,
  value: 1
});


// listeners for the sliders that update the hight and width text

$("#heightHandle").on('mouseup' ,function(){
  $('#heightText').html($("#inputHeight").slider( "option", "value" ));
});

$("#weightHandle").on('mouseup', function(){
  $('#weightText').html($("#inputWeight").slider( "option", "value" ));
});


$("#inputHeight").on('slide' ,function(){
  $('#heightText').html($("#inputHeight").slider( "option", "value" ));
});

$("#inputWeight").on('slide', function(){
  $('#weightText').html($("#inputWeight").slider( "option", "value" ));
});
