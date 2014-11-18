$(document).ready(function() {
var blanks = ["1", "2", "3"]
  blanks.forEach(function(blank) {
   $("#conversion" + blank).submit(function(event) {  
      var datemonth = $("input#datemonth").val();
      var dateday = $("input#dateday").val();
      var dateyear = $("input#dateyear").val();
      var weeknumber = $("input#weeknumber" + blank).val();
      if (weeknumber) {
          $("#dateintro" + blank).show();
          $("#dateresult" + blank).show();

          var dateentry = (datemonth + " " + dateday + ", " + dateyear).toString();

          var datestart = new Date(dateentry);

          var daynumber = (parseInt(dateday) + (7 * weeknumber));

          var dateresult = datestart.setDate(daynumber);

          var datestart = datestart.toString().substring(0, 16);

         $("#weekentry" + blank).text(weeknumber);

          $("#dateresult" + blank).text(datestart);
         } 
      else {
        $("#dateintro" + blank).hide();
        $("#dateresult" + blank).hide();
      }   
    event.preventDefault();   
      }); 
   });  
});
