function smart_header(){
  var $win = $(window),
      $header = $('#content_nav_inner_wrapper'),
      headerPos = $header.offset().top,
      startPos = 0;

  $win.on('scroll', function() {
    var value = $(this).scrollTop();
    if ( value >= headerPos ) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
    startPos = value;
  });
}
