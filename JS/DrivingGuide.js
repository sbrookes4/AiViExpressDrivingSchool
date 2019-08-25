//alert("TEST");
$(document).ready(function(){
   $("#DefensiveDrivingButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_DefensiveDrivingButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#EmergencyDrivingButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_EmergencyDrivingButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#InformatorySignButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_InformatorySignButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#RegulatorySignsButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_RegulatorySignsButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#ProhibitorySignsButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_ProhibitorySignsButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#WarningSignsButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_WarningSignsButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#LinesLanesButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_LinesLanesButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#RoundaboutsButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_RoundaboutsButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer


$(document).ready(function(){
   $("#RailwayCrossingButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_RailwayCrossingButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#WaitingparkingButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_WaitingparkingButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#OvertakingVehiclesButton").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/DRIVINGGUIDE/CONTENT_DrivingGuide_OvertakingVehiclesButton.php',
        success: function(data) {
        //alert(data);
        $("#DrivingGuideContentContainer").html("");
        $("#DrivingGuideContentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){

$(".pptSelectorButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#DrivingGuideContentContainer").offset().top
    }, 300);
    });
});