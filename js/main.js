// MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

//function UpdateTime(){
        
  //  var today = new Date();
  /*var hour = today.getHours();
    var mins = today.getMinutes();
    var secs = today.getSeconds();

    if (secs <=9){
        secs = "0" + secs
    }

    var TotalTime = hour + ":" + mins + ":" + secs;

    if (document.layers) { 
        document.layers.time.document.write(TotalTime); 
        document.layers.time.document.close(); 
    }else if (document.all) { 
        time.innerHTML = TotalTime; 
    } 

    setTimeout("UpdateTime()", 1000) 

}

*/
/*
var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
if (minutes < 10) {
    minutes = "0" + minutes
}
var t_str = hours + ":" + minutes + " ";
if (hours > 11) {
    t_str += "PM";
} else {
    t_str += "AM";
}
document.getElementById('Currenttime').innerHTML = t_str;*/

/*
function showTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("hello").innerHTML =
        h + ":" + m + ":" + s;
    var c = setTimeout(starTime, 000);
}
function checkTime(a) {
    if (i < 10) { i = "0" + i };
    return i;
}
function startTime() {

    var today = new Date();

} 
*/
/*
window.onload = function() {
  clock();
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }
    if(hour==0){
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'am';
    }
  document.getElementById('Currenttime').innerHTML = hour+':'+min + mid ;
    setTimeout(clock, 1000);
    }
}
*/
/*
function date_time(id)
{        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if(h!<11)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}

window.onload = function () {
    clock();
    function clock() {
        var now = new Date();
        var new = new Date();
        var TwentyFourHour = now.getHours();
        var hour = now.getHours();
        var min = now.getMinutes();
        var mid = 'PM';
        if (min < 10) {
            min = "0" + min;
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (hour == 0) {
            hour = 12;
        }
        if (TwentyFourHour < 12) {
            mid = 'am';
        }
        document.getElementById('Currenttime').innerHTML = hour + ':' + min + mid;
        setTimeout(clock, 1000);
    }
}
function fullDateTime() {
    var d = new Date();
    var n = d.toLocaleString([], { hour12: true });
    document.getElementById("Currenttime").innerHTML = + n ;
}*/