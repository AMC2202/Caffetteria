
var navbar = 
        '<div class="logo">'+
            '<img src="coffeeIcon.webp" alt="logo" width="45px" height="auto">'+
        '</div>'+
        '<ul id="menu-mob" class="menu reg-text">'+
            '<li><a href="">Home</a></li>'+
            '<li><a href="">Shop</a></li>'+
            '<li><a href="">Contact</a></li>'+
            '<li style="float: right;"><a href="">LOGIN</a></li>'+
            '<li style="float: right;"><a href="">Sign up</a></li>'+
        '</ul>'+
        '<div id="ham" class="hamburger" onclick="enter()">'+
            '<div class="bar1"></div>'+
            '<div class="bar2"></div>'+
            '<div class="bar3"></div>'+
        '</div>';

document.getElementById("nav").innerHTML = navbar;