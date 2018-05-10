$(document).ready(function () {
    $('#search'). on('click', function () {
      var content = $('#content').val();
      var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + content + '&format=json&callback=?';
      $.ajax({
        url: url,
        type: 'GET',
        async: false,
        dataType: 'jsonp',
        success: function (response) {
          console.log(response);
          $('#display'). html(''); //clears exist data before loop
          for (var i = 0; i < response[1].length; i++) {
            $('#display').append("<a href=" + response[3][i] + " target='blank'><h1>"
             + response[1][i] + "</h1></a>" + "<h3>" + response[2][i] + "</h3><br>");
           }
        },
        error: function (errorMessage) {
          alert('Error');
        }
      });

    });
    $('#content').keyup(function (event) {
        if (event.keyCode === 13) {
          $('#search').click();
        }
      });
  });
