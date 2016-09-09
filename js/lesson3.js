/*
Module 3 - Lesson 3
-------------------------------------------------------------------------------
*/

// This function gets a named value from the URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

if (getParameterByName('search')) {
    var searchTerm = getParameterByName('search');
    $("#intro-line").html("<b>" + searchTerm + "</b> - Search Results ");
    $("#intro-line").append('<a href="offers.html" style="color: white"><i class="fa fa-close"></i></a>');
    $("#searchButton").hide();

    displayOffers(searchResults(searchTerm));
}


// Your code goes here, modify the searchResults function to return an array of offers which fit the search
function searchResults(term) {
    var results = [];

    return results;
}
