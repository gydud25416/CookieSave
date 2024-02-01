
$(document).ready(function () {
    tabView();
});

var sdate = new Date("2019/09/20 16:30:00");
var edate = new Date("2019/09/22 21:00:00");

if (Date.now() >= sdate && Date.now() <= edate) {
    tabView();
}

function tabView() {
    if (getCookie("tabPopup") != "done") {
        $('ul').removeClass('on');
    } else {
        $('ul').addClass('on');
    }
}

function getCookie(tabname) {
    var nameOfCookie = tabname + "=";
    var x = 0;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1) {
                endOfCookie = document.cookie.length;
            }
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x == 0) break;
    }
    return "";
}

function setCookie(tabname, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = tabname + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function closeTap() {
    if ($('ul').hasClass('on') == false ) setCookie("tabPopup", "done", 1);
    if ($('ul').hasClass('on')) setCookie("tabPopup", "1", 1);
    if($('ul').hasClass('on')){$('ul').removeClass('on');}else{$('ul').addClass('on');}
    
}
