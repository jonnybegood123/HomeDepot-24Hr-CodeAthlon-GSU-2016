$(function() {
  $('btn btn-primary disabled').click( function() {
    $(this).addClass('active').siblings().removeClass('disabled');
  });
});
