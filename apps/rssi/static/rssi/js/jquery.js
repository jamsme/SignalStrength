$(document).ready(function () {

    $("button.waves-effect.waves-dark.btn-small").click(function() {
        console.log("button is clicked")
        
        var requests = [];
        var limit = 100

        for (var i = 0; i < limit; i++) {
            var req = $.ajax({
                url: '/rssi',
                success: function(resp) {
                    $("#dBm").html(resp + " dBm");

                    if (resp <= -0 && resp >= -49) {
                        console.log("best", resp)
                        $(".card-panel").css('background-color', '#7eca26')
                        $("#text").html("Perfect Signal");
                    }
                    else if (resp <= -50 && resp >= -59) {
                        console.log(resp, "greater than 50 less than 59")
                        $(".card-panel").css('background-color', '#cce110')
                        $("#text").html("Excellent Signal");
                    }
                    else if (resp <= -60 && resp >= -66) {
                        console.log(resp, "greater than 60 less than 66")
                        $(".card-panel").css('background-color', '#f2ee1c')
                        $("#text").html("Good, Reliable Signal");
                    }
                    else if (resp <= -67 && resp >= -69) {
                        console.log(resp, "greater than 67 less than 69")
                        $(".card-panel").css('background-color', '#fcdd0f')
                        $("#text").html("Good, Reliable Signal");
                    }
                    else if (resp <= -70 && resp >= -79) {
                        console.log(resp, "greater than 70 less than 79")
                        $(".card-panel").css('background-color', '#f8a62b')
                        $("#text").html("Light browsing and Email only");
                    }
                    else if (resp >= -80) {
                        console.log(resp, "bad")
                        $(".card-panel").css('background-color', '#ef4522')
                        $("#text").html("Horrible Connection");
                    }
                },
                error: function() {
                    console.log("Vetoed");
                }
            });

            requests.push(req);

        };

        $("button.waves-effect.waves-light.btn-small").click(function() {
            console.log("stop button clicked")
            requests.forEach(request => request.abort());
        });

    });

});