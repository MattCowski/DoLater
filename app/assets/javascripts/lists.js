// alert('clicked');
jQuery.fn.submitOnCheck = function () {
	this.find('input[type=submit]').remove();
  this.find('input[type=checkbox]').click(function () {
  // $('.edit_list input[type=checkbox]').click(function () {
    $(this).parent('form').submit();
  });  
  return this;
}

$(function () {
  $('.edit_list').submitOnCheck();
});