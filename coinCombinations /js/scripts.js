$(document).ready(function() {
  $("#conversion").submit(function(event) {  
   var amount = $('input#amount').val();

if (amount) {
  $("#calculateintro").show();

  //Quarters
  var a = (amount/25).toString();    
  var b = a.indexOf(".");    

    if (b >= 1) {
      var c = a.substring(0, b).toString();}
    else if (amount >= 25) {
      var c = (amount/25).toString();}    
    else {
      var c = 0;}

  //dimes
  var d = (amount - (25 * c))  
  var e = (d/10).toString();  
  var f = (e).indexOf(".");  

     if (f >= 1) {
        var g = e.substring(0, f).toString();}  
     else if (d >= 10){
        var g = (d/10).toString(); }
      else {
        var g = 0;}

                 
  //nickels
  var h = (amount - (25 * c) - (10 * g));  
  var i = (h/5).toString();    
  var j = (i).indexOf(".");   

      if (j >= 1)  {
        var k = i.substring(0, j).toString();}  
      else if (h >= 5) {
        var k = (h/5).toString();}
      else {
        var k = 0; }

  //pennies
  var l = (amount - (25 * c) - (10 * g) - (5 * k));

  //DISPLAY 
  $("#anyquarters1").hide(); 
  $("#anyquarters2").hide(); 
  $("#anydimes").hide();  
  $("#anynickels").hide(); 
  $("#anypennies").hide();  
   $("#totalnumber").hide();    

  if (c > 0) {    //Done so show 1 Quarter or 2+ Quarters (singular v plural) as appropriate. Change not made elsewhere in interest of time
        
    if (c === "1") {
         $("#anyquarters1").show();
         $("#quartersanswer1").text(c);}
    else {
          $("#anyquarters2").show();
          $("#quartersanswer2").text(c);}
    }

    if (g > 0) {
         $("#anydimes").show();
         $("#dimesanswer").text(g);
        }

     if (k > 0) { 
       $("#anynickels").show();
        $("#nickelsanswer").text(k); 
       }

     if (l > 0) {
        $("#anypennies").show();
        $("#penniesanswer").text(l);
       }

    //total:
    var z = (parseInt(c) + parseInt(g) + parseInt(k) + parseInt(l));

       $("#totalnumber").show();
       $("#total").text(z);
    }

event.preventDefault();   
});   
});
