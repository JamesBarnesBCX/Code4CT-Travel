/*
Module 3 - Lesson 1
-------------------------------------------------------------------------------

Lesson Exersize
----------------------------------



Notes
-----------------------------------
Use JavaScript to make the background of the index.html header change every 5 seconds.

Use:
    element = document.getElementById(id);
    and
    element.style.property = "value";

    To change line 55 of index.html which is:
    <header id="top" class="header" style="background: url(img/01.jpeg) no-repeat center center scroll;">

Example:
    if (document.getElementById("top").style.background === 'url("img/01.jpeg") center center no-repeat scroll') {
      alert("It is true");
    }

    This will check if the element with id of top has that specific background style.

Use:
    setInterval(function,milliseconds);

    to make a function every so many milliseconds.

Example:
    setInterval(function(){alert("Hi there");}, 3000);

    This will create an alert every 3 seconds that says "Hi there".

*/
