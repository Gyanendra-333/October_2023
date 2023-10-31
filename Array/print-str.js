// JavaScript program to find indices of all
// occurrences of one String in other.

function printIndex(str, s) {
    var flag = false;
    for (var i = 0; i < str.length - s.length + 1; i++) {
        if (str.substring(i, s.length + i) == s) {
            console.log(i + " ");
            flag = true;
        }
    }

    if (flag === false) {
        console.log("NONE");
    }
}

var str1 = "Relevel";
var str2 = "By Unacademy";
printIndex(str1, str2);
