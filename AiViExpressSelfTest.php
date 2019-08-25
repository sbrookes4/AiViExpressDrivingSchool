<!DOCTYPE html>

<html>

<?php include 'COMPONENTS/HEAD/SELF_TEST_HEAD.php'; ?>

<body>

<?php include 'COMPONENTS/HEADER.php'; ?>

<div class="hidden">
    
    <h1>AiVi Express Driving School Self Test</h1>
    <h2>Here you can take practice quizzes and timed exams. </h2>

</div>

<?php include 'COMPONENTS/NAV.php'; ?>


    <div class="container landingFadeIn fadeIn">
        
        <div class="row mt-3">

            <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12">

                <img class="landingImage" src="ASSETS/IMAGES/SelfAssessment.png">

            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12 text-center">

                <p class="headlinerText">Self Test</p>
                <p class="titleA">
                    Are you ready to test your knowledge of the road signs and traffic rules?<br>
            </div>

        </div>

    </div>

    <div id="testRestartPoint" class="container landingFadeIn fadeIn">
        
        <div class="row mt-3">

            <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12 text-center">

                <p class="titleA">
                    
                    AiVi Express Driving School theory tests are designed in compliance with DVLA questions in order to help familiarize you with the process. We have more than 200 multiple choice questions on traffic rules and road signs questions ready to test your knowledge.<br>
                    <br>
                    To successfully pass the AiVi Express Driving School tests you must correctly answer 90% out of the 30 questions. Feel free to test yourself as many times as possible. Click the buttons below to open the test banks full of questions.<br>
                    <br>
                    Click or tap on each button for the answer.<br>
                    <p class="textA">(Works on Chrome 73.0.36, Android 7.1.1 and iOS 12.1 or newer. Ensure any pop-up blockers are disabled.)</p> 

                </p>     

            </div>

        </div>

    </div>

    <div class="container landingFadeIn fadeIn">
        
        <div class="row mt-3">

            <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12 text-center">

            <!--<p class="titleA">Click a Test Bank Below</p> -->

            <button id="Test_Bank_1" type="button" class="btn btn-outline-primary mb-2 testSelectorButton">&nbsp;Test Bank 1&nbsp;</button>

            <button id="Test_Bank_2" type="button" class="btn btn-outline-primary mb-2 testSelectorButton">&nbsp;Test Bank 2&nbsp;</button>

            <button id="Test_Bank_3" type="button" class="btn btn-outline-primary mb-2 testSelectorButton">&nbsp;Test Bank 3&nbsp;</button>

            <button id="Test_Bank_4" type="button" class="btn btn-outline-primary mb-2 testSelectorButton">&nbsp;Test Bank 4&nbsp;</button>

            <button id="Test_Bank_5" type="button" class="btn btn-outline-primary mb-2 testSelectorButton">&nbsp;Test Bank 5&nbsp;</button>

            <button  id="Test_Bank_6" type="button" class="btn btn-outline-primary mb-2 testSelectorButton">&nbsp;Test Bank 6&nbsp;</button>

            <button  id="Test_Bank_7" type="button" class="btn btn-outline-primary mb-2 testSelectorButton">&nbsp;Test Bank 7&nbsp;</button>

            <button  id="Test_Bank_8" type="button" class="btn btn-outline-primary mb-2 testSelectorButton">&nbsp;Test Bank 8&nbsp;</button>

            </div>

            <div id="DrivingTestContentContainer" class="col-sm-12 col-md-12 col-lg-12 col-lg-12 mt-3"> 

            </div>

        </div><!-- ROW END -->

    <!--

    <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12 text-center">

        <div class="lineBreak"></div>

    </div>

   

    <div class="container landingFadeIn fadeIn">
        
        <div class="row mt-5">

            <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12 text-center">

                <p class="headlinerText">Practice Test</p>
                <p class="titleA">In the section below you can take a practice test. Feedback will be given with each question. You can click the button to go forawrd or backward through the questions. There is only one correct answer for each question.</p>     

            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12 text-center"">

                <form>

                    <label class="titleA">Question 1: </label><br>
                    <br>
                    <p class="titleA">(Question goes here)</p><br>
                    <br>
                    <input type="radio" name="Question1PracTest"><span class="titleA">Answer 1</span><br>
                    <input type="radio" name="Question1PracTest"><span class="titleA">Answer 2</span><br>                   
                    <input type="radio" name="Question1PracTest"><span class="titleA">Answer 3</span><br>
                    <input type="radio" name="Question1PracTest"><span class="titleA">Answer 4</span><br>

                </form>

            </div>

        </div>

    </div>


    <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12 text-center mt-5">

        <div class="row">

            <div class="lineBreak"></div>

        </div>

    </div>

    -->

    <!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% LineBreak %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->

    <!-- Deprecated Phase 1 
    <div class="container landingFadeIn fadeIn">
        
        <div class="row mt-5">

            <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12 text-center">

                <p class="headlinerText">Test</p>
                <p class="titleA">This will help simulate what a DVLA test will be like. You will have 20 seconds to choose the correct answer before next question is shown automatically.</p>     

            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12 text-center"">

                <form>

                    <label class="titleA">Question 1: </label><br>
                    <br>
                    <p class="titleA">(Question goes here)</p><br>
                    <br>
                    <input type="radio" name="Question1Test"><span class="titleA">Answer 1</span><br>
                    <input type="radio" name="Question1Test"><span class="titleA">Answer 2</span><br>                   
                    <input type="radio" name="Question1Test"><span class="titleA">Answer 3</span><br>
                    <input type="radio" name="Question1Test"><span class="titleA">Answer 4</span><br>

                </form>

            </div>

        </div>

    </div>

    <div class="container landingFadeIn fadeIn">
        
        <div class="row mt-3">

            <div class="col-sm-12 col-md-12 col-lg-12 col-lg-12">

                <img class="landingImage" src="ASSETS/IMAGES/kenteStripe.png">

            </div>

        </div>
        
    </div> CONTAINER END -->

<?php include 'COMPONENTS/FOOTER.php';?>

</body>

</html>