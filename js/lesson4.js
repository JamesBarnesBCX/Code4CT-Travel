/*
  Module 3 - Lesson 4
*/

var popularity = [23, 46, 32, 67, 21, 7, 43, 56, 34, 92, 91, 84, 78, 65];
/*
  Your code
*/







/*
  End of your code
*/
function runMostPopular(popularity, times) {
    var results = [];
    for (var i = 0; i < times; i++) {
        var most = popularity.indexOf(mostPopular(popularity));
        console.log((i + 1) + " popularity: index is " + most + " value of " + popularity[most]);
        popularity[most] = 0;
        results.push(most);
    }

    displayOffers(results);
}

runMostPopular(popularity, 4);

$(function() {

    $('.show-desc').on('click', function(event) {
        $(event.target).closest('.card').find('.card-reveal').slideToggle('slow');
    });

    $('.card-reveal .close').on('click', function(event) {
        $(event.target).closest('.card').find('.card-reveal').slideToggle('slow');
    });
});
