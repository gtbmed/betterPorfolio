(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var options = [
        {selector: '#staggered-test', offset: 200, callback: function(el) {
            Materialize.showStaggeredList($(el));
        } },
      ];
      Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space
