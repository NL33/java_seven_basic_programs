$(document).ready(function() {
	$("#conversion").submit(function(event) {  
   //converting entry to an array, sorting it, and then putting back to a string (put back to a string to compare to the later strings--b/c have not seen how to compare two arrays, .eql() does not seem to work)
   var testValue = $("input#testword").val(); 
   var testArray = (testValue).split("");
   var testSort = (testArray).sort(); 
   var testString = (testSort).toString();
   
   //setting variable for the different text boxes, to run through the loop
  var blanks = ["1", "2", "3", "4"]

  //loop: each text box entry is converted to an array, then sorted, then put into string to compare. If string matches the first word string, then an anagram.
  blanks.forEach(function(blank) {
    $("#answer" + blank).empty(); 
    var userInput = $("input#check" + blank).val();
    var checkArray = (userInput).split("");
    var checkSort = (checkArray).sort();
    var checkString = (checkSort).toString();
   
   if (checkString === testString) {
      $("#answer" + blank).append("Match! This is an anagram for " + testValue + "!");
    }

else {
//to find partial matches--if there is any overlap in letters between the strings. Loop the different parts of the text box array (.forEach loop would also work--see draft file), so each letter is compared to the original entry, to see if any overlap. NOTE: also thought .contains() (for strings) would work, but does not seem to.
      for (index = 0; index < checkArray.length; index+=1) {
      var partial = testString.indexOf(checkArray[index]);
      };
//.indexOf() returns -1 if there is not a match, and then 0 if a match of the first character, 1 for a match of the second, etc... This says, if there is a match (any match), return the following.
    if (partial >= 0) {
      $("#answer" + blank).append("You have some letters in common, but not a full match.")
    }


    else if (!userInput) {
      $("#answer" + blank).empty();
    }

     else {
      $("#answer" + blank).append("Not a match. This is not an anagram for " + testValue + ".")
    }
}
  
  });


 event.preventDefault();   //required for any submit function
 });   
});