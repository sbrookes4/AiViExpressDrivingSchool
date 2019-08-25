//alert("TEST");
$(document).ready(function(){
   $("#Test_Bank_1").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/TEST_BANK_1.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#Test_Bank_2").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/TEST_BANK_2.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);              
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#Test_Bank_3").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/TEST_BANK_3.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#Test_Bank_4").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/TEST_BANK_4.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#Test_Bank_5").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/TEST_BANK_5.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#Test_Bank_6").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/TEST_BANK_6.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#Test_Bank_7").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/TEST_BANK_7.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#Test_Bank_8").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/TEST_BANK_8.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){

$(".testSelectorButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#DrivingTestContentContainer").offset().top
    }, 300);
    });
});