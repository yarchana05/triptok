
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





/*start-date and end-date calender
function setDatepicker(_this){
    let className = $(_this).parent()
        .parent().parent().attr('class');
    let removeSpace = className.replace(' ', '.');
        $("." + removeSpace).datepicker({
            format : "dd/mm/yyyy",
            orientation: "bottom auto",
            autoclose: true,
            showOnFocus: "false"
        });
}*/
$(function () {
    $("#date").datepicker({
        dateFormat: "dd-M-yy",
        minDate:1
    });

    $(".date-icon").on("click",function(){
        $("#date").focus();
    });
});