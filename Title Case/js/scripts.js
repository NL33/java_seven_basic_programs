$(document).ready(function() {
	$("#conversion").submit(function(event) {
	 $("#answer").empty();   //clear any earlier entries
   var stuff = $("input#entry").val();   //variable for user entry
   var items = (stuff).split(" ");   //splits the user entry--which is a string--into array of separate words
   
   //to get first word to always be capital:
   var firstWord = items[0];   //pulls out the first word of the entry. Could also use:  var firstWord = (stuff).split(" ", 1); 
   var startLet = (firstWord).charAt(0).toUpperCase();   //pulls out the first character and makes it uppercase
   var startOtherLet = (firstWord).substring(1);   //pulls out the rest of the string, starting with the second letter (ie, letter (1))
   $("#answer").append(startLet + startOtherLet + " ");   //combines the now uppercase first letter and the rest of the string

   //for every word after the first word:
   for (var index = 1; index < items.length; index += 1) {   //loop, starting with second word of the array, going the length of the array
      var firstLet = (items[index]).charAt(0).toUpperCase();  //pulls out first letter and makes uppercase
      var otherLet = (items[index]).substring(1);   //pulls out rest of each string, starting with second letter
 
      if ((items[index] === "and") || (items[index] === "a") || 
        (items[index]  === "is") || (items[index] === "an") || (items[index] === "and") 
        || (items[index]  === "the"))
        {
          $("#answer").append(items[index] + "  ");   //exception for certain words, where the item is just appended as is
      }

     else  {
           $("#answer").append(firstLet + otherLet + "  ");   //everything else, appended with capitalized first letter + rest of item + space
        }
   }; 

 event.preventDefault();   //required for any submit function
 });   
});