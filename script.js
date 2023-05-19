
/*change navbar bgcolor*/
function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;

    if(scrollValue <= 100){
        navbar.classList.remove('bgcolor');
    }
    else{
        navbar.classList.add('bgcolor');
    
    }
    
}

window.addEventListener('scroll',changeBg);



/*scroll up than visible searchbar*/
$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if(scroll <= 100){
        $(".searchBar,.Buttons").removeClass("visible");
        
    }else{
        $(".searchBar,.Buttons").addClass("visible");
     
    }
});




/*sign in , sign up form visible password icon*/
const forms=document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click",() =>{
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password =>{
            if(password.type === "password"){
                password.type= "text";
                eyeIcon.classList.replace("bx-hide" ,"bx-show" );
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show" , "bx-hide");
        })
    })
})

/*date-picker

function showDatePicker() {
    var datePicker = $('#datepicker');
    if (datePicker.css('display') === 'none') {
      datePicker.show();
    } else {
      datePicker.hide();
    }
  }
  
  $(document).ready(function() {
    // Attach a click event listener to the start date input field
    $('#start-date').click(showDatePicker);
  
    // Attach a click event listener to the end date input field
    $('#end-date').click(showDatePicker);
  
    // Initialize the date picker
    $('#datepicker').datepicker({
      onSelect: function(dateText, inst) {
        var selectedDate = new Date(dateText);
        var startDate = $('#start-date');
        var endDate = $('#end-date');
  
        // Set the selected date in the corresponding input field
        if (startDate.val() === '') {
          startDate.val(dateText);
        } else if (endDate.val() === '') {
          endDate.val(dateText);
          $('#datepicker').hide();
        } else {
          startDate.val(dateText);
          endDate.val('');
        }
      }
    });
  });*/
  
  $(function() {
    $('#daterange').daterangepicker({
      opens: 'left'
    });
  });
  


