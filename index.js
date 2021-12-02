"use strict";

// Document ready event
$(document).ready(function () {

    // Extract milliseconds from 1 minute value
    const oneMinute = 60 * 1000;   // 60 seconds * 1000 milliseconds

    // Back Button Click Event
    $('.back').click(function () {
        // Reveal Start Page
        $('#start').fadeIn();

        // Hide Result Page
        $('#results').hide();

        // Hide Result Now Page (zzz)
        $('#resultsNow').hide();
    }); // End .back click

    // Calculate result button click Event
    $('#calculate').click(function () {

        // Input Validation
        if ($('#hour').val() != 'hour' && $('#minute').val() != 'minute') {

            // Hide the Start Page
            $('#start').hide();

            // Create a formatted time String in HH:MM AMPM Format from input fields
            var timeStr = `${$('#hour').val()}:${$('#minute').val()} ${$('#ampm').val()}`;
            //console.log(timeStr);

            // Get JS Date object from HH:MM AMPM time string
            var setTime = strTimeToDateObj(timeStr);


            // Get result1 for time - 4.5 hours
            var result1 = new Date(setTime.getTime() - 270 * oneMinute);

            // Get result2 for result1 - 1.5 hours
            var result2 = new Date(result1.getTime() - 90 * oneMinute);

            // Get result3 for result2 - 1.5 hours
            var result3 = new Date(result2.getTime() - 90 * oneMinute);

            // Get result4 for result3 - 1.5 hours
            var result4 = new Date(result3.getTime() - 90 * oneMinute);


            // Display the results in respective result fields
            $('#result4').html(strTime(result1));
            $('#result3').html(strTime(result2));
            $('#result2').html(strTime(result3));
            $('#result1').html(strTime(result4));

            // Show results page
            $('#results').fadeIn();
        }
        else {
            // Show Error for incorrect input
            alert("Kindly select hour and minute before trying to calculate!");
        }
    }); // end calculate

    $('#zzz').click(function () {

        // Hide Start Page
        $('#start').hide();
        var sleepDate = new Date();


        // Get result1 for time + 1.5 hours + 14 minutes to fall asleep
        var result1 = new Date(sleepDate.getTime() + (90 * oneMinute) + 14);

        // Get result2 for result1 + 1.5 hours
        var result2 = new Date(result1.getTime() + 90 * oneMinute);

        // Get result3 for result2 + 1.5 hours
        var result3 = new Date(result2.getTime() + 90 * oneMinute);

        // Get result4 for result3 + 1.5 hours
        var result4 = new Date(result3.getTime() + 90 * oneMinute);

        // Get result5 for result4 + 1.5 hours
        var result5 = new Date(result4.getTime() + 90 * oneMinute);

        // Get result6 for result5 + 1.5 hours
        var result6 = new Date(result5.getTime() + 90 * oneMinute);

        // Display the results in respective result fields
        $('#resultNow2').html(strTime(result2));
        $('#resultNow1').html(strTime(result1));
        $('#resultNow3').html(strTime(result3));
        $('#resultNow4').html(strTime(result4));
        $('#resultNow5').html(strTime(result5));
        $('#resultNow6').html(strTime(result6));

        // Show resultNow Page
        $('#resultsNow').fadeIn();
    });
});

// Function to convert JS Date() Object to Time String in HH:MM AMPM
function strTime(datetime) {

    return datetime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
} // End strTime


// Function to convert HH:MM AMPM to JS Date object
function strTimeToDateObj(timestr) {
    
    // Extract Date into MM/DD/YYYY string format.
    var strDate = new Date().toLocaleDateString();
    comsole.log(strDate);

    // Append HH:MM AMPM Time to strDate and parse into new JS Date Object
    return new Date(`${strDate} ${timestr}`);
}