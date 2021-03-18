var loginForm = 
    '<form class="modal-content animate">'+
        '<div class="imgcontainer">'+
            '<span onclick="document.getElementById(\'login\').style.display=\'none\'" class="close" title="Close Modal">&times;</span>'+
        '</div>'+
        '<div class="log-container">'+
            '<label for="uname"><p class="reg-text pb-0 tsl">Username</p></label>'+
            '<input type="text" placeholder="Enter Username" name="uname" required>'+
            '<label for="psw"><p class="reg-text pb-0 tsl">Password</p></label>'+
            '<input type="password" placeholder="Enter Password" name="psw" required>'+
            '<button type="submit">Login</button>'+
        '</div>'+
    '</form>';
//</input><label>
//    <input type="checkbox" checked="checked" name="remember">Remember me
//</label> 

//<input>/<div class="log-container" style="background-color:#f1f1f1">
//    <button type="button" onclick="document.getElementById('login').style.display='none'" class="cancelbtn">Cancel</button>
//    <span class="psw">Forgot <a href="#">password?</a></span>
//</div> 

document.getElementById("login").innerHTML = loginForm;