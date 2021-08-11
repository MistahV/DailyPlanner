$(document).ready(function() {

  //display current date on the page
  var date = moment();
  $("#currentDay").text(date.format("[Today's date is] MMM Do, YYYY"));
  

  var task9 = $("#9am")
    //user clicks save button..
  
    
      function saveTask() {
        
       var task9Input = task9.val();
       task9.text(task9Input);
       
       console.log(task9Input);

       localStorage.setItem("9 AM Task", task9Input);

         //get stuff user put in textarea
        //add that value to localstorage
        //show message
        //hide message after so many seconds
       }
       
    
    
       $('.saveBtn').on('click', saveTask);
    
      //  function updateRowColor() {
        //set variable to current time
        //loop over each row of the class (time-block)
          //find row time using data attribute (9 < 21)
          //add 'past' css class by doing $(this).addCLass('past');
            //use if else...
     
    
     //color rows based on the time of day --> get right class from css
    
      //  updateRowColor();
    
      //  } 
    
     //load data from local storage and put it in the correct row
     //set hourID textare to value of local storage key number 'hourID'
    
     
     //display current date on the age - moment (getdocumentbyID)
});
    