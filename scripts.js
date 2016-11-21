$(document).ready(function(){

  $.ajax({
    url: 'https://chuck-req-h-parser-ms.herokuapp.com/api/whoami',
    type: 'GET',
    dataType: 'JSON',
    success: function(data){
        console.log(data);
        $('#ip-address').html(data.ipaddress);
        $('#language').html(data.language);
        $('#software').html(data.software);    
    }
  });

});