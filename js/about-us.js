$(document).ready(function() {
    $('#accordion .collapse').on('show.bs.collapse', function () {
      $(this).prev().find('.indicator').text('-');
    });
  
    $('#accordion .collapse').on('hide.bs.collapse', function () {
      $(this).prev().find('.indicator').text('+');
    });
  });
  