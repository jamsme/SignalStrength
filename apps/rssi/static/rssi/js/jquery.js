$(document).ready(function () {

    $("button.waves-effect.waves-dark.btn-small").click(function() {
        console.log("rssi is clicked")
        
        var requests = [];

        for (var z = 0; z < 200; z++) {
            (function (index) {
                var req = $.ajax({
                    url: '/rssi',
                    success: function(resp) {
                        $("#dBm").html(resp + " dBm");
                        
                        if (resp <= 0 && resp >= -49) {
                            console.log("best", resp, index)
                            $("#text").html("Perfect Signal");
                            $(".card-panel").css('background-color', '#00c853');
                            // $(".card-panel").effect("bounce", { times: 3 }, "slow");
                        }
                        else if (resp <= -50 && resp >= -59) {
                            console.log(resp, "greater than 50 less than 59", index);
                            $(".card-panel").css('background-color', '#43a047');
                            $("#text").html("Excellent Signal");
                            // $(".card-panel").effect("bounce", { times: 3 }, "slow");
                        }
                        else if (resp <= -60 && resp >= -66) {
                            console.log(resp, "greater than 60 less than 66", index)
                            $(".card-panel").css('background-color', '#66bb6a');
                            $("#text").html("Good, Reliable Signal");
                            // $(".card-panel").effect("bounce", { times: 3 }, "slow");
                        }
                        else if (resp <= -67 && resp >= -69) {
                            console.log(resp, "greater than 67 less than 69", index)
                            $(".card-panel").css('background-color', '#fcdd0f');
                            $("#text").html("Minimum for voice & non HD browsing");
                            // $(".card-panel").effect("bounce", { times: 3 }, "slow");
                        }
                        else if (resp <= -70 && resp >= -79) {
                            console.log(resp, "greater than 70 less than 79", index)
                            $(".card-panel").css('background-color', '#f8a62b');
                            $("#text").html("Light browsing and email only");
                            // $(".card-panel").effect("bounce", { times: 3 }, "slow");
                        }
                        else if (resp <= -80) {
                            console.log(resp, "bad", index)
                            $(".card-panel").css('background-color', '#ef4522');
                            $("#text").html("Horrible Connection");
                            // $(".card-panel").effect("bounce", { times: 3 }, "slow");
                        }
                    },
                    error: function() {
                        console.log("Vetoed");
                    }
                });
                
                requests.push(req);

            })(z);
        };

        $("button.waves-effect.waves-light.btn-small").click(function() {
            console.log("stop button clicked")
            requests.forEach(request => request.abort());
        });

    });

});