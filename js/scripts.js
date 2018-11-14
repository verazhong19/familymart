
// country opacity and welcome opacity

window.onload = 
document.getElementById('thailand').style.opacity = 0;
document.getElementById('vietnam').style.opacity = 0;
document.getElementById('china').style.opacity = 0;
document.getElementById('japan').style.opacity = 0;
document.getElementById('taiwan').style.opacity = 0;
document.getElementById('philippines').style.opacity = 0;
document.getElementById('indonesia').style.opacity = 0;

document.getElementById('thai-welcome').style.opacity = 0;
document.getElementById('viet-welcome').style.opacity = 0;
document.getElementById('chinese-welcome').style.opacity = 0;
document.getElementById('japanese-welcome').style.opacity = 0;
document.getElementById('taiwanese-welcome').style.opacity = 0;
document.getElementById('filipino-welcome').style.opacity = 0;
document.getElementById('indonesian-welcome').style.opacity = 0;







// side bar buttons

document.getElementById("thailand-text").onmouseover = function() {mouseOver1()};
document.getElementById("thailand-text").onmouseout = function() {mouseOut1()};

function mouseOver1() {
    document.getElementById("thailand").style.opacity = 1;
    document.getElementById('thai-welcome').style.opacity = 1;
    document.getElementById("ta").play();

}
function mouseOut1() {
      document.getElementById("thailand").style.opacity = 0;
      document.getElementById('thai-welcome').style.opacity = 0;

    
}

document.getElementById("vietnam-text").onmouseover = function() {mouseOver2()};
document.getElementById("vietnam-text").onmouseout = function() {mouseOut2()};

function mouseOver2() {
    document.getElementById("vietnam").style.opacity = 1;
    document.getElementById('viet-welcome').style.opacity = 1;
    document.getElementById("vt").play();
}
function mouseOut2() {
      document.getElementById("vietnam").style.opacity = 0;
      document.getElementById('viet-welcome').style.opacity = 0;
}


document.getElementById("china-text").onmouseover = function() {mouseOver3()};
document.getElementById("china-text").onmouseout = function() {mouseOut3()};

function mouseOver3() {
    document.getElementById("china").style.opacity = 1;
    document.getElementById('chinese-welcome').style.opacity = 1;
    document.getElementById("cn").play();
}
function mouseOut3() {
      document.getElementById("china").style.opacity = 0;
      document.getElementById('chinese-welcome').style.opacity = 0;
}


document.getElementById("japan-text").onmouseover = function() {mouseOver4()};
document.getElementById("japan-text").onmouseout = function() {mouseOut4()};

function mouseOver4() {
    document.getElementById("japan").style.opacity = 1;
    document.getElementById('japanese-welcome').style.opacity = 1;
    document.getElementById("jp").play();
    
}
function mouseOut4() {
      document.getElementById("japan").style.opacity = 0;
      document.getElementById('japanese-welcome').style.opacity = 0;
}

document.getElementById("taiwan-text").onmouseover = function() {mouseOver5()};
document.getElementById("taiwan-text").onmouseout = function() {mouseOut5()};

function mouseOver5() {
    document.getElementById("taiwan").style.opacity = 1;
    document.getElementById('taiwanese-welcome').style.opacity = 1;
    document.getElementById("tw").play();

}
function mouseOut5() {
      document.getElementById("taiwan").style.opacity = 0;
      document.getElementById('taiwanese-welcome').style.opacity = 0;
}

document.getElementById("philippines-text").onmouseover = function() {mouseOver6()};
document.getElementById("philippines-text").onmouseout = function() {mouseOut6()};

function mouseOver6() {
    document.getElementById("philippines").style.opacity = 1;
    document.getElementById('filipino-welcome').style.opacity = 1;
    document.getElementById("ph").play();

}
function mouseOut6() {
      document.getElementById("philippines").style.opacity = 0;
      document.getElementById('filipino-welcome').style.opacity = 0;
}

document.getElementById("indonesia-text").onmouseover = function() {mouseOver7()};
document.getElementById("indonesia-text").onmouseout = function() {mouseOut7()};

function mouseOver7() {
    document.getElementById("indonesia").style.opacity = 1;
    document.getElementById('indonesian-welcome').style.opacity = 1;
    document.getElementById("in").play();

}
function mouseOut7() {
      document.getElementById("indonesia").style.opacity = 0;
      document.getElementById('indonesian-welcome').style.opacity = 0;
}
