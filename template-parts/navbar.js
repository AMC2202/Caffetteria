
var navbar = 
        '<div class="logo">'+
            '<img src="C:/Users/Caffeina/Caffetteria/img/coffeeIcon.webp" alt="logo" width="45px" height="auto">'+
        '</div>'+
        '<ul id="menu-mob" class="menu reg-text">'+
            '<li><a href="file:///C:/Users/Caffeina/Caffetteria/index.html">Home</a></li>'+
            '<li><a href="file:///C:/Users/Caffeina/Caffetteria/pages/Shop.html">Shop</a></li>'+
            '<li><a href="">Contact</a></li>'+
            '<li style="float: right;"><div class="cta" onclick="openLog()">LOGIN</div></li>'+
            '<li style="float: right;"><div class="cta" onclick="openSign()">Sign up</div></li>'+
        '</ul>'+
        '<div id="ham" class="hamburger" onclick="enter()">'+
            '<div class="bar1"></div>'+
            '<div class="bar2"></div>'+
            '<div class="bar3"></div>'+
        '</div>';

document.getElementById("nav").innerHTML = navbar;