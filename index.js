"use strict";

// Document ready event
$(document).ready(function () {

    // Navigation bar link events
    $('#homeLink').click(function () {

        // Reload the page which by default goes to home page
        location.reload();
    });

    $('#calculatorWorksLink').click(function () {

        // Hide Home Page
        $('#start').hide();

        // Create AJAX Request to retrieve the page.
        $.ajax('howcalculatorworks.html', {
            cache: false,
            success: function (data) {
                $('#start').html(data);

                $('#start').fadeIn();
            }
        })
    });

    $('#benifitsOfGoodSleepPageLink').click(function () {

        // Hide Home Page
        $('#start').hide();

        // Create AJAX Request to retrieve the page.
        $.ajax('benifitsofgoodsleep.html', {
            cache: false,
            success: function (data) {
                $('#start').html(data);

                $('#start').fadeIn();
            }
        })
    });

    $('#aboutUsPageLink').click(function () {

        // Hide Home Page
        $('#start').hide();

        // Create AJAX Request to retrieve the page.
        $.ajax('about.html', {
            cache: false,
            success: function (data) {
                $('#start').html(data);

                $('#start').fadeIn();
            }
        })
    });

    // Extract milliseconds from 1 minute value
    const oneMinute = 60 * 1000;   // 60 seconds * 1000 milliseconds

    // Calculate result button click Event
    $('#calculate').click(function () {

        // Input Validation
        if ($('#hour').val() != 'hour' && $('#minute').val() != 'minute') {

            // Hide the Start Page
            $('#start').hide();

            $.ajax('result.html', {
                cache: false,
                success: function (data) {
                    // Create a formatted time String in HH:MM AMPM Format from input fields
                    var timeStr = `${$('#hour').val()}:${$('#minute').val()} ${$('#ampm').val()}`;

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

                    $('#start').html(data);

                    // Display the results in respective result fields
                    $('#result4').html(strTime(result1));
                    $('#result3').html(strTime(result2));
                    $('#result2').html(strTime(result3));
                    $('#result1').html(strTime(result4));

                    // Show results page
                    $('#start').fadeIn();
                }
            });
        }
        else {
            // Show Error for incorrect input
            alert("Kindly select hour and minute before trying to calculate!");
        }
    }); // end calculate

    $('#zzz').click(function () {

        // Hide Start Page
        $('#start').hide();

        $.ajax('resultNow.html', {
            cache: false,
            success: function (data) {
                // Get current Date and Time
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

                $('#start').html(data);

                // Display the results in respective result fields
                $('#resultNow2').html(strTime(result2));
                $('#resultNow1').html(strTime(result1));
                $('#resultNow3').html(strTime(result3));
                $('#resultNow4').html(strTime(result4));
                $('#resultNow5').html(strTime(result5));
                $('#resultNow6').html(strTime(result6));

                // Show resultNow Page
                $('#start').fadeIn();
            }
        })
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

    // Append HH:MM AMPM Time to strDate and parse into new JS Date Object
    return new Date(`${strDate} ${timestr}`);
}