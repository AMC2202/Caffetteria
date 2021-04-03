var signupForm = 
    '<form class="modal-content animate">'+
        '<div class="imgcontainer">'+
            '<span onclick="document.getElementById(\'signup\').style.display=\'none\'" class="close" title="Close Modal">&times;</span>'+
        '</div>'+
        '<div class="log-container">'+
            '<p class="lig-text fwb tb pb-0 pt-1">Fill in this form to create an account</p>'+
            '<hr>'+
            '<label for="uname"><p class="reg-text pb-0 tsl">Username</p></label>'+
            '<input type="text" placeholder="Enter Username" name="uname" required>'+
            '<label for="psw"><p class="reg-text pb-0 tsl">Password</p></label>'+
            '<input type="password" placeholder="Enter Password" name="psw" required>'+
            '<label for="psw"><p class="reg-text pb-0 tsl">Confirm Password</p></label>'+
            '<input type="password" placeholder="Repeat Password" name="psw" required>'+
            '<button type="submit">Sign up</button>'+
        '</div>'+
    '</form>';

document.getElementById("signup").innerHTML = signupForm;

function openSign(){
    document.getElementById('signup').style.display = "block";
    document.getElementById('login').style.display = "none";
  }

  // Get the modal (signupForm)
var modal_sign = document.getElementById('signup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event2) {
  if (event2.target == modal_sign) {
      modal_sign.style.display = "none";
  }
}