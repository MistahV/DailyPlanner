$(document).ready(function() {

  //display current date on the page
  var date = moment();
  $("#currentDay").text(date.format("[Today's date is] MMM Do, YYYY"));
  
  var containerEl = $(".container")
  var timeArr = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

  for(i=0; i< timeArr.length; i++){
    var newRow = $("<div>").attr("class", "row time-block").attr("data-time", i+9)
    var newHour = $("<div>").attr("class", "col-md-1 hour").text(timeArr[i])
    var newTextA = $("<textarea>").attr("id", timeArr[i]).attr("class", "col-md-10 description")

    newTextA.val(localStorage.getItem(timeArr[i]))
    var currentTime = date.hour()
    console.log(i+9, date.hour())
    if (currentTime > i+9) {
            newTextA.addClass("past")
           }
           else if (currentTime == i+9) {
            newTextA.addClass("present")
           }
           else {
            newTextA.addClass("future")
           }

    var newBtn = $("<button>").attr("class", "col-md-1 saveBtn").text("Save")

    newRow.append(newHour)
    newRow.append(newTextA)
    newRow.append(newBtn)

    containerEl.append(newRow)
  }

   
    function saveTask(e) {
        localStorage.setItem($(this).prev().attr("id"), $(this).prev().val())
       }
       
    
    $('.saveBtn').on('click', saveTask);
    
});
    