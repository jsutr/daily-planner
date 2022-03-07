// Variables

var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH")
var currentHourInterger = parseInt(currentHour);


// Attributes 

$("#8").attr("data-time"), moment("8:00", "H:mm").format("HH");
$("#9").attr("data-time", moment("9:00", "H:mm").format("HH"));
$("#10").attr("data-time", moment("10:00", "HH:mm").format("HH"));
$("#11").attr("data-time", moment("11:00", "HH:mm").format("HH"));
$("#12").attr("data-time", moment("12:00", "HH:mm").format("HH"));
$("#13").attr("data-time", moment("13:00", "HH:mm").format("HH"));
$("#14").attr("data-time", moment("14:00", "HH:mm").format("HH"));
$("#15").attr("data-time", moment("15:00", "HH:mm").format("HH"));
$("#16").attr("data-time", moment("16:00", "HH:mm").format("HH"));
$("#17").attr("data-time", moment("17:00", "HH:mm").format("HH"));


// jQuery

$(document).ready(function () {

    renderPlans();

    $("#currentDay").append();

    function addDate() {
        $("#currentDay").html(moment().format('MMMM Do YYYY, HH:mm'));
    } setInterval(addDate, 1000);

    for (var i = 0; i <= 24; i++) {
        var inputHour = $("#" + i + "Row").attr("data-time");
        var inputHourInt = parseInt

        if (currentHourInteger === inputHourInt) {
            $("#" + i + "Row").addClass("present");  
        }
        if (currentHourInteger > inputHourInt) { 
            $("#" + i + "Row").addClass("past");
        }
        if (currentHourInteger < inputHourInt) {  
            $("#" + i + "Row").addClass("future");
        }
    }

    saveBtn.on("click", function () {
        var rowHour = $(this.attr("data-hour")); 
        var input = $("#" + rowHour + "Row").val();
        localStorage.setItem(rowHour, input);
    });

    //retrieve input

    function renderPlans() {
        for (var i = 0; i <= 24; i++) {
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }

})