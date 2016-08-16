$(document).ready(function() {

    console.log("ready!");

    var $btn = $('#request');
    var $bio = $('#bio');
    var $textInput = $("#myText");
    var $loader = $('.loader');
    $loader.hide();


    $btn.on('click', function(e) {

        // prevent the default behavior of the link
        e.preventDefault();
        console.log('click'); //Display if clicked
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

    });

    function successFunction(data) {
        console.log('in successFunction');
        // To display degree Celius"&#8451;"
        console.log("Data : " + data);
        $loader.hide();
        //$bio.html('weather here in ' + data.name);
    }

    function failFunction(request, textStatus, errorThrown) {
        // hide the list and show the corresponding message
        $bio.html('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
    }



    // $btn.on('click', function(e) {
    //
    //     // prevent the default behavior of the link
    //     e.preventDefault();
    //     console.log('click'); //Display if clicked
    //
    //     // execute the AJAX request
    //     $.ajax({
    //             // where the data live
    //             url: 'http://api.openweathermap.org/data/2.5/weather?q=Singapore&units=metric&APPID=24801b8eecaa5f34812e5e8f1d25b62d',
    //             type: 'GET',
    //             // what is their type
    //             dataType: 'JSON',
    //             // show the loader before making the request
    //             beforeSend: function(xhr) {
    //                 $loader.show();
    //             },
    //         }).done(successFunction)
    //         .fail(failFunction);
    //         //.always(alwaysFunction);
    // });
    //
    // function successFunction(data) {
    //     console.log('in successFunction');
    //
    //     // To display degree Celius"&#8451;"
    //
    //     console.log(data);
    //     console.log('Country name: ' + data.name );
    //     console.log('Country code: ' + data.sys.country );
    //     console.log('Main Temperature: ' + data.main.temp );
    //     console.log('Max Temperature: ' + data.main.temp_max );
    //     console.log('Min Temperature: ' + data.main.temp_min );
    //     console.log('Cloudiness: ' + data.clouds.all + ' % ');
    //
    //     $loader.hide();
    //     $bio.html('weather here in ' + data.name);
    // }
    //
    // function failFunction(request, textStatus, errorThrown) {
    //     // hide the list and show the corresponding message
    //     $bio.html('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
    // }

});
