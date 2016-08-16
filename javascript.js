$(document).ready(function() {

    console.log("ready!");

    var $btn = $('#request');
    var $bio = $('#bio');
    var $textInput = $("#myText");
    var $loader = $('.loader');
    $loader.hide();


    // $btn.on('click', function(e) {
    //
    //     // prevent the default behavior of the link
    //     e.preventDefault();
    //     console.log('click'); //Display if clicked
        //
        //     // execute the AJAX request
        $.ajax({
                // where the data live
                url: 'https://evening-crag-35759.herokuapp.com/profiles',
                type: 'GET',
                // what is their type
                dataType: 'JSON',
                // show the loader before making the request
                beforeSend: function(xhr) {
                    $loader.show();
                },
            }).done(successFunction)
            .fail(failFunction);
        //.always(alwaysFunction);

    // });

    function successFunction(data) {
        console.log('in successFunction');

        console.log("Data : " + data);
        $loader.hide();
        $( '<h4>' + 'About '+ data.name + '</h4>' + '<br>' ).appendTo($bio);
        $( '<b>' + 'email        : ' + '</b>' + '<p>' + data.email + '</p>' + '<br>'  ).appendTo($bio);
        $( '<b>' + 'Contact No.  : ' + '</b>' + '<p>' + data.contactnum + '</p>' + '<br>'  ).appendTo($bio);
        $( '<b>' + 'Hobbies      : ' + '</b>' + '<p>' + data.hobbies + '</p>' + '<br>'  ).appendTo($bio);
        $( '<b>' + 'Facebook page: ' + '</b>' + '<p>' + data.facebook + '</p>' + '<br>'  ).appendTo($bio);
    }

    function failFunction(request, textStatus, errorThrown) {
        // hide the list and show the corresponding message
        $bio.html('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
    }


 });
