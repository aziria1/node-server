function redirectTo(url){
  $.get(url, function(data){
    $('#content').html(data);
  });
}
