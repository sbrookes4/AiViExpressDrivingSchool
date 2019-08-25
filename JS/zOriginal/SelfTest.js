//alert("TEST");
$(document).ready(function(){
   $("#DefensiveDrivingButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_DefensiveDrivingButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#EmergencyDrivingButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_EmergencyDrivingButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);              
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#InformatorySignButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_InformatorySignButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#RegulatorySignsButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_RegulatorySignsButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#ProhibitorySignsButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_ProhibitorySignsButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#WarningSignsButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_WarningSignsButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#LinesLanesButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_LinesLanesButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#RoundaboutsButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_RoundaboutsButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#RailwayCrossingButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_RailwayCrossingButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#WaitingparkingButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_WaitingparkingButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingTestContentContainer").html("");
        $("#DrivingTestContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#OvertakingVehiclesButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGTEST/CONTENT_DrivingTest_OvertakingVehiclesButton.php',
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