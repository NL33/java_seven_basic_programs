$(document).ready(function() {
	$("#conversion").submit(function(event) {  
     var testWord = $("input#testword").val();  
     var blank = ("&nbsp;");

     $("#answer").empty();
     if (testWord) {
       var words = (testWord).split(" ");
       words.forEach(function(word) {
           var consStartTest = /^[^aeiou]/gi; //match any consonants at start of word
           var sqBeg = /^squ/gi; //for words beginning "squ" (where should put the "squ" after word in results): match any "squ" at start of word
           var qBeg = /^qu/gi; //for words beginning "qu" (should put "qu" at end of word): match any "qu" at start of word
           if (consStartTest.test(word)){ //if true that consonant starts the word

            if (sqBeg.test(word)) { 
             var noCons = word.replace(/^squ/gi,"");  //replace the "squ" with nothing
             var consBegLetters = /^squ/gi.exec(word);} //"squ"
          
            else if (qBeg.test(word)) {
             var noCons = word.replace(/^qu/gi,""); //replace the "qu" with nothing
             var consBegLetters = /^qu/gi.exec(word);} //"qu"

            else {
              var noCons = word.replace(/^[^aeiou]{1,50}/gi,""); //replace the consonants--any in a row at the start of the word, up until 50 consonants--with nothing
              var consBegLetters = /^[^aeiou]{1,50}/gi.exec(word);} //"[whatever consonants begin the word]"
            }

            else {
             var noCons = word.replace(/^[^aeiou]{1,50}/gi,"");
              var consBegLetters = "";}

          //for punctuation: (i) if there is punctuation at beginning of word (ie, like a quote), and (ii) at the end (eg like a comma, quote, question mark, etc.)
                if (/^[.?!,";=+@%&()123456789]{1,50}/gi.test(word))
                  {var punctBegInsert = /^[.?!,";=+@%&()123456789]{1,50}/gi.exec(word);//returns any of these punctuation marks at beginning of word (up to 50)
                  }
                else {
                  var punctBegInsert = "";
                }
                if (/[.?!",;=+@%&()123456789]{1,50}$/gi.test(word))
                  {var punctEndInsert = /[.?!",;=+@%&()123456789]{1,50}$/gi.exec(word);//returns any of these punctuation marks at end of word (up to 50)
                  }
                else {
                  var punctEndInsert = "";
                } 
            //
            $("#results").show();
               if (word !== "") {
                 $("#answer").append(punctBegInsert + (noCons + consBegLetters + "ay ").replace(/[.?!",;=+@%&()123456789]{1,50}/gi,"") + punctEndInsert)}
                 else {
                  $("#answer").append(blank)}
          });
      }
    event.preventDefault();   //required for any submit function
  });  
});
