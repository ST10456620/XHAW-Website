function calculateTotal() {
    let total = 0;
    let courses = document.querySelectorAll('.course:checked');

    courses.forEach(course => {
        total += parseFloat(course.value);
    });

    document.getElementById('total').innerText = "Total Fees: R" + total;
}

$(document).ready(function() {
    $('.fas.fa-bars').click(function() {
        $('.navbar').toggle(); 
    });
});

$(document).ready(function() {

$('.far-bars').click(function(){
$(this).toggleClass('fa-times');
$('.navbar').toggleClass('nav-toggle');   
});

$(window).on('scroll load',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('header').addClass('header-active');
    }else{
        $('header').removeClass('header-active');
    }

});
    
});

document.getElementById("enroll-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const cellphone = document.getElementById("cellphone").value;

    // Validate form fields
    if (name === "" || surname === "" || email === "" || cellphone === "") {
        alert("Please fill in all the required fields.");
    } else {
        // Personalize the success message
        const popupMessage = document.getElementById("popup-message");
        popupMessage.innerText = `Thank you, ${name}! Your application has been successfully submitted.`;

        // Display the pop-up
        const popup = document.getElementById("popup");
        popup.style.display = "block";

        setTimeout(function () {
            popup.style.display = "none";
        }, 3000);
    }
});

function enrollCourse() {
    document.getElementById('feedbackMessage').innerText = "Successful application!";
}
    

    


