$(document).ready(function() {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var options = [
        {selector: '#staggered-test', offset: 500, callback: function(el) {
            Materialize.showStaggeredList($(el));
        } },
      ];
      Materialize.scrollFire(options);

}); // end of document ready
