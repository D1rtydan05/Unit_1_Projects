"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Daniel Garcia
   Date:   1-16-20

*/

// uhhh this is for the date
var thisTime = new Date("2/3/2018, 3:15:28 AM");

var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;


// this separates the current time into hours and months
var thisHour = thisTime.getHours();

var thisMonth = thisTime.getMonth();


// Help me im stuck
var mapNum = (2 * thisMonth + thisHour) % 24;

var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

document.getElementById("planisphere").insertAdjacentHTML("afterbegin",imgStr);

