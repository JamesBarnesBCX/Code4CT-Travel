// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").removeClass("active");
});
// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
            // $('#to-top').css({
            //     position: 'fixed',
            //     display: 'block'
            // });
            $('#to-top').show("fast", function() {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            // $('#to-top').css({
            //     position: 'fixed',
            //     display: 'none'
            // });

            $('#to-top').hide("fast", function() {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});

$(function() {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $("#menu-close").click();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    $('form').submit(function(event) {
        if (!document.getElementById('searchbox').value) {
            console.log("Needs value");
            event.preventDefault();
            return false;
        }
        return true;
    })
});

function displayOffers(toDisplay) {
    $('#offers-area').html(''); //reset content

    for (var i = 0; i < toDisplay.length; i++) {
        var offer = offersData[toDisplay[i]];
        document.getElementById('offers-area').innerHTML += '<div class="col-md-6"><div class="card"><div class="card-image"><img class="img-responsive" src="img/' + offer.image + '"></div><div class="card-content"><span class="card-title">' + offer.place + '</span><button type="button" class="btn btn-custom pull-right" aria-label="Left Align"><i class="fa fa-share-alt"></i></button></div><div class="card-action"><a class="show-desc" target="new_blank">Read More</a><a href="#" target="new_blank">Book Now</a></div><div class="card-reveal"><span class="card-title">' + offer.place + '</span><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><p>' + offer.description + '</p></div></div></div>';
    }

    if(toDisplay.length === 0){
      document.getElementById('offers-area').innerHTML += '<h3 style="display: block; text-align: center; padding: 10% 20px 10% 20px;">Unfortunately no search results, why not <a href="#search">make a new search</a></h3>';
    }
    if(toDisplay.length <7){
      $(".pager").hide();
    }
}


var offersData = [{
    "place": "Japan",
    "image": "japan.jpg",
    "description": "None"
}, {
    "place": "Mexico",
    "image": "mexico.jpg",
    "description": "None"
}, {
    "place": "Hawaii",
    "image": "hawaii.jpg",
    "description": "None"
}, {
    "place": "Morocco",
    "image": "morocco.jpg",
    "description": "None"
}, {
    "place": "Tibet",
    "image": "tibet.jpg",
    "description": "None"
}, {
    "place": "Egypt",
    "image": "egypt.jpg",
    "description": "None"
}, {
    "place": "Italy",
    "image": "italy.jpg",
    "description": "None"
}, {
    "place": "Czech Repuplic",
    "image": "czech.jpg",
    "description": "None"
}, {
    "place": "Peru",
    "image": "peru.jpg",
    "description": "None"
}, {
    "place": "New Zealand",
    "image": "newzealand.jpg",
    "description": "None"
}, {
    "place": "Malaysia",
    "image": "malaysia.jpg",
    "description": "None"
}, {
    "place": "India",
    "image": "india.jpg",
    "description": "None"
}, {
    "place": "United States of America",
    "image": "usa.jpg",
    "description": "None"
}, {
    "place": "Russia",
    "image": "russia.jpg",
    "description": "None"
}];
