
$(document).ready(function() {
$("form#triangle-info").submit(function(event) {

var side1 = parseInt($("input#side1").val());
var side2 = parseInt($("input#side2").val());
var side3 = parseInt($("input#side3").val());

if (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1)){
	$(".answer").text("These sides do not equal a triangle");
    }

else if ((side1 === side2) && (side1 === side2) && (side2 === side3)){
	$(".answer").text("As all sides are equal, and other criteria are met, your triangle is equilateral");
	} 

else if ((side1 === side2 && side1 !== side3) || (side2 === side3 && side2 !== side1) || (side3 === side1 && side3 !== side2)) {
	 $(".answer").text("As 2 of the 3 sides are equal, and other criteria are met, the triangle is isosceles"); 
	}

else if ((side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
	$(".answer").text("As none of the sides are equal, and other criteria are met, the triange is scalene");
    }


$("#result").show();

event.preventDefault();
  });

});


