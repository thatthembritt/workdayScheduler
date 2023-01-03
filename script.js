var today = dayjs();
$("#currentDay").text(today.format("dddd,MMMM D, YYYY"));
var currentDay = dayjs().hour();

console.log(currentDay);

$(function () {
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var textarea = $(this).siblings(".description").val();
    localStorage.setItem(hour, textarea);
    console.log(hour, textarea);
  });

  var timeBlock = $(".time-block");

  $(".time-block").each(function () {
    var hour = $(this).attr("id");
    console.log(hour);
    if (hour < currentDay) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (parseInt(hour) === currentDay) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });
});

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
