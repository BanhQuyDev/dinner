
function activeTogglebar(){
    document.getElementById("togglebar").style.display ="flex";
}

function closeTogglebar(){
    document.getElementById("togglebar").style.
    display ="none";
}

function displayMoon(){
    document.getElementById("moon").style.display ="none";
    document.getElementById("sun").style.display ="block";
   
    document.getElementById("about").style.backgroundColor = ["#232220"];
    document.getElementById("categories").style.backgroundColor = ["#282828"];
    document.getElementById("menu").style.backgroundColor = ["#232220"];
    document.getElementById("video").style.backgroundColor = ["#232220"];
    document.getElementById("blog").style.backgroundColor = ["#282828"];
    document.getElementById("feedback").style.backgroundColor = ["#232220"];
    // code xung đột với jquery nên e đổi qua hiệu ứng khác
    var x = document.getElementsByClassName("stats__square");
    for (var opa = 0; opa < x.length; opa++){
        x[opa].style.opacity = ".7"
    }
          
    var y = document.querySelectorAll("p");
    for (var i = 0; i < y.length; i++){
        y[i].style.color = ["#c2d0da"];
    }
    
    var z = document.querySelectorAll("h3");
    for (var k = 0; k < z.length; k++){
        z[k].style.color = ["#eee"];
    }

    var v = document.querySelectorAll("q");
    for (var j = 0; j < v.length; j++){
        v[j].style.color = ["#eee"];
    }

    var t = document.querySelectorAll("h5");
    for (var l = 0; l < t.length; l++){
        t[l].style.color = ["#eee"];
    }
    document.getElementById("banner_p").style.color =["#fff"];

    var a = document.getElementsByClassName("categories__num");
    for (var s = 0; s < a.length; s++){
        a[s].style.color = ["#ffc600"];
    }

    var booking_a = document.getElementsByClassName("booking_a");
    for (var m = 0; m < booking_a.length; m++){
        booking_a[m].style.color = ["#eee"];
    }
      
}

function displaySun(){
    document.getElementById("moon").style.display ="block";
    document.getElementById("sun").style.display ="none";
   
    document.getElementById("header-input").style.backgroundColor = ["#fff"];
    document.getElementById("header-btn").style.backgroundColor = ["#fff"];
    document.getElementById("about").style.backgroundColor = ["#fff"];
    document.getElementById("categories").style.backgroundColor = ["#f7f7f7"];
    document.getElementById("menu").style.backgroundColor = ["#FFFFFF"];
    document.getElementById("video").style.backgroundColor = ["#fff"];
    document.getElementById("blog").style.backgroundColor = ["#F7F7F7"];
    document.getElementById("feedback").style.backgroundColor = ["#fff"];
    // code xung đột với jquery nên e đổi qua hiệu ứng khác
    var x = document.getElementsByClassName("stats__square");
    for (var opa = 0; opa < x.length; opa++){
        x[opa].style.opacity = "1"
    }

    var y = document.querySelectorAll("p");
    for (var i = 0; i < y.length; i++){
        y[i].style.color = ["#161c2db3"];
    }
    
    var z = document.querySelectorAll("h3");
    for (var k = 0; k < z.length; k++){
        z[k].style.color = ["#232121"];
    }

    var v = document.querySelectorAll("q");
    for (var j = 0; j < v.length; j++){
        v[j].style.color = ["#232121"];
    }

    var t = document.querySelectorAll("h5");
    for (var l = 0; l < t.length; l++){
        t[l].style.color = ["#232121"];
    }
    
    document.getElementById("contact_p1").style.color =["#a5a2a1"];

    document.getElementById("contact_p2").style.color =["#a5a2a1"];
    
    document.getElementById("banner_p").style.color =["#fff"];

    var booking_b = document.getElementsByClassName("booking_b");
    for (var e = 0; e < booking_b.length; e++){
        booking_b[e].style.color = ["#ffdfc9"];
    }

    var booking_a = document.getElementsByClassName("booking_a");
    for (var m = 0; m < booking_a.length; m++){
        booking_a[m].style.color = ["#232121"];
    }

    var a = document.getElementsByClassName("categories__num");
    for (var s = 0; s < a.length; s++){
        a[s].style.color = ["#ffc600"];
    }   
   
}

